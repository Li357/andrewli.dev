---
layout: post
title: 'Deriving spending and tax multipliers with infinite series'
math: true
tags: econ:macroeconomics
---

{% katexmm %}

Keynesian economics is built around the idea that government action can help stimulate the economy, correcting the ebbs and flows of the business cycle. With this in mind, the next step is then quantifying just how much effect that government action has on an economy. To what extent does increasing government spending actually reflect in the wider economy? What about cutting taxes? To answer these questions, Keynesian economists formulated **multipliers**.

## What "multiplies"?
Let's say a government decides to spend $\$50$ billion on much-needed highway renovations. It'll hire planners, civil engineers, and construction workers to do the job, in the process contributing to the real GDP of the economy.
$$\text{GDP} = \text{C} + \text{I} + \text{G}$$
In this simplified model (we'll ignore imports and exports for now), an increase in government spending on goods and services, $\text{G}$, of $\$50$ billion leads directly to an increase in GDP. This is the intuitive, immediate impact of the government's new highway project, and we might think that's the end of the story:
$$\text{Total GDP change in billions} = \$50.$$

But each of those planners, civil engineers, and construction workers will tend to spend a portion of their paychecks as well. Bob the highway builder might spend a chunk of his on new shoes, food, and a weekend getaway. Notice that Bob's just contributed to the total GDP since he's consumed (the $\text{C}$ in our GDP equation). So, the effect of the government's new project wasn't just limited to the original $\$50$ billion. 

To quantify how much more GDP's increased, we'll also have to take into account what Bob–and every other employee–spends. What percentage of their paycheck each worker ends up spending is what we call the <a class="footnote" href="#fn:mpc">**marginal propensity to consume**</a>[^mpc], or $\text{MPC}$ for short. Every worker might end up spending different percentages of their paycheck, so in practice this $\text{MPC}$ percentage is how much workers will spend *on average*. Let's say it's $60\%$ or $0.6$ for now. And so, really,
$$\text{Total GDP change in billions} = \$50 + \$50(0.6).$$

But again, this isn't the end of the story. Once Bob and his coworkers have spent their money, it goes to firms and other individuals that also have marginal propensities to consume. The shoe store will pay its employees using the new revenue it got from Bob, and so will the grocery store. These other employees will spend a portion of their income on other consumer goods, snowballing into even larger contributions to the economy. And so if we let the average $\text{MPC}$ of everyone in the economy be $0.6$, we'll see that we've got even more GDP change to account for:
$$\text{Total GDP change in billions} = \$50 + \$50(0.6) + \$50(0.6)(0.6).$$

We can keep playing this game, tracking how much each transaction contributes to the GDP. And in theory, if we continue this process forever:
$$\text{Total GDP change in billions} = \$50 + \$50(0.6) + \$50(0.6)^2 + \$50(0.6)^3 + \cdots$$
we'll get the actual *total* GDP change. So the key insight here is that the original $\$50$ billion injection increased–or multiplied–when we look at its total effect on the GDP. A government action *reverberates* throughout an economy! But then the next question is: by how much? Can we get a value for the infinite sum above?

It turns out we can, since the sum above is a [geometric series](https://en.wikipedia.org/wiki/Geometric_series) with a constant ratio of $0.6$–the $\text{MPC}$ we tack onto each new term. The <a class="footnote" href="#fn:geometric">formula for the total value of a geometric series</a>[^geometric] is
$$a_0 + a_0r + a_0r^2 + a_0r^3 + \cdots = \frac{a_0}{1-r},$$
where $a_0$ is the first term in our series, and $r$ is the constant ratio. So plugging in our numbers,
$$\text{Total GDP change in billions} = \frac{\$50}{1 - 0.6} = \$125.$$
And to create a general formula for our multiplier, we'll stop using actual numbers and instead variables (where $\text{G}$ is government spending):
$$\begin{aligned}
\text{Total GDP change} &= \frac{\text{G change}}{1 - \text{MPC}} \\
&= \text{G change} \cdot \left(\frac {1}{1-\text{MPC}}\right).
\end{aligned}$$
Now it really makes sense what "multiplies". The initial change in government spending, $\text{G change}$, is multiplied by the **multiplier**, $1/(1 - \text{MPC})$, to see how much the GDP actually changes in total.

And our multiplier only tells about how much *spending* changes, so we call it the **spending multiplier**:
$$\text{Spending multiplier} = \frac{1}{1 - \text{MPC}}.$$

## What about taxes?

No discussion of fiscal policy is complete without talking about what happens if we tweak taxes instead of spending. Taxes also have multiplying effects on the GDP of an economy just like government spending. This is because changing taxes changes individuals' disposable income. This, like in the previous section, triggers reverberating consumption throughout the economy. But there are a few notable differences.

Most importantly, taxes and GDP have a negative relationship. An increase in taxes means consumers will have less disposable income. So they'll consume less and contribute less overall to the GDP. Conversely, a decrease in taxes means consumers will have more disposable income and will consume and contribute more to the GDP.

So we might expect the tax's effect on the GDP formula to be just the negative of before:
$$\text{Total GDP change} = -\text{Tax change} \cdot \left(\frac {1}{1-\text{MPC}}\right).$$
But it's not that simple. Remember that before we had packaged everything into a neat formula, we had a long infinite sum that accounted for the echoing effects of increasing *spending*:
$$\$50 + \$50(0.6) + \$50(0.6)^2 + \$50(0.6)^3 + \cdots$$
This worked because, in the case of increasing government *spending*, that initial $\$50$ billion dollars **directly contributes to the GDP**. That's because $\text{G}$ is in the formula for GDP. But when we shift our focus to *taxes*, an initial tax increase of, say, $\$50$ billion dollars, **does not directly contribute to the GDP**. There is no $\text{T}$ in the formula for GDP. 

So in terms of taxes, we have to eliminate the first term in our original infinite sum so it's not counted into the total contribution to GDP. We can again utilize the geometric series formula:
$$\frac{a_0}{1 - r}.$$
But this time, we'll use $\$50(0.6)$ for $a_0$ instead (now with a negative as well):
$$\text{Total GDP change in billions} = -\frac{\$50(0.6)}{1 - 0.6} = -\$75.$$
So, a $\$50$ billion increase in taxes will result in a $-\$75$ billion decrease in GDP, and this makes sense because consumers have less disposable income. Now using variables we can come up with a general formula:
$$\begin{aligned}
\text{Total GDP change} &= -\frac{\text{Tax change} \cdot \text{MPC}}{1 - \text{MPC}} \\
&= \text{Tax change} \cdot \left(-\frac {\text{MPC}}{1-\text{MPC}}\right).
\end{aligned}$$
Again, we used some algebra and moved around some terms so that it's clear what "multiplies". The tax change is being multiplied by the **tax multiplier** $-\text{MPC}/(1-\text{MPC})$ to give the overall effect on the GDP. Once isolated,
$$\text{Tax multiplier} = -\frac{\text{MPC}}{1 - \text{MPC}}$$
And violà! We've just quantified and put actual numbers to how much government actions such as increasing/decreasing spending or increasing/decreasing taxes effect the GDP! Albeit, in a very simplified, but still useful, model of the economy.

---

[^mpc]: Formally, in calculus terms, this is $\mathrm{dC} / \mathrm{dI}$–or in words, the proportion of a change in income that is spent on consumption.

[^geometric]: If you know about Taylor series, note the function $1/(1-x)$ has exactly the Taylor series expansion $1 + x + x^2 + x^3 + \cdots$ with radius of convergence $1$!

{% endkatexmm %}