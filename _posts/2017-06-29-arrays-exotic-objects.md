---
layout: stackoverflow
title: 'Why does this array-like object behave like this?'
qalink: https://stackoverflow.com/q/44815940/5647260
tags: cs:javascript
---

## Question

By setting the prototypal methods of an object to Array methods, the object behaves like a hybrid between an object and an array. Below is a simple example:

```js
function Foo() {}
Foo.prototype.push = Array.prototype.push;
Foo.prototype.forEach = Array.prototype.forEach;

var foo = new Foo();

foo.push('abc');

foo.length; // = 1 as expected. But wait, why isn't foo.length undefined? How/when did this property get attached to foo? 

foo[1] = 'def';

foo.length; // still = 1. But foo={0:'abc',1:'def'}, Why not =2?

foo.forEach(function(item) {
  console.log(item)
}); //shows only'abc' and not 'def'

foo.push('ghi');

foo.length; // = 2, and now foo = {0:'abc', 1:'ghi'}. So it overwrote the key=1, which means its accessing the same location, but the first approach did not change the length ( didn't become a part of the array ) why ?

foo.forEach(function(item) {
  console.log(item)
}); //now shows 'abc' and 'ghi'
```

Why is all this weird behavior happening, and why isn't it good to mimic Arrays like this?

## Answer

### How is the `length` property set?

When you invoked the `Array#push`, or in this case, `Foo#push` method. Per the [ECMAScript 2015 Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.push):

> **22.1.3.17 Array.prototype.push ( ...items )**
>
> [...]
>
> 8. [...]
>
>    [...]
>
>    d. Let *len* be *len+1* 
>
> 9. Let *setStatus* be [Set](http://www.ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw)(*O*, **`"length"`**, *len*, **true**).

So when you invoke the function, it automatically sets the length property if it doesn't exist, to the value `len` which is incremented every time you push.

### Why isn't the length 2?

Now, when you directly set an index in the array, the length property is not updated. That's because arrays in JavaScript are [exotic objects](http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects) which internally increment length when you set properties directly. Per the specification again:

> **9.4.2 Array Exotic Objects**
>
> [...] whenever an own property of an Array object is created or changed, other properties are adjusted as necessary to maintain this invariant. Specifically, whenever an own property is added whose name is an array index, the value of the **`length`** property is changed, if necessary, to be one more than the numeric value of that array index;

By definition, an exotic object is any object that overrides internal methods that all normal objects have. In this case, the array exotic object overrides the internal `[[DefineOwnProperty]]` method so that when you define a property of the array such as setting an index, it takes extra steps to make sure things such as the property `length` is updated. Your `Foo` constructor does not create exotic objects, thus it doesn't override the `[[DefineOwnProperty]]` internal method like arrays do -- and thus doesn't update `length` when you directly define a value at an index.

### Why does `push` push to the previous index?

Since `Foo`s are not exotic objects and thus don't auto-increment `length` when an element is added directly with `foo[1] = 'def'`, the `length` remains 1 when you try to push to it the second time. If we look at `Array#push` again:

> **22.1.3.17 Array.prototype.push ( ...items )**
>
> [...]
>
> 3. Let *len* be [ToLength](http://www.ecma-international.org/ecma-262/6.0/#sec-tolength)([Get](http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p)(*O*, **`"length"`**)).
>
> [...]
>
> 5. Let *items* be a [List](http://www.ecma-international.org/ecma-262/6.0/#sec-list-and-record-specification-type) whose elements are, in left to right order, the arguments that were passed to this function invocation.
>
> [...]
>
> 8. Repeat, while *items* is not empty<br>
> a. Remove the first element from *items* and let *E* be the value of the element.<br>
> b. Let *setStatus* be [Set](http://www.ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw)(*O*, [ToString](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring)(*len*), *E*, **true**).

Thus, since your array length is still 1 because `foo[1] = 'def'` did not modify the `length` property, it would set the new to-be-pushed element at index 1 because the length was 1.

The same principle applies to [`Array#forEach`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach). `forEach` depends on `length` to iterate through the array. Since your length is not modified when you do `foo[1] = 'def'` and remains 1, `forEach` only iterates from indices [0, 1) causing it to only log the first element. Pushing updates the length and causes it to iterate from [0, 2) and logs both elements.

### Why shouldn't I do this?

It's because arrays are exotic objects. They do not get along with regular objects, in the sense that regular objects fundamentally cannot achieve the same behavior as exotic ones. Exotic objects, by definition, override the default behavior of internal methods to achieve certain behaviors needed for functionality. Arrays, in this case, have to especially handle setting indices and managing length -- done with the internal method `[[DefineOwnProperty]]`. With a regular object, it doesn't override `[[DefineOwnProperty]]` so many basic operations do not work correctly as a result -- so you shouldn't do it. 

You could, though, use an exotic object such as the [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object to implement your own code for `[[DefineOwnProperty]]` like arrays to mock the behavior. Another way, as [loganfsmyth](https://stackoverflow.com/questions/44815940/why-does-this-array-like-object-behave-like-this#comment76612728_44816011) mentioned, you could use ES2015 classes to [extend and subclass builtin exotic object constructors](http://2ality.com/2013/03/subclassing-builtins-es6.html) correctly thus mimicking array behavior.