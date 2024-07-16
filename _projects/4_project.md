---
layout: page
title: How cognitive modeling can identify response biases in negotiations
description: Using Drift Diffusion Modeling for lab and field bargaining to study how responders strategically manipulate their response times
img: assets/img/project_image_ebay_and_exp_ddm.jpeg
importance: 4
category: Research and Teaching
---

<img src="https://images.unsplash.com/photo-1515139832362-a06b09ecced0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>


**Collaborators**: Ian Krajbich, Wenjia Joyce Zhao

**Programming**: R, stan

**Skills**: Bayesian Statistics, Model Comparison, Sequential Sampling Models, Supercomputing Resources


## 🔭 About

---

Many decisions involve a process of comparing and accumulating net evidence in favor of the choice options up to a predetermined boundary, a process which takes time and reflects the strength of the net evidence. The evidence reflects the agent’s evaluation of the choice options – an agent deciding between an apple ( 🍎 ) and an orange ( 🍊 ) must weigh the benefits and costs of the apple against those of the orange. 

If these two evaluations are roughly equal ( 🍎 ~ 🍊), the agent will struggle to decide which item to choose ( 🐢 ). On the other hand, if the agent finds the orange to be much more attractive than the apple ( 🍊 > 🍎 or 🍎 > 🍊), then their choice will be quick and predictable ( 🐇 ). This relation between strength-of-preference and response time (RT) is a basic feature of evidence-accumulation or sequential-sampling models, such as the drift-diffusion model (DDM, Figure 1).

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


## 🔍 Research question

---

The DDM is typically applied to fast perceptual judgments, but in recent years it has seen increasing application to economic choice. However, it has yet to be applied to strategic settings where RT might betray private information. It has also not been applied to decisions longer than a few seconds. Here, we fit the DDM to both the lab and eBay bargaining data to see how well it can quantitatively explain the choice and RT data and to better understand how agents’ decisions might change when RT is a strategic variable.


**Drift Diffusion Model**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" width="600px" %}
    </div>
</div>
<div class="caption">
    Figure 1. Drift Diffusion Model.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    <b>Drift rate (v)</b> represents the evaluation process. It depends on the value of the good, the size of the proposer’s offer and possible future offers: v ~ b0 + b1 (value - offer). The more positive the drift rate is (in this case the higher the surplus earned), the more likely the offer will be accepted. The larger the absolute value of the drift rate, the quicker the decisions will be made on average. The drift rate also has a drift intercept (b0) which represents a bias during the decision process towards one or the other option, controlling for the surplus.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    <b>Starting point bias (z)</b> is another type of bias in the model that appears even before the decision process starts. This bias is independent of the specifics of the offer.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    <b>Boundary separation (a)</b> represents the amount of evidence needed to make a decision. Smaller decision boundaries indicate a lower caution level. This leads to more mistake on average, but also quicker responses.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    <b>Non-decision time (t)</b> represents the time for encoding the information presented and the time for making a motor response.
</div>


Changes in the parameters will produce behavioral changes such as changing choice probabilities and response times.

Moreover, changes in parameters help us infer which cognitive processes change with our experimental manipulation:

- the starting point bias (z) represents the preparation process
- the drift rate (v) represents the evaluation process
- the decision boundary (a) represents the caution level
- the non-decision time (t) represents motor or processing delays


**DDM in bargaining**

Agents who do not have prepared strategies must make decisions on the spot, likely employing a DDM-like process. In that case, their RT’s might reveal their private information, putting them at a strategic disadvantage. In the bargaining example, the seller must weigh the buyer’s offer against the utility of the car and/or future offers. If the seller rejects the buyer’s offer quickly, they signal to the buyer that the offer was far too low; if the seller rejects the offer slowly, they signal to the buyer that the offer was competitive. A strategic buyer, noting the seller’s RT, should respond with a large offer increase in the former case but only a small offer increase in the latter. Therefore, a partially strategic seller would want to reject as quickly as possible, to get the largest possible offer increase from the strategic buyer. However, quick decisions come at a cost  – they entail a higher chance of mistakenly rejecting a good offer or accepting a bad offer. Thus, a fully strategic seller would prepare a strategy ahead of time, allowing them to immediately respond to any offer, and keeping their information private. In that case, RT would not carry any information and would be ignored by agents in the market. Agents who have prepared strategies and who do not make mistakes are the standard in economics and game theory. Here we challenge this standard.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
        Bargaining setting. In a standard bargaining exchange, the proposer makes an offer to the responder, which the responder can either accept or reject. On eBay, buyers make offers     to sellers. The size of the offer, in combination with the seller’s private value, determines the drift rate in the DDM. Here, the high offer (in green) yields a modest positive drift rate (towards the “accept” boundary), the medium offer (in purple) yields a low negative drift rate (towards the “reject” boundary), and a low offer (in pink) yields a high negative drift rate. As a result, the seller accepts the high offer with medium speed, rejects the medium offer slowly, and rejects the low offer quickly. So, a strategic buyer will increase their next offer a lot after a quick rejection, but only a little after a slow rejection.
</div>

**Research question**

The DDM is typically applied to fast perceptual judgments, but in recent years it has seen increasing application to economic choice. However, it has yet to be applied to strategic settings where RT might betray private information. It has also not been applied to decisions longer than a few seconds. Here, we fit the DDM to both the lab and eBay bargaining data to see how well it can quantitatively explain the choice and RT data and to better understand how agents’ decisions might change when RT is a strategic variable.

## 👾 Methods

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


**Lab experiment**

In the lab experiment of [Konovalov and Krajbich (2023)](https://doi.org/10.1093/ej/uead055), each buyer (responder) was randomly assigned a private value from 0 to 100 for a voucher owned by their assigned seller (proposer). The voucher was worthless to the seller; their implicit goal was simply to extract the highest possible price from the buyer. The seller set an initial price from 0 to 100, which the buyer could accept or reject. If the buyer rejected the offer, the seller could try again with another price, but both the buyer’s and seller’s profits from a sale shrank by a constant factor in this case. As in real bargaining, the subjects had to weigh the costs and benefits of delaying (or preventing) a trade by either setting the price too high or rejecting an acceptable offer. There were two conditions in the experiment, with the buyer’s RT either Hidden or Visible to the seller. As with the eBay data, we focus exclusively on behavior in response to the first offer.

**eBay bargaining**

Our field setting is eBay – one of the world’s largest online marketplaces. Since 2005 eBay has allowed people to sell their products through an alternating-offer protocol where sellers post items for sale and buyers can make them offers. eBay recently released a dataset with millions of bargaining exchanges from June 2012 to June 2013 ([Backus et al. 2020](https://academic.oup.com/qje/article-abstract/135/3/1319/5721265?redirectedFrom=fulltext)). We analyze 20% of that data, leaving the rest for future validation. We focus on buyers’ initial offers and sellers’ responses to those offers. A seller can accept, reject (including letting it expire), or counter an offer.

## 🐳 Main Results

---

**Lab DDM**

The DDM provides an accurate quantitative account of the buyers’ behavior in the lab experiment. We found that the drift rate in the DDM was a linear function of the buyer’s value minus the seller’s initial price (i.e., the buyer’s surplus). As a result, a buyer’s probability of accepting an offer was increasing in their surplus, both in the data and in the model (Fig. 1, b = 0.11, S.E. = 0.01, p < .001). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_10.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Choice data and DDM fits in the A. lab Hidden-RT condition B. lab Visible-RT condition. Buyers’ probability of accepting the first offer as a function of their surplus (value – offer).
</div>

Like the eBay data, a buyer’s RT was increasing with surplus for rejections (b = 0.004, S.E. = 0.001, p <.001) but decreasing with surplus for acceptance (b = -0.01, S.E. = 0.002, p = .019), both in the data and model (Fig. 2,3).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_11.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. RT data in A. lab rejections, B. lab acceptances. Buyers’ median RT (in seconds) as a function of their surplus.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_12.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. RT fits in A. lab rejections, B. lab acceptances. Buyers’ median RT (in seconds) as a function of their surplus.
</div>


The DDM also reveals interesting differences between the Hidden and Visible RT conditions. While both conditions look superficially similar, a careful examination of RT reveals that buyers were significantly faster to respond in the Visible condition, particularly for rejections (b_visible = -0.32, S.E. = 0.16, p = .045 for acceptances, b_visible = -0.24, S.E. = 0.06, p = <.001 for rejections). 

To compare the conditions with the DDM, we allowed non-decision time, boundary separation, starting point, and the drift-rate function to vary between conditions. We observed two noticeable differences between conditions. Buyers in the Visible condition exhibited a marginally narrower boundary separation (group posterior differences Visible - Hidden M = -0.443, HDI = \[-0.92, 0.097]) and a credibly more negative drift-rate bias (group posterior differences Visible - Hidden M = -0.405, HDI = \[-0.673, -0.157]). In other words, buyers in the visible condition exhibited less response caution (enabling quicker responses), and evaluated offers more negatively, increasing the speed of rejections.

**eBay DDM**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_13.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 4. Activity levels by time of day. Histogram with number of seller’s first offer responses as a function of hour in the day (PDT).
</div>

The DDM also provides an accurate account of sellers’ behavior on eBay, with some caveats. Unlike in the lab, eBay users are not constantly monitoring their accounts and thinking about how to respond to offers. Sellers may take hours before seeing an offer and their decision process might be interrupted by sleep, work, family, etc (Fig. 4). These delays and interruptions are non-decision time. Standard DDM’s account for non-decision time with a uniform random variable. Therefore, we developed more complex models of non-decision time that use Gamma distributions (Model 2), include the time of day (Model 3: sleep and work), and vary with the quality of the offer (Model 4: more interruptions when sellers struggle to decide). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_14.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


These additions to the DDM substantially improved model fit for many sellers (WAIC Model 4 lower than Model 1 for N = 476 (100%), WAIC Model 4 lower than Model 2 for N = 402 (84%), WAIC Model 4 lower than Model 3 for N = 201 (42%)). Using the best-fitting non-decision-time model for each seller, the DDM can accurately capture both choice and RT data from the eBay sellers (at least those that fit our inclusion criteria – see SOM) namely the fact that sellers respond to higher offers with a higher probability of acceptance, faster acceptances, and slower rejections (Fig. 5).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_15.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_16.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 5. Model fits for choices and response times. A. Choice data and DDM fits in the eBay data. Sellers’ probability of accepting the first offer as a function of the offer ratio (offer / list price). B. RT data and model fits in eBay rejections and acceptances. Seller’s median RT (in hours) as a function of the offer ratio, in the data and DDM fits.
</div>

While there is no eBay equivalent to the Hidden condition in the lab experiment, we can examine how sellers’ choice processes are affected by their experience, under the assumption that more experienced sellers should be more aware of the strategic nature of RT. We measure experience by the number of bargaining exchanges sellers have participated in before the current offer. When examining RT as a function of the offer size for more experienced sellers, we observe a speeding up of that function for acceptances, but not for rejections (b_experience = -0.144, S.E. = 0.02, p < .001 for acceptances, b_experience = -0.013, S.E. = 0.03, p = 0.655 for rejections). Looking at correlations between DDM parameters and experience, we find that seller experience is negatively correlated with boundary separation (like the lab data; Spearman r(474) = -0.18, p < .001) and positively correlated with drift-rate bias (opposite to the lab data; Spearman r(474) = 0.24, p < .001). More experienced eBay sellers exert less response caution and evaluate offers more positively.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_17.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 6. Predicted sellers’ RT (in hours) as a function of offer ratio for sellers with low or high experience on eBay, as measured by number of bargaining exchanges sellers have participated in before the current offer.
</div>

**Summary of DDM Results**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_18.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>

**Strategic use of RT**

Finally, there is the question of how buyers on eBay respond to sellers’ RT. Since a fast rejection from a seller should signal to the buyer that their offer was not competitive, buyers who are rejected quickly should be discouraged from coming back with a second offer. If they do make a second offer, it should be much higher than if they were rejected slowly. Indeed, in the lab experiment, Konovalov & Krajbich found that second offers adjust more after a fast rejection than a slow rejection (b_rejection RT = 1.40, S.E. = 0.34, p < .001, Table Sx). However, in the pre-existing eBay data we observed the opposite effects. Buyers were more, not less, likely to make a second offer after faster rejections (Fig. 7, b = -0.098, S.E. = 0.004, p < .001) and conditional on making a second offer, those offers were lower for faster rejections (Fig. 7, b = 0.0026, S.E. = 0.0005, p < .001). Thus, counter to the lab data and to our predictions, buyers on eBay appear to be encouraged by fast rejections.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_4_images/project_4_fig_19.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 7. Buyers react adversely to slow sellers. A. Probability that buyers make second offers as a function of sellers’ rejection RT to the first offers. The inset zooms in on rejection between 0 and 2 hours. B. Size of buyers’ compromise as a function of sellers’ rejection RT to the first offers. The buyer’s compromise is the amount that they raised their second offer, divided by the gap between the list price and buyer’s first offer.  A 100% compromise would be a second offer that is the list price; a 0% compromise would be a second offer that is the same as the first offer. The size of the dots indicates the relative amount of data in that bin and the bars represent bootstrapped standard errors across buyers.
</div>


**Comparison of eBay and lab bargaining**

It is worth briefly commenting on the similarities and differences between bargaining in the lab and field settings that we’ve studied. First, the nature of the deliberation in the two settings is quite similar. In the lab, the buyer must decide whether the seller’s second offer is going to be a big enough improvement to justify the cost of waiting. Similarly, on eBay the seller must decide whether some future offer is going to be a big enough improvement to justify the expected delay. The main difference between the settings is that on eBay there can be multiple buyers or multiple sellers; in the lab there was only one buyer and one seller. The presence of multiple sellers might explain why buyers are encouraged by fast rejections on eBay. If buyers are impatient and have the option to move on to other sellers, the positive signal from a slow rejection might not be enough to compensate for the buyer’s lost time. The different timescales may also play a role here – a few seconds of delay in a fixed-duration lab experiment is costless to the seller, but a few hours of delay on eBay may be excruciating. While this explanation may account for why buyers are less likely to return to a slow seller, it doesn’t explain why second offers are smaller after faster rejections. One potential explanation might be that fast sellers are perceived as being more eager to sell. A separate issue is that on eBay there are potentially multiple reasons why more experienced sellers might appear to have narrower boundaries: in addition to strategic considerations, it could also be that they deal with more offers and so check their accounts more often, are less distracted, etc. These are interesting questions for future research.

## 🏁 Conclusions

---

In conclusion, we’ve demonstrated that people make strategic decisions, sometimes ones that take hours or days, in a way that is consistent with noisy evidence accumulation and comparison, i.e., sequential sampling or drift diffusion. This means that RT is an important strategic variable to be incorporated into game theory, and that the range of applications of sequential sampling models like the DDM is greater than previously thought. 

## 🌟 Outcomes

---

Presented the project at various conferences: 

- Decision Science Collaborative Research Forum at Ohio State University, 2024
- [International Conference on Computational Social Science, 2023](https://www.ic2s2.org/)
- Psychology Graduate Research Forum at Ohio State University, 2022
- [Annual Meeting for the Society of Neuroeconomics, 2022](https://neuroeconomics.org/wp-content/uploads/2022/09/SNE-Conference-2022_Program-1.pdf)
- [Consumer Neuroscience Satellite Symposium, 2022](https://neuroeconomics.org/wp-content/uploads/2022/09/SNE-Conference-2022_Program-1.pdf)
- [Society for Judgment and Decision Making Annual Conference, 2022](https://sjdm.org/programs/2022-program.pdf)
- [North-American Economic Science Association Conference, Choice Process Tracing Workshop, 2021](http://w3.econlab.arizona.edu/esa2021/index.php/choice-process-data-workshop/)

The paper is currently under review.
