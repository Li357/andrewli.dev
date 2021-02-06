---
layout: stackoverflow
title: 'Why does instanceof evaluate to true here?'
qalink: https://stackoverflow.com/q/45772705/5647260
tags: node.js
---

## Question

In this snippet, the statement `f instanceof PipeWritable` returns true (Node v8.4.0):

```js
const stream = require('stream');
const fs = require('fs');

class PipeWritable extends stream.Writable {
    constructor () {
        super();
    }
}

const s = new PipeWritable();
const f = fs.createWriteStream('/tmp/test');

console.log(f instanceof PipeWritable); // true ... ???
```

**Object `s`**:  
- `Object.getPrototypeOf(s)` is `PipeWritable {}`  
- `s.constructor` is `[Function: PipeWritable]`
- `PipeWritable.prototype` is `PipeWritable {}`

**Object `f`:**  
- `Object.getPrototypeOf(f)` is `WriteStream { ... }`  
- `f.constructor` is `[Function: WriteStream] ...`  
- `stream.WriteStream.prototype` is `Writable { ... }`

**Prototype chains**:  
```
Object f                    Object s
---------------------       --------------------
  Writable                    PipeWritable
    Stream                      Writable
      EventEmitter                Stream
        Object                      EventEmitter
                                      Object
```

Following the [definition of **instanceof**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/instanceof):
> The instanceof operator tests whether an object in its prototype chain has the prototype property of a constructor.

I would expect that `(f instanceof PipeWritable) === false`, because `PipeWritable` is not in the prototype chain of `f` (the chain above is verified by calls of `Object.getPrototypeOf(...)`).  
But it returns `true`, therefore something is wrong in my analysis.

What's the correct answer?

## Answer

This is due to a certain part of code in the Node.js source, in [`_stream_writable.js`](https://github.com/nodejs/node/blob/master/lib/_stream_writable.js#L175):

```js
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance) {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function(object) {
      if (realHasInstance.call(this, object))
        return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function(object) {
    return object instanceof this;
  };
}
```

By [language specification](http://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator), the `instanceof` operator uses the well-known symbol `@@hasInstance` to check if an object *O* is an instance of constructor *C*:

> ### 12.9.4 Runtime Semantics: InstanceofOperator(O, C)
>
> The abstract operation *InstanceofOperator(O, C)* implements the generic algorithm for determining if an object *O* inherits from the inheritance path defined by constructor *C*. This abstract operation performs the following steps:
>
> 1. If [Type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values)(*C*) is not Object, throw a **TypeError** exception.
> 2. Let *instOfHandler* be [GetMethod](http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod)(*C*,@@hasInstance).  
> 3. [ReturnIfAbrupt](http://www.ecma-international.org/ecma-262/6.0/#sec-returnifabrupt)(*instOfHandler*).  
> 4. If *instOfHandler* is not **undefined**, then  
> a. Return [ToBoolean](http://www.ecma-international.org/ecma-262/6.0/#sec-toboolean)([Call](http://www.ecma-international.org/ecma-262/6.0/#sec-call)(*instOfHandler*, *C*, *«O»*)).
> 5. If [IsCallable](http://www.ecma-international.org/ecma-262/6.0/#sec-iscallable)(*C*) is **false**, throw a **TypeError** exception.
> 6. Return [OrdinaryHasInstance](http://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance)(*C*, *O*).

Now let me break down the code above for you, section by section:

```js
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance) {
  …
} else {
  …
}
```

The above snippet defines `realHasInstance`, checks if `Symbol` is defined and if the well-known symbol `hasInstance` exists. In your case, it does, so we'll ignore the `else` branch. Next:

```js
realHasInstance = Function.prototype[Symbol.hasInstance];
```

Here, `realHasInstance` is assigned to [`Function.prototype[@@hasInstance]`](http://www.ecma-international.org/ecma-262/6.0/#sec-function.prototype-@@hasinstance):

> ### 19.2.3.6 Function.prototype[@@hasInstance] ( V )
>
> When the @@hasInstance method of an object *F* is called with value *V*, the following steps are taken:
>
> 1. Let *F* be the **this** value.
> 2. Return [OrdinaryHasInstance](http://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance)(*F*, *V*).

The `@@hasInstance` method of `Function` just calls OrdinaryHasInstance. Next:

```js
Object.defineProperty(Writable, Symbol.hasInstance, {
  value: function(object) {
    if (realHasInstance.call(this, object))
      return true;

    return object && object._writableState instanceof WritableState;
  }
});
```

This defines a new property on the `Writable` constructor, the well-known symbol `hasInstance` -- essentially implementing its own custom version of `hasInstance`. The value of `hasInstance` is a function that takes one argument, the object that is being tested by `instanceof`, in this case `f`.

The next line, the if statement, checks if `realHasInstance.call(this, object)` is truthy. Mentioned earlier, `realHasInstance` is assigned to `Function.prototype[@@hasInstance]` which is actually calling the internal operation [OrdinaryHasInstance(C, O)](http://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance). The operation OrdinaryHasInstance just checks if O is an instance of C as you and MDN described, by looking for the constructor in the prototype chain.

In this case, a Writable `f` is not an instance of a subclass of Writable (`PipeWritable`) thus `realHasInstance.call(this, object)` is false. Since that is false, it goes to the next line:

```js
return object && object._writableState instanceof WritableState;
```

Since `object`, or `f` in this case, is truthy, and since `f` is a Writable with a `_writableState` property that is an instance of `WritableState`, `f instanceof PipeWritable` is **true**.

---

The reason for this implementation is in the [comments](https://github.com/nodejs/node/blob/master/lib/_stream_writable.js#L173):

```js
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
```

Because Duplex streams are technically Writables, but their prototype chains only point to Readable, an extra check to see if `_writableState` is an instance of `WritableState` allows `duplexInstance instanceof Writable` to be true. This has a side effect that you discovered -- a Writable being 'an instance of a child class'. This is a bug and should be reported.

This is actually even reported in the [documentation](https://nodejs.org/api/stream.html#stream_implementing_a_duplex_stream):

> Note: The `stream.Duplex` class prototypically inherits from `stream.Readable` and parasitically from `stream.Writable`, but `instanceof` will work properly for both base classes due to overriding [`Symbol.hasInstance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) on `stream.Writable`.

There are consequences to inheriting parasitcally from Writable as shown here.

---

I submitted an [issue on GitHub](https://github.com/nodejs/node/issues/14943) and it looks like it'll be fixed. As [Bergi mentioned](https://stackoverflow.com/questions/45772705/why-does-instanceof-evaluate-to-true-here#comment78504779_45773086), adding a check to see if `this === Writable`, making sure only Duplex streams were instances of Writable when using `instanceof`. There's a [pull request](https://github.com/nodejs/node/pull/14945).
