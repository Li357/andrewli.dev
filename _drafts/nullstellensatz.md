---
layout: post
title: 'Hilbert\'s Nullstellensatz'
math: true
tags: math:algebraic-geometry
---

<!-- todo -->

## Inverses...?

To start, we might check when given an affine variety $V = \mathcal V(f_1, \dots, f_s)$, does
$$\mathcal V(\mathcal I(V)) = V?$$
The inclusion $V \subseteq \mathcal V(\mathcal I(V))$ follows directly from the definitions of $\mathcal V$ and $\mathcal I$. The other direction, $\mathcal V(\mathcal I(V)) \subseteq V$ isn't too bad either. I'll give a feeling for a proof. Recall $\mathcal I(V)$ consists of all the polynomials that vanish on $V$, so all of $f_1, \dots, f_s \in \mathcal I(V)$ just based on how $V$ is defined. This means $\mathcal I(V)$ contains *at least* as many polynomials as there are $f_1, \dots, f_s$ that must then vanish on $\mathcal V(\mathcal I(V))$. In a sense $\mathcal V(\mathcal I(V))$ if anything has more constraints (more polynomial have to equal zero) on its points, and we'd expect it to be equal or smaller than $V$, i.e. $\mathcal V(\mathcal I(V)) \subseteq V$. Thus $\mathcal V(\mathcal I(V)) = V$, good news!

Now say we're given an ideal $I = \langle f_1, \dots, f_s \rangle$. Does
$$\mathcal I(\mathcal V(I)) = I?$$
Since showing ideal membership is more involved, we'll try some examples first. Let's choose our affine space to be $\mathbb R^2$ and $I = \langle x, y \rangle$. Intuitively, this is the set of all polynomials that vanish where $x$ and $y$ vanish. Then $\mathcal V(\langle x, y \rangle)$ is just the set with one point in $\mathbb R^2$, $\{(0, 0)\}$. Then $\mathcal I(\{0, 0\})$ are all the polynomials that vanish on $\{0, 0\}$, i.e. have one term divisible by $x$ and one term divisible by $y$. This is exactly $I = \langle x, y \rangle$–so good so far!

What if we work over $\mathbb R$ with $I = \langle x^2 + 1 \rangle$? Again, intuitively, if $x^2+1$ vanishes, we can think of this ideal as containing all the other polynomials that also vanish. But... $x^2+1$ doesn't vanish over $\mathbb R$ since it doesn't have solutions in $\mathbb R$, meaning the affine variety $\mathcal V(I) = \emptyset$. And $\mathcal I(\emptyset) = \mathbb R[x] \neq \langle x^2 + 1 \rangle$! Even worse, many different ideals can produce the empty variety, such as when $I = \langle 1+x^2+x^4$ and $I = \langle 1 \rangle$. Our hopes are crushed when $\mathbb V(I) = \emptyset$, when our ideal bases do not have a common solution in our original field.

This motivates us to restrict our attention to *algebraically closed fields* $K$, where all nonconstant polynomials in $K[x]$ have a solution inside $K$. If $\mathcal V$ and $\mathcal I$ aren't inverses inside any $K$, this is the next best thing.