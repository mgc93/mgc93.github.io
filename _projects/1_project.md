---
layout: page
title: Response time in negotiation on eBay
description: When negotiating, does the time it takes somebody to get back to you with a response tell you something about their preferences?
img: assets/img/project_image_ebay_obs.jpeg
importance: 1
category: Research
related_publications:
---

<img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich, Wenjia Joyce Zhao

**Tools & Languages**: R, python

**Methods**: Data Cleaning, Generalized Additive Models, Heckman Correction for Sampling Bias, Linear and Logistic Mixed Effects Regressions

## 🔭 About

---

In this project, I study whether response times in negotiations reveal the responder's evaluation of the offer, and thus can be used strategically by the proposers. I use an eBay dataset containing millions of bargaining exchanges between June 2012 - June 2013 to answer this question.

<div style="display: flex; gap: 16px; align-items: flex-start;">
  <img src="/assets/img/project_1_images/project_1_fig_1.png" alt="Figure 1" style="width: 50%;"/>
  <img src="/assets/img/project_1_images/project_1_fig_2.png" alt="Figure 2" style="width: 50%;"/>
</div>

Imagine you went on eBay to buy an art poster. It is 22 dollars, but perhaps the seller was willing to sell it for a lower price. So you made them an offer of 15 dollars instead.

Unfortunately, they rejected your offer ( 👎 )( 🐇 ).
You decided to try another seller for a similar item.
They also rejected the offer, but they take longer to do so ( 👎 )( 🐢 ).
Based on just this information, which seller would you continue to bargain with ( 🐇  vs.  🐢 )?
If I were you, I would choose the slower seller. Why?

Many decisions involve a process of comparing and accumulating net evidence in favor of the choice options up to a predetermined boundary, a process which takes time and reflects the strength of the net evidence. The evidence reflects the agent’s evaluation of the choice options – an agent deciding between an apple ( 🍎 ) and an orange ( 🍊 ) must weigh the benefits and costs of the apple against those of the orange.

If these two evaluations are roughly equal ( 🍎 ~ 🍊), the agent will struggle to decide which item to choose ( 🐢 ). On the other hand, if the agent finds the orange to be much more attractive than the apple ( 🍊 > 🍎 or 🍎 > 🍊), then their choice will be quick and predictable ( 🐇 ). This relation between strength-of-preference and response time (RT) is a basic feature of evidence-accumulation or sequential-sampling models, such as the drift-diffusion model ([read more about it here](/projects/4_project/)).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" width="300px" %}
    </div>
</div>

In the bargaining example, the seller must weigh the buyer’s offer against the utility of the car and/or future offers. If the seller rejects ( 👎 ) the buyer’s offer quickly ( 🐇 ), they signal to the buyer that the offer was far too low; if the seller rejects ( 👎 ) the offer slowly ( 🐢 ), they signal to the buyer that the offer was competitive.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="300px" %}
    </div>
</div>

<br>

## 🐳 Results

---

Is this true on eBay?

Short answer: yes!

Using preexisting and experimental data from eBay, we show that both buyers and sellers take hours longer to accept bad offers and to reject good offers. We find nearly identical patterns in the two datasets, indicating a causal effect of offer size on RT. 

Are buyers using this information strategically when deciding who to continue to negotiate with?

Short answer: no!

Counter to our predictions, buyers are discouraged by slow rejections—they are less likely to counteroffer to slow sellers. 

You can read more about this in our [PNAS paper](https://www.pnas.org/doi/10.1073/pnas.2410956122){:target="_blank"}.

