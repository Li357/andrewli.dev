---
layout: stackoverflow
title: 'Does Java have a “private protected” access modifier?'
qalink: https://stackoverflow.com/q/41431533/5647260
tags: java
---

## Question

I have seen some references refer to a access modifier in Java called `private protected` (both words together):

```java
private protected someMethod() {
  …
}
```

One of the pages I found referring to this is [here][1]. My school lesson also referred to this access modifier (and said it exists). Using it, however, results in an error in the Java language.

I tried with both variables and methods and I'm pretty sure it doesn't exist, but I want an explanation of what happened. Was it considered, then rejected? Or did it get removed in a newer version of Java?

[1]:https://www.cs.princeton.edu/courses/archive/spr96/cs333/java/tutorial/java/javaOO/methodaccess.html

## Answer

### Removal of the access modifier

Java did originally have the `private protected` modifier, but it was removed in JDK 1.0.2 (the first **stable** version, the Java 1.0 we know today). A few tutorials regarding JDK 1.0.2 ([here](http://journals.ecs.soton.ac.uk/java/tutorial/java/javaOO/accesscontrol.html) and [here](http://web.mit.edu/java_v1.0.2/www/tutorial/java/javaOO/accesscontrol.html)) say the following:

> Note: The 1.0 release of the Java language supported five access levels: the four listed above plus `private protected`. The `private protected` access level is not supported in versions of Java higher than 1.0; you should no longer be using it in your Java programs.

Another [answer on SoftwareEngineering.SE](https://softwareengineering.stackexchange.com/a/238592) states:

> Java originally had such a modifier. It was written `private protected` but removed in Java 1.0.

Now take a look at the [Java Version History](https://en.wikipedia.org/wiki/Java_version_history):

> **JDK 1.0**
>
> The first version was released on **January 23, 1996** and called Oak. **The first stable version, JDK 1.0.2, is called Java 1.**

From this, we can conclude the tutorials regarding version 1.0.2 refer to the very first version, JDK 1.0, where the language was called Oak, but the one from SoftwareEngineering.SE refers to the first stable version, JDK 1.0.2 called Java 1.0, where it was removed. 

Now if you try to search for it in the [Java 1.0 documentation](http://titanium.cs.berkeley.edu/doc/java-langspec-1.0/), you won't find it, because as mentioned earlier, it was removed in JDK 1.0.2, otherwise known as Java 1.0. This is proven again when you look at the "Last Modified" times for the link you posted. The link you posted was last modified in February of 1996. Java 1.0/JDK 1.0.2, when `private protected` was removed, was released *after February of 1996*, and according to the specification, August of 1996.

### Reason for removal

Some sources also explain the reason for `private protected`, such as [this](http://docstore.mik.ua/orelly/java/exp/ch05_07.htm) one. To quote:

> **What was private protected?**
>
> Early on, the Java language allowed for certain combinations of modifiers, one of which was `private protected`. The meaning of `private protected` was to limit visibility strictly to subclasses (and remove package access). This was later deemed somewhat inconsistent and overly complex and is no longer supported.[5]
>
> [5] The meaning of the `protected` modifier changed in the Beta2 release of Java, and the `private protected` combination appeared at the same time. They patched some potential security holes, but confused many people.

And the SoftwareEngineering.SE also supports this, by saying that it wasn't worth the inconsistencies and extra complexity, so it was removed early on.

### Interpretation

My interpretation of all this is that maybe, back in the Oak days, both were allowed to coexist (hence the combination). Since `protected`'s meaning had changed<sup>1</sup>, there may have been a need for allowing `private` and `protected` at the same time. The introduction became too complex and wasn't worth it, and was thus dropped in the end. By the time Java 1.0/JDK 1.0.2 rolled around, it had been dropped and thus cannot be found in the documentation.

---

<sup>1</sup>In the [Oak Language Specification](http://www.eecs.harvard.edu/~waldo/oakSpec.pdf), Section 4.10, **Access to Variables and Methods**, it is noted that the default modifier was `protected`:

> By default all variables and methods in a class are **protected**.

This is quite different from what we have today, the default package access. This may have paved the way for the need of `private protected`, because `private` was too restrictive and `protected` was too lenient.