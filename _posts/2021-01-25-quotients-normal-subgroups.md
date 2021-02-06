---
layout: post
title: 'Understanding quotient groups and normal subgroups, intuitively'
math: true
image: '/assets/2021-01-25-quotients-normal-subgroups/z4.png'
tags: abstract-algebra
---

{% katexmm %}

One of the defining characteristics of math is breaking down complex objects into simpler pieces that are easier to study. For instance, we prime-factorize integers and decompose matrices, and in the process gain a better understanding of the very nature of our original objects. In group theory where the objects of study are groups, this question becomes: how do we break down complicated groups into more wieldy ones?

## Exploration

After learning about Lagrange's theorem and how subgroups partition groups into the original subgroup and its cosets, a natural idea might be to leverage this to break down groups. For example, take the subgroup $H = \{0, 2\}$ of $\mathbb Z_4$ and its coset $1 + H = \{1, 3\}$. By reorganizing the Cayley tables, we might end up with something like this:

![Z4 and its cosets](/assets/2021-01-25-quotients-normal-subgroups/z4.png)

If you squint, you might see something that resembles the Cayley table of $\mathbb Z_2$, where instead of the integers $0$ and $1$ we have the cosets $0 + H = H$ and $1 + H$. And just based off the clumped Cayley table, there's a sensible operation $*$ to "combine" these cosets to give another coset:
<p class="big">
$$
\begin{aligned}
(a+H) * (b+H) &= \{x + y : x \in a+H, y \in b+H\} \\
&= (a+b) + H.
\end{aligned}
$$
</p>
<p class="small">
$$
\begin{aligned}
&\phantom{=} (a+H) * (b+H) \\
&= \{x + y : x \in a+H, y \in b+H\} \\
&= (a+b) + H.
\end{aligned}
$$
</p>
For instance, $H * (1+H) = \{0 + 1, 0 + 3, 2 + 1, 2 + 3\} = \{1, 3\} = 1+H$. And it even seems to work when we choose a different coset representative $2 + H = H$, since $(2+H) * (1+H) = 1+H$ as well. It's a great exercise to verify this works for any combination of $H$ and $1+H$, and with different coset representatives. So now we've got a set of two elements, $\{H, 1+H\}$ that has a closed operation. It <a class="footnote" href="#fn:almost">looks like a group and smells like one</a>[^almost], one smaller than the group $\mathbb Z_4$ of four elements we started with! 

Daringly, you might try this process on a nonabelian group, with the subgroup $H = \{(), (123), (132)\}$ of $S_3$ and its coset $(12)H = \{(12), (23), (13)\}$. Again, something resembling $\mathbb Z_2$ seems to appear:

![S3 with cosets of A3](/assets/2021-01-25-quotients-normal-subgroups/s3a3.png)

Similarly, we can combine these cosets <a class="footnote" href="#fn:notation">with $*$ to produce another coset</a>[^notation]:
<p class="big">
$$
\begin{aligned}
aH * bH &= \{xy : x \in aH, y \in bH\} \\
&= abH.
\end{aligned}
$$
</p>
<p class="small">
$$
\begin{aligned}
&\phantom{=} aH * bH \\
&= \{xy : x \in aH, y \in bH\} \\
&= abH.
\end{aligned}
$$
</p>
So again the set $\{H, (12)H\}$ is equipped with a closed operation $*$, <a class="footnote" href="#fn:almost2">making it a very convincing group</a>[^almost2] and three times smaller than our original $S_3$! You might start to wonder if this process works for all groups. That's until you try a second nonabelian example for good measure, with $H = \{(), (12)\}$ of $S_3$ and its cosets $(123)H = \{(123), (13)\}$ and $(132)H = \{(132), (23)\}$:

![S3 without clumping](/assets/2021-01-25-quotients-normal-subgroups/s3bad.png)

This time, the cosets didn't form tidy clumps! In particular, if we take $H$ and try to combine it with $(123)H$, we find that
<p class="big">
$$
\begin{aligned}
H * (123)H &= \{xy : x \in H, y \in (123)H\} \\
&= \{(123), (13), (23), (132)\}.
\end{aligned}
$$
</p>
<p class="small">
$$
\begin{aligned}
&\phantom{=} H * (123)H \\
&= \{xy : x \in H, y \in (123)H\} \\
&= \{(123), (13), (23), (132)\}.
\end{aligned}
$$
</p>
But $\{(123), (13), (23), (132)\}$ is not a coset itself, much less equal to $(123)H$! Sadly, with this particular subgroup $H = \{(), (12)\}$, the general rule $aH * bH = abH$ breaks. The next question then becomes: what made the first two subgroups special?

## Building Intuition

Before we answer that question, I want to present some intuition that'll guide us in arriving at the answer–an answer that always felt a little arbitrary to me otherwise.

First of all, what does it mean for two elements to be in the same coset? Well, elements $x, y$ land in the same coset $yH$ exactly when
$$x = yh \quad\quad\text{for some } h \in H.$$
On an intuitive level, you might interpret this as $x$ is "$y$-like". In our original group, we would have differentiated between $x$ and $y$. But once placed into the same coset, we agree that $x$ is "just enough like" $y$ such that they end up in the same coset. And that loss of differentiation is a tradeoff: we lose some detail of our original group but end with a smaller one–like lowering the resolution on an image.

To solidify this intuition, let's define "$y$-like."
> **DEFINITION.** An element $x$ is said to be "$y$-like" if and only if $x = yh$ for some $h \in H$.

Now let's return to $aH * bH = abH$. This was our previous requirement to create a smaller group from the cosets, and with this new definition, it should feel natural. We'd expect an element of $aH * bH$ that looks like an $a$-like element multiplied by a $b$-like element to produce an $ab$-like one in $abH$. Conversely, we'd expect an $ab$-like element in $abH$ to be the product of an $a$-like and $b$-like element in $aH * bH$. Overall, we'd expect $aH * bH = abH$. 

We saw that not all groups satisfy this requirement and so don't create a group from the cosets. But this requirement is a little hard to work with since it requires us to check if all combinations of the cosets, and when they have different coset representatives. Instead, it'd be great if there was some logically simpler condition that guaranteed $aH * bH = abH$ for free.

Let's see where our intuition can take us. We know that when we left-multiply some element $g$ by any $h \in H$, we end up with an element that is $g$-like. You might notice this sounds an awful lot like how the identity works: left-multiplying an element $g$ by the identity gives you back $g$. But in $h$'s case, it doesn't give you back exactly $g$, but something $g$-like. So elements $h \in H$ are identity-like!

Of course, the usual identity is double-sided. If elements of $H$ are truly identity-like, we might expect them to fulfill this duty faithfully. So we'd like that if we right-multiply $g$ by some $h \in H$, that produces something $g$-like as well. In other words, if we  left-multiply $g$ by every $h \in H$ to get all $g$-like elements, they better be the same elements we get from right-multiplying $g$ by every $h \in H$. In the language of cosets, this condition becomes
$$gH = Hg \quad\text{for all } g \in G.$$
At a glance, <a class="footnote" href="#fn:caveat">this condition</a>[^caveat] seems a lot simpler to work with since we don't have to check combinations of different cosets. And as a it turns out, the coset operation $aH * bH = abH$ is <a class="footnote" href="#fn:proof">well-defined *if and only if* this condition $gH = Hg$ for all $g \in G$ holds</a>[^proof]. 

Because of their importance, we call subgroups that satisfy this condition **normal subgroups** in the sense that they are the only subgroups that allow us to form a group out of the cosets. And we call this group of the cosets the **quotient group** $G/H = \{gH : g \in G\}$ (read $G$ mod $H$). 

> **DEFINITION.** A subgroup $H$ is normal if and only if $gH = Hg$ for all $g \in G$.

> **DEFINITION.** A quotient group is the set of cosets $G/H = \{gH : g \in G\}$ with the operation $*$ defined by $aH * bH = abH$ for all $a, b \in G$, where $H$ acts as the identity element and each coset has an inverse, namely $g^{-1}H$.

When I first learned about normal subgroups, they were special subgroups that satisfied $gHg^{-1} = H$. While a logically equivalent statement (and easier to work with when it comes to showing a specific subgroup is normal), it just felt like some random symbolic coincidence. But by observing that $H$ ought to act like the identity, the equivalent condition $gH = Hg$ became more natural. Further, this intuition of $H$ being identity-like extends well to an overarching understanding of quotient groups. You're breaking down a group by modding/quotienting out the information that you consider to be "just enough like" the identity–i.e. information and detail you don't care about! 

In the first example above, we quotiented $\mathbb Z_4$ by $H = \{0, 2\}$. We considered $2$ to be "just enough like" $0$ because what differentiates $0$ and $2$ in $\mathbb Z_4$ is irrelevant to us in $\mathbb Z/\{0, 2\}$. Both $0$ and $2$ are even, so all we care about is parity, which is also why the quotient group resembles $\mathbb Z_2$. In the second example, we didn't care about the specific permutations, but again just their parity by considering even-transposition permutations $(123)$ and $(132)$ "just enough like" $()$. As a result, the quotient group resembles $\mathbb Z_2$ with cosets [$A_3$](https://en.wikipedia.org/wiki/Alternating_group) and $(12)$[$A_3$](https://en.wikipedia.org/wiki/Alternating_group).

## The First Isomorphism Theorem

Equipped with these ideas, we can now tackle an important theorem that deals with quotient groups, called the First Isomorphism Theorem. But first, there's a bit of terminology to introduce. Our process of clumping elements into cosets to *map* one group to a smaller, less detailed version is actually part of a larger pattern of mapping between one group to another, not-necessarily smaller group. Let's give this process a name.

If we're mapping between two groups <a class="footnote" href="#fn:groupnotation">$(G, *_G)$ and $(\bar{G}, *_{\bar{G}})$</a>[^groupnotation] with some function $f$, we'd hope that $f$ preserves the "groupiness" of $G$, namely that $f$
1. Respects the identity. So $f(e_G) = e_{\bar{G}}$.
2. Respects inverses. So $f(g^{-1}) = (f(g))^{-1}$ for all $g \in G$. In words, $f$ maps inverses in $G$ to inverses in $\bar{G}$.
3. Respects the operation. So $f(a *_G b) = f(a) *_{\bar{G}} f(b)$ for all $a, b \in G$.

It turns out we can derive properties 1 and 2 from 3, so we'll restrict our attention to 3. Since the functions that satisfy property 3 preserve the "groupiness," or structure that makes groups interesting, we'll give them a name: **group homomorphisms**. Also, since the notation gets cumbersome, let's drop the group-specific operations from property 3. Just keep in mind they are from different groups.

> **DEFINITION.** A group homomorphism $f$ between groups $G$ and $\bar{G}$ is a mapping that preserves the group operation, i.e. $f(ab) = f(a)f(b)$ for all $a, b \in G$

Now given this definition of a group homomorphism and what it does–preserve the operation–you might notice there's a pretty natural way to understand the "identity-like" intuition from before. If $f(b) = e$ (the identity of $\bar{G}$) for some $b \in G$, then
$$
\begin{aligned}
f(ab) &= f(a)f(b) = f(a)e = f(a) \\
f(ba) &= f(b)f(a) = ef(a) = f(a).
\end{aligned}
$$
Here, $b$ seems to act like the identity under $f$ exactly because $f$ maps $b$ to the identity. As far as $f$ is concerned, *it is the identity*! Now zooming out, we'll want to talk next about the set of *all* the elements in $G$ that map to the identity, which call the **kernel** of the group homomorphism $f$, denoted $\ker f$.

> **DEFINITION.** The kernel of a group homomorphism $f$ are the set of elements of $G$ that $f$ maps to the identity in $\bar{G}$,
> $$\ker f = \{g \in G : f(g) = e\}.$$

`<sidetrack>`
With this definition, allow me to detour a bit to tie this together with the intuition from the previous section. Consider the homomorphism from $G$ and its quotient group $G/H$ for some normal subgroup $H$ given by $\phi(g) = gH$. You might notice this is exactly the function that clumps elements into cosets now in symbols. You can verify it is indeed a homomorphism with the coset operation $*$. 

Now observe that for every element $h \in H$ that $\phi(h) = hH = H$, and $H$ is just the identity element of the quotient group. Conversely, if some element $g \in G$ maps to the identity, $\phi(g) = H$, then $gH = H$ and $g \in H$ necessarily. Thus inclusion goes both ways and
$$\ker \phi = H.$$
So, a normal subgroup $H$ that we hand-wavingly said before contained all the elements that are "identity-like" can now be formalized as *exactly the elements that are the identity under $\phi$*, exactly the kernel of $\phi$! In fact, we give this map $\phi$ that formalizes our natural intuition a name: the **natural homomorphism**.

Furthermore, since this means every normal subgroup is the kernel of some homomorphism, namely the natural homomorphism, we might wonder if every kernel is a normal subgroup. And <a class="footnote" href="#fn:kernelnormal">indeed it is.</a>[^kernelnormal]
`</sidetrack>`

Now we're ready for the entrée, the First Isomorphism Theorem. Let's say we have a homomorphism $f$ from one group $G$ to another $\bar{G}$. Consider the quotient group of cosets $G/\ker f$ (which we can create since $\ker f$ is normal):
$$G/\ker f = \{g\ker f : g \in G\}.$$
Since $\ker f$ is the set of elements in $G$ that are the identity under $f$, you should read each coset element $g\ker f$ as "the set of elements in $G$ that are $g$ under $f$."

Given that $g \ker f$ is all the elements that *are* $g$ under $f$, they should behave exactly like $g$ under $f$. That is, they should all map to where $g$ is mapped, namely $f(g)$. You might visualize this with colors:

![The First Isomorphism Theorem Visualized](/assets/2021-01-25-quotients-normal-subgroups/fit.png)

Notice how $G/\ker f$ splits $G$ into clumps of elements that are all the same under $f$. Accordingly, these clumps all map to the same element in $\bar{G}$. Doesn't it seem natural that there would be a one-to-one correspondence, and specifically in the context of groups, an isomorphism, between the clumps of colored circles on the left and where they map to colored squares on the right? That's exactly the First Isomorphism Theorem! It states that,

> **THEOREM.** Let $G$ and $\bar{G}$ be groups and $f : G \rightarrow \bar{G}$ be a homomorphism between them. Then
> $$G / \ker f \cong f(G),$$
> where $f(G) = \{f(g) : g \in G\}$ is the image of $f$ under $G$. Explicitly, the isomorphism is given by the map $g\ker f \mapsto f(g)$.

Further, notice that because $f$ is a homomorphism, that all of $\bar{G}$ need not be hit, or in other words, we could have $f(G) \neq \bar{G}$. In our picture, there are potentially black squares that are not mapped to, but those don't concern the First Isomorphism Theorem. All it says is that $G/\ker f$ is isomorphic onto the image (all the colored squares) of $f$ under $G$, and that should feel natural!

For the sake of concreteness, let's apply the First Isomorphism Theorem to an example. Consider the homomorphism $f(x) = x \bmod 4$ from $\mathbb Z$ to $\mathbb Z_4$. Then $\ker f$ are all the multiplies of $4$, since they are equivalent to $0 \bmod 4$. Now consider the quotient group $\mathbb Z/\ker f = \mathbb Z/4\mathbb Z$. There are only four cosets in this quotient group, namely $0 + 4\mathbb Z, 1+4\mathbb Z, 2+4\mathbb Z$, and $3 + 4\mathbb Z$ since it is cyclic. And of course, by the First Isomorphism Theorem, we know
$$\mathbb Z/4\mathbb Z \cong f(\mathbb Z) = \mathbb Z_4$$
when we map the coset $0 + 4\mathbb Z$ to $f(0) = 0 \bmod 4 = 0 \in \mathbb Z_4$, the coset $1 + 4\mathbb Z$ to $f(1) = 1 \bmod 4 = 1 \in \mathbb Z_4$, and so on. We're just mapping the cosets to their representatives $\bmod 4$, i.e. under the homomorphism.

## Ideals

Finally, in the spirit of milking this intuition for all it's worth, we can also motivate ideals–what we get when we generalize the notion of normal subgroups over rings. Suppose we have a ring $R$ and we want to break it down into a smaller ring. We can first construct a smaller group by considering the additive abelian group $(R, +)$. Since it's abelian, every subgroup $I$ is normal and we know $R/I = \{r + I : r \in R\}$ is quotient group. Now, following intuition from earlier, $I$ consists of elements that are identity-like, i.e. $0$-like, in $(R, +)$. Of course, then we would expect that $rI \subseteq I$ and $Ir \subseteq I$ for all $r \in R$, since left- and right-multiplication by something $0$-like should yield something $0$-like. This motivates the **ideal**, which absorbs multiplication.

And it turns out this *ideal* condition, that $rI, Ir \subseteq I$ for all $r \in R$, is exactly *necessary* and *sufficient* to define multiplication on the quotient $R/I$, such that we can create not just a quotient group, but also a quotient *ring*.

## Final Thoughts

Hopefully some of these ideas and intuitions helped you digest what motivates quotient groups and normal subgroups, and how they can be applied and extended. They've helped me immensely in internalizing these concepts and how they generalize to other objects, like rings and varieties. Stay tuned for next time, where I'll (most likely) talk about the *rest* of the isomorphism theorems. *Oh yes*–there's more!

---

[^almost]: In particular, $H$ is the identity of this "coset group," and each coset $a+H$ has the inverse $-a+H$. The operation $*$ also inherits associativity from $+$.

[^notation]: I've written this in multiplicative notation since the group operation here, permutation composition, and more general operations have a multiplicative flavor.

[^almost2]: $H$ is the identity and each coset $aH$ has an inverse $a^{-1}H$ where $a^{-1}$ is the inverse permutation. The operation $*$ inherits associativity from permutation composition.

[^caveat]: Note that this does not mean $gh = hg$ for some specific $h \in H$. It could be that $gh_1 = h_2g$ where $h_1 \neq h_2$ since we only require elements of $H$ to be identity-like, not exactly the identity.

[^proof]: For a proof, check out the first theorem of [Arturo Magidin's answer on Math.StackExchange](https://math.stackexchange.com/a/14315/344419). It's incredibly thorough, formalizing the idea of $y$-like with equivalence relations.

[^groupnotation]: This just means $G$ is a group with the operation $*_G$ and $\bar{G}$ a group with the operation $*_{\bar{G}}$. This way, we can be very explicit about which group operation occurs where.

[^kernelnormal]: First, for any homomorphism $f$, the set $\ker f$ is a subgroup. By the subgroup test, if $a, b \in \ker f$, then $f(ab^{-1}) = f(a)(f(b))^{-1} = e$ so $ab^{-1} \in \ker f$. To prove it is normal, it'll suffice prove the logically-equivalent and easier-to-work-with condition $gHg^{-1} = H$ I noted earlier, where $H = \ker f$ of some homomorphism $f$. Then check out [this Math.StackExchange post](https://math.stackexchange.com/questions/2138692/proving-the-kernel-is-a-normal-subgroup).

{% endkatexmm %}
