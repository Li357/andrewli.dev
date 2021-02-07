---
layout: post
title: 'The other isomorphism theorems'
math: true
tags: math:abstract-algebra
---

{% katexmm %}

[Last post]({% link _posts/2021-01-25-quotients-normal-subgroups.md %}) I discussed the First Isomorphism Theorem with the goal of making it seem more natural beyond the symbols. This post, I'll try to extend (as mathematicians tend to like doing) that intuitive feel to the other isomorphism theorems. Since there isn't an agreed-upon way to enumerate them, I'll go ahead and write them out in all their symbolic beauty:

> **The First Isomorphism Theorem.** Let $G$ and $\bar{G}$ be groups and $\phi : G \rightarrow \bar{G}$ be a homomorphism between them. Then
> $$G / \ker \phi \cong \phi(G),$$
> where $\phi(G) = \{\phi(g) : g \in G\}$ is the image of $\phi$ under $G$. Explicitly, the isomorphism is given by the map $g\ker \phi \mapsto \phi(g)$.

> **The Second Isomorphism Theorem.** Let $K$ be an arbitrary subgroup of $G$, and let $N$ be a normal subgroup of $G$. Then
> $$\frac{KN}{N} \cong \frac{K}{K \cap N},$$
> where $KN = \{kn : k \in K, n \in N\}$. Explicitly, the isomorphism is given by the map $g(H \cap N) \mapsto gN$.

> **The Third Isomorphism Theorem.** Let $G$ be a group and $H, K$ be normal subgroups of $G$, with $H \leq K$. Then
> $$\frac{G/H}{K/H} \cong G/K.$$

> **The Fourth Isomorphism (Lattice) Theorem.** Let $G$ be a group and $N$ be a subgroup of $G$. There is a bijection between the set of subgroups of $G$ containing $N$, call it $\mathcal{G}$, and the set of subgroups of $G/N$, call it $\mathcal{N}$. Explicitly, the bijection is given by the map $A \mapsto A/N$.

I'll be presenting them in slightly out of order with the hope of giving them a greater sense of motivation.

## A Quick Review

For a refresher, I'll give a quick overview of the First Isomorphism Theorem. [Last time]({% link _posts/2021-01-25-quotients-normal-subgroups.md %})), we saw that a normal subgroup $H$ of $G$ can be interpreted a subgroup of $G$ whose elements are like the identity. Why? Informally, we don't care about what differentiates elements in $H$, they're all the same as far as we're concerned–that's why they're all in $H$. And then by quotienting out $H$, we're clumping up the group into other *cosets* of $H$ that also contain elements that are the same as far as we're concerned, because they differ by just a factor of $h \in H$, and that's why the elements of $H$ are like the identity. We've just decreased the size of the group by removing the detail that differentiated elements of $H$.

And with the First Isomorphism Theorem, this "like the identity" notion is formalized. It says that when we have a homomorphism, call it $\phi$, from $G$ to another group $\bar{G}$, there's a natural way to think about "like the identity"–exactly the elements of $G$ that map to the identity under $\phi$, which we call the **kernel**:
$$\ker \phi = \{g \in G : \phi(g) = e\}.$$

In the eyes of $\phi$, these elements *are* the identity! And if we quotient $G$ by $\ker \phi$ (after verifying it's a normal subgroup), we'll get a quotient group whose elements are cosets,

$$G/\ker\phi = \{g\ker\phi : g \in G\}.$$

Here, $g\ker \phi$ are all the elements of $G$ that are exactly $g$ in the eyes $\phi$, because once mapped, the elements in the kernel are just the identity. Thus, they shoud behave exactly as $g$ itself would under $\phi$–by all mapping to $\phi(g)$. This is exactly what the First Isomorphism Theorem is saying, that there is an isomorphism given by $g\ker \phi \mapsto \phi(g)$ between the groups $G/\ker\phi \cong \phi(G)$. Intuitively, we've just gotten rid of all the information and detail in $G$ that $\phi$ didn't care about–like lowering the resolution on an image:

A natural next question might then be, can we apply this process over and over again, getting rid of more and more detail of $G$–from full 4k to 2k to 1080p? Well, that's exactly what the Third Isomorphism Theorem deals with.

## The Third Isomorphism Theorem

## The Fourth Isomorphism Theorem

## The Second Isomorphism Theorem

{% endkatexmm %}