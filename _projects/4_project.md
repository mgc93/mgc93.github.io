---
layout: page
title: Cognitive modeling can identify how people act strategically in negotiations
description: Using Drift Diffusion Modeling for lab and field bargaining to study how responders strategically manipulate their response times
img: assets/img/project_image_ebay_and_exp_ddm.jpeg
importance: 4
category: Research
---

<img src="https://images.unsplash.com/photo-1515139832362-a06b09ecced0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich, Wenjia Joyce Zhao

**Tools & Languages**: R, stan

**Methods**: Bayesian Statistics, Model Comparison, Sequential Sampling Models, Supercomputing Resources

## 🔭 About

---

Many decisions involve a process of comparing and accumulating net evidence in favor of the choice options up to a predetermined boundary, a process which takes time and reflects the strength of the net evidence. The evidence reflects the agent's evaluation of the choice options – an agent deciding between an apple ( 🍎 ) and an orange ( 🍊 ) must weigh the benefits and costs of the apple against those of the orange.

If these two evaluations are roughly equal ( 🍎 ~ 🍊), the agent will struggle to decide which item to choose ( 🐢 ). On the other hand, if the agent finds the orange to be much more attractive than the apple ( 🍊 > 🍎 or 🍎 > 🍊), then their choice will be quick and predictable ( 🐇 ). 

<img src="/assets/img/project_4_images/project_4_fig_1.png" alt="Figure 1" style="width: 300px; display: block; margin: 1em auto;"/>

In the bargaining example, the seller must weigh the buyer's offer against the utility of the car and/or future offers. If the seller rejects ( 👎 ) the buyer's offer quickly ( 🐇 ), they signal to the buyer that the offer was far too low; if the seller rejects ( 👎 ) the offer slowly ( 🐢 ), they signal to the buyer that the offer was competitive.

<img src="/assets/img/project_4_images/project_4_fig_2.png" alt="Figure 2" style="width: 300px; display: block; margin: 1em auto;"/>

This relation between strength-of-preference and response time (RT) is a basic feature of evidence-accumulation or sequential-sampling models, such as the drift-diffusion model (see below). In this project we wanted to know if this model can account for lab and observational bargaining behavior. Do proposers in the lab who know their response time is being observed try to manipulate it int order to signal higher values? Do sellers with more experience on eBay have a different bargaining strategy than sellers with less experience?

<br>

## 👾 Methods

---

**Drift Diffusion Model**

The basic assumption of the Drift Diffusion Model is that decision-makers sample evidence for one option over the other until one of the decision boundaries is hit. **This process takes time and reflects the person’s evaluation of the choice options.**

In bargaining, for a specific value for the item and offer, one decision boundary is choosing to accept the offer, the other to reject it.

Different values on the **y-axis** are associated with different preference states between the two options. The **x-axis** represents the timeline of a single decision.

After an offer is made, the responder weighs the size of the proposer’s offer against the value of their good and possible future offers, and they make a decision as soon as one of the decision boundary is hit.

Parameters in the DDM:
- the starting point bias (z) represents the preparation process
- the drift rate (v) represents the evaluation process
- the decision boundary (a) represents the caution level
- the non-decision time (t) represents motor or processing delays

<img src="/assets/img/project_4_images/project_4_fig_3.png" alt="Drift Diffusion Model" style="width: 80%; display: block; margin: 1em auto;"/>

<div style="display: flex; gap: 24px; align-items: flex-start; margin: 1em 0;">
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="/assets/img/project_4_images/project_4_fig_4.png" alt="Drift rate" style="width: 100%;"/>
    <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Drift rate (v)</strong> represents the evaluation process. It depends on the value of the good, the size of the proposer's offer and possible future offers: v ~ b0 + b1 (value - offer). The more positive the drift rate is (in this case the higher the surplus earned), the more likely the offer will be accepted. The larger the absolute value of the drift rate, the quicker the decisions will be made on average. The drift rate also has a drift intercept (b0) which represents a bias during the decision process towards one or the other option, controlling for the surplus.</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="/assets/img/project_4_images/project_4_fig_5.png" alt="Starting point bias" style="width: 100%;"/>
    <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Starting point bias (z)</strong> is another type of bias in the model that appears even before the decision process starts. This bias is independent of the specifics of the offer.</figcaption>
  </figure>
</div>

<div style="display: flex; gap: 24px; align-items: flex-start; margin: 1em 0;">
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="/assets/img/project_4_images/project_4_fig_6.png" alt="Boundary separation" style="width: 100%;"/>
    <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Boundary separation (a)</strong> represents the amount of evidence needed to make a decision. Smaller decision boundaries indicate a lower caution level. This leads to more mistakes on average, but also quicker responses.</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center; margin: 0;">
    <img src="/assets/img/project_4_images/project_4_fig_7.png" alt="Non-decision time" style="width: 100%;"/>
    <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Non-decision time (t)</strong> represents the time for encoding the information presented and the time for making a motor response.</figcaption>
  </figure>
</div>

Changes in the parameters will produce behavioral changes such as changing choice probabilities and response times. Moreover, changes in parameters help us infer which cognitive processes change with our experimental manipulation or with individual characteristics such as experience.

**DDM in bargaining**

Agents who do not have prepared strategies must make decisions on the spot, likely employing a DDM-like process. In that case, their RT's might reveal their private information, putting them at a strategic disadvantage. In the bargaining example, the seller must weigh the buyer's offer against the utility of the car and/or future offers. If the seller rejects the buyer's offer quickly, they signal to the buyer that the offer was far too low; if the seller rejects the offer slowly, they signal to the buyer that the offer was competitive. A strategic buyer, noting the seller's RT, should respond with a large offer increase in the former case but only a small offer increase in the latter. Therefore, a partially strategic seller would want to reject as quickly as possible, to get the largest possible offer increase from the strategic buyer. However, quick decisions come at a cost – they entail a higher chance of mistakenly rejecting a good offer or accepting a bad offer. 

<figure style="width: 80%; margin: 1em auto; text-align: center;">
  <img src="/assets/img/project_4_images/project_4_fig_8.png" alt="Bargaining setting" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Bargaining setting.</strong> In a standard bargaining exchange, the proposer makes an offer to the responder, which the responder can either accept or reject. On eBay, buyers make offers to sellers. The size of the offer, in combination with the seller's private value, determines the drift rate in the DDM. Here, the high offer (in green) yields a modest positive drift rate (towards the "accept" boundary), the medium offer (in purple) yields a low negative drift rate (towards the "reject" boundary), and a low offer (in pink) yields a high negative drift rate. As a result, the seller accepts the high offer with medium speed, rejects the medium offer slowly, and rejects the low offer quickly. So, a strategic buyer will increase their next offer a lot after a quick rejection, but only a little after a slow rejection.</figcaption>
</figure>

**Research question**

The DDM is typically applied to fast perceptual judgments, but in recent years it has seen increasing application to economic choice. However, it has yet to be applied to strategic settings where RT might betray private information. It has also not been applied to decisions longer than a few seconds. Here, we fit the DDM to both the lab and eBay bargaining data to see how well it can quantitatively explain the choice and RT data and to better understand how agents' decisions might change when RT is a strategic variable.

<img src="/assets/img/project_4_images/project_4_fig_9.png" alt="Research question" style="width: 80%; display: block; margin: 1em auto;"/>

**Lab experiment**

In the lab experiment of [Konovalov and Krajbich (2023)](https://doi.org/10.1093/ej/uead055), each responder was randomly assigned a private value from 0 to 100 for a voucher owned by their assigned proposer. The voucher was worthless to the proposer; their implicit goal was simply to extract the highest possible price from the responder. The proposer set an initial price from 0 to 100, which the responder could accept or reject. If the responder rejected the offer, the proposer could try again with another price, but both the responder's and proposer's profits from a sale shrank by a constant factor in this case. As in real bargaining, the subjects had to weigh the costs and benefits of delaying (or preventing) a trade by either setting the price too high or rejecting an acceptable offer. There were two conditions in the experiment, with the responder's RT either Hidden or Visible to the proposer. As with the eBay data, we focus exclusively on behavior in response to the first offer.

**eBay bargaining**

Our field setting is eBay – one of the world's largest online marketplaces. Since 2005 eBay has allowed people to sell their products through an alternating-offer protocol where sellers post items for sale and buyers can make them offers. eBay recently released a dataset with millions of bargaining exchanges from June 2012 to June 2013 ([Backus et al. 2020](https://academic.oup.com/qje/article-abstract/135/3/1319/5721265?redirectedFrom=fulltext)). We analyze 20% of that data, leaving the rest for future validation. We focus on buyers' initial offers and sellers' responses to those offers. A seller can accept, reject (including letting it expire), or counter an offer.

## 🐳 Results

---

**Lab DDM**

We found that the DDM provided an accurate quantitative account of the responders' behavior in the lab experiment. We found that the drift rate in the DDM was a linear function of the responder's value minus the proposer's initial price (i.e., the responder's surplus). As a result, a responder's probability of accepting an offer was increasing in their surplus, both in the data and in the model.

Like the eBay data, a responder's RT was increasing with surplus for rejections but decreasing with surplus for acceptance, both in the data and model.

The DDM also revealed interesting differences between the Hidden and Visible RT conditions. Responders were significantly faster to respond in the Visible condition, particularly for rejections.

To compare the conditions with the DDM, we allowed non-decision time, boundary separation, starting point, and the drift-rate function to vary between conditions. We observed two noticeable differences between conditions. responders in the Visible condition exhibited a marginally narrower boundary separation (group posterior differences Visible - Hidden M = -0.443, HDI = [-0.92, 0.097]) and a credibly more negative drift-rate bias (group posterior differences Visible - Hidden M = -0.405, HDI = [-0.673, -0.157]). In other words, responders in the visible condition exhibited less response caution (enabling quicker responses), and evaluated offers more negatively, increasing the speed of rejections.

**eBay DDM**

The DDM also provided an accurate account of sellers' behavior on eBay, with some caveats. Unlike in the lab, eBay users are not constantly monitoring their accounts and thinking about how to respond to offers. Sellers may take hours before seeing an offer and their decision process might be interrupted by sleep, work, family, etc. These delays and interruptions are non-decision time. Standard DDM's account for non-decision time with a uniform random variable. Therefore, we developed more complex models of non-decision time that use Gamma distributions (Model 2), include the time of day (Model 3: sleep and work), and vary with the quality of the offer (Model 4: more interruptions when sellers struggle to decide).

These additions to the DDM substantially improved model fit for many sellers. We compared these models using Watanabe-Akaike Information Criterion (WAIC), a standard method for comparing model fit while accounting for model complexity. Relative to the model with the standard nondecision time specification (Model 1), Model 2 improved model fit for 11% of sellers, Model 3 further improved model fit for another 47% of sellers, and Model 4 even further improved model fit for 42% of sellers. 

Using the best-fitting non-decision-time model for each seller, the DDM could accurately capture both choice and RT data from the eBay sellers (at least those that fit our inclusion criteria) namely the fact that sellers respond to higher offers with a higher probability of acceptance, faster acceptances, and slower rejections.

While there is no eBay equivalent to the Hidden condition in the lab experiment, we can examine how sellers' choice processes are affected by their experience, under the assumption that more experienced sellers should be more aware of the strategic nature of RT. We measured experience by the number of bargaining exchanges sellers have participated in before the current offer. When examining RT as a function of the offer size for more experienced sellers, we observed a speeding up of that function for acceptances, but not for rejections. Looking at correlations between DDM parameters and experience, we found that seller experience is negatively correlated with boundary separation (like the lab data) and positively correlated with drift-rate bias (opposite to the lab data). More experienced eBay sellers exert less response caution and evaluate offers more positively.


**Summary of DDM Results**

<img src="/assets/img/project_4_images/project_4_fig_10.png" alt="Summary of DDM Results" style="width: 80%; display: block; margin: 1em auto;"/>


## 🏁 Conclusions

---

In the lab, we found that subjects who knew their RT was being observed evaluated offers more negatively during deliberation, and also exhibited less response caution overall – enabling quicker responses but at the cost of making more mistakes. Both findings are consistent with a strategic manipulation of RT idea.

In the eBay data, we also found that more experienced sellers exhibit less caution in their choices and are more likely to accept a given offer.

A commonality between the two setting was a lowering of the boundary separation: both when RTs were visible compared to hidden in the lab and when sellers had more experience on eBay. More experienced sellers are perhaps less cautious because they are involved in more bargaining threads and so cannot afford to spend as much time on any one offer. We also suspect that they are more likely to accept a given offer because they are less attached to their goods. Indeed, professional sellers are less likely to exhibit the endowment effect.


You can read more about the modeling of the eBay data in our [PNAS paper](https://www.pnas.org/doi/10.1073/pnas.2410956122){:target="_blank"}.