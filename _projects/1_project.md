---
layout: page
title: project 1
description: a project with a background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

---
layout: page
title: Response time in negotiation on eBay
description: When negotiating, does the time it takes somebody to get back to you with a response tell you something about their preferences? 
img: assets/img/project_image_ebay_obs.jpeg
importance: 1
category: Research and Teaching
related_publications: 
---


<img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich, Wenjia Joyce Zhao

**Programming**: R

**Data Analysis**: Data Cleaning, Generalized Additive Models, Mixed Effects Linear and Logistic Regressions, Heckman Correction Analysis for Correction of Sampling Bias



## 🔭 About

---

In this project, I study whether response times in negotiations reveal the responder's evaluation of the offer, and thus can be used strategically by the proposers. I use an eBay dataset containing bargaining exchanges between June 2012 - June 2013 to answer this question.

## 🔍 Research question

---

When negotiating, does the time it takes somebody to get back to you with a response tell you something about their preferences? 

Consider this situation. Imagine you go on eBay to buy something (e.g. art poster for your room). You come across this listing. You can click ‘Buy it Now’ to buy the listing at $22 or click ‘Make an offer’ to send a private offer to the seller of $15 for instance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


Now, the seller rejects you so you go and make the $15 offer to another seller with the same good and price. This seller also rejects you. The only difference between the sellers is that the first one rejected you quickly ( 🐇 ), while the second one took longer ( 🐢 ) to reject you. 

Which seller should you choose to continue to negotiate with? The one who rejected **quickly** or the one who rejected **slowly**?


If I were you, I would choose the slow seller. In this project, I study whether response times in negotiations reveal the responder's evaluation of the offer, and thus can be used strategically by the proposers. I use an eBay dataset containing bargaining exchanges between June 2012 - June 2013 to answer this question.

## 👾 Methods

---

**Dataset:** eBay recently released a dataset with all exchanges for listings created from June 2012 to June 2013 ([Backus et al. 2020](https://academic.oup.com/qje/article/135/3/1319/5721265)). The dataset consists of millions of bargaining exchanges.

**Variables:** Each bargaining exchange contains:

- identification variables for seller, buyer and item
- seller experience variables such as number of previous bargaining exchanges they have participated in or number of listings created
- item characteristics variables such as list price, category name, number of views, listing age
- offer characteristics variables such as
    - offer price,
    - response to the offer (acceptance, rejection, counteroffer, expired, automatically accepted, automatically rejected, rejected because another buyer’s offer was accepted)
    - response time (time between when the offer was made and when the seller responded).

**Data partition:** In order to preserve some of the data for later replication analyses, the dataset was randomly partitioned into five parts, each with approximately 20% of the dataset. The partition was done randomly at the seller level to ensure that all exchanges including a specific seller were in only one part. For the analyses in this project, I only use one randomly selected part (i.e. 20%) of the data.                

**Data cleaning:** I wanted to make sure I exclude any errors in the dataset and also restrict the analyses to the relevant cases. 

I cleaned the data by first excluding exchanges with errors such as (1) If the item is sold, the sale price is above the listing price (0.2% excluded); (2) An offer is above the list price (1.8% excluded) and so on.

I also exclude other cases that might interfere with the question of interest such as (1) The seller has an accept or reject price threshold set (36% excluded); (2) No competing offers arriving at the same time the seller is considering another offer (8.6% excluded); (3) No messages included with the offer (9.8% excluded).

The final dataset of first buyer’s offers after applying all the restrictions consisted of 1,128,999 bargaining exchanges spread across 1,043,320 listings with 74,443 sellers and 743,343 buyers. 

**Analysis 1** (modeling non-monotonicity in the data using **Generalized Additive Models**): Because I noticed that the response time to offers wasn’t monotonic, I decided to use Generalized Additive Models to visualize and test for the effect of offer price as a percent of list price on the response time of the seller. These models incorporate smooth functions of the independent variables ([Wood et al. 2017](https://books.google.com/books/about/Generalized_Additive_Models.html?id=HL-PDwAAQBAJ)). These models are also useful to identify ranges in which the data is monotonic. The GAM regressions identify \[0.36, 0.68] as the range of offers for which both acceptance and rejection response times were monotonic. This was done based on when the first derivative of each GAM became significantly different from zero beyond their peaks (calculated using finite differences).

**Analysis 2** (modeling item category and seller level effects using **linear mixed effects regressions**): Using the restricted offer range in which the relationship between offer and response time was linear, I look at whether the effect is present for each item category and for each seller, not just in the aggregate. For this analyses, I use linear mixed effects regressions at the item category and seller level.

## 🐳 Main Results

---

**Results Analysis 1:** Most importantly, sellers’ RT’s varied significantly with offer size - over most of the offer range \[25%, 100%], median acceptance RT decreased with offer size from 2.1 hours down to 1.0 hours, while over most of the offer range \[0, 65%], median rejection RT increased with offer size, from 1.4 hours up to 2 hours (Fig. 1A). The relationship is evidence using a GAM regressions as well (Fig. 1B).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1A. Sellers’ median RT (in hours) as a function of buyers’ initial offer ratios (offer / list price), conditional on accepting or rejecting the offers. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent bootstrapped standard errors.
    Figure 1B. GAM regression predictions for sellers’ RT by buyers’ initial offer by type of seller response. Shaded regions represent 95% confidence intervals.
</div>

****

**Results Analysis 2:** These effects were largely consistent across product categories, ranging from baseball cards to vehicles, with 28/32 categories showing a positive relation between RT and offer size for acceptances and 26/32 categories showing the opposite relation for rejections (Fig. 2). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. Coefficients for the relation between seller’s log(RT) and buyers’ initial offer ratios, conditional on accepting or rejecting the offers and on item category. Bars represent standard errors.
</div>

Seller-level regressions revealed a similar pattern, with 69% showing negative offer-RT correlations for acceptances but only 53% showing positive offer-RT correlations for rejections (Fig. 3).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Seller level RT effects. ****(left) Histogram of coefficients of first offer ratio at the seller level for acceptance log RT in hours. (right) Histogram of coefficients of first offer ratio at the seller level for rejection log RT in hours.
</div>

## 🐡 Additional Results

---

**Additional Question 1:** Does this effect hold for buyers as well. More specifically, do buyers’ RT’s also varied with the size of sellers’ counteroffers?

**Result:** Sellers were not the only ones whose RT’s showed interesting variation – buyers’ RT’s also varied with the size of sellers’ counteroffers (Fig. 4). Looking at the gap between a seller’s counteroffer and their buyer’s original offer, larger gaps led to faster rejections and slower acceptances from the buyers. The difference in RT was substantial, decreasing from 5.58 hours to 2.96 hours for rejections of gaps from 10% to 100% of the original gap (between the list price and the buyer’s first offer).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 4. Buyers’ median RT (in hours) as a function of sellers’ compromise, conditional on the buyer accepting or rejecting the offers. The seller’s compromise is the amount that they lowered their counteroffer, divided by the gap between the list price and the buyer’s offer. A 100% compromise would be a counteroffer that matches the buyer’s offer; a 0% compromise would be a counteroffer that is the list price. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent bootstrapped standard errors.
</div>


**Additional Question 2:** Does the relationship between offer and RT also hold for the second and third buyer offer? 

**Result:** Yes, it seems this effect is not limited to the first buyer offer. However, the effect for rejections is weaker overall and only marginally significant for the third buyer offer.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_10.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 5. Sellers’ median RT as a function of buyers’ additional offers. (left) Sellers’ median RT (in hours) for buyers’ second offers (as a fraction of the sellers’ list prices), conditional on the seller accepting or rejecting the offers. (right) Sellers’ median RT (in hours) for buyers’ third offers (as a fraction of the sellers’ list prices), conditional on the seller accepting or rejecting the offers. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent bootstrapped standard errors. Bins with less than 25 observations were excluded.
</div>


**Additional Question 3:** I excluded exchanges where the seller had a private threshold set. However, if the offer is in-between an accept or reject threshold then the seller still has to respond so these cases could be analyzed as well.

**Result:** First, I look at which sellers are more likely to set private thresholds. Then, I look at whether the same relationship between offer and RT of the seller holds in cases where the threshold was privately set but the offer was either above the reject threshold or below the accept thresholds. In these cases, I can use the threshold as a boundary for the seller’s true valuation of the item. 

Overall, 62% of sellers did not use either acceptance or rejection thresholds, 17% used only rejection thresholds, 5.4% used only acceptance thresholds, and 15.7% used both thresholds. The relationship between seller experience and threshold usage was quadratic (U-shaped) in that both very inexperienced and very experienced sellers used thresholds more than medium-experience sellers (Fig. 6A). Thus, the low rate of threshold usage is not due to one-time or inexperienced sellers. While not completely conclusive, the low rate of automatic thresholds already suggests that most sellers prefer to evaluate offers as they arrive.

Moreover, for the exchanges with thresholds, a similar pattern between offer and RT holds (Fig. 6B).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_11.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_12.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 6A. Accept and reject threshold usage by seller experience. Probability of using an accept or reject threshold, both thresholds or neither threshold, as a function of seller experience quantile. Seller experience represents the number of previous bargaining exchanges the seller has participated in. All bargaining exchanges were sorted by seller experience into ten equal sized bins. In other words, each observation was a single exchange. I did it this way, rather than sorting at the seller level, because a single seller might have some exchanges with thresholds and others without. 
    Figure 6B. Sellers’ median RT (in hours) as a function of buyers’ initial offers (as a fraction of the sellers’ list prices), conditional on the seller accepting or rejecting the offers for bargaining exchanges with either reject or accept threshold and offers that were between these thresholds. If the accept threshold is not present, list price is used. If the reject threshold is not present, zero is used. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent bootstrapped standard errors. Bins with less than 100 observations were excluded.
</div>


**Additional Question 4:** What about countered offers? Does a counteroffer on eBay resemble an acceptance or a rejection?

**Result:** The countered offers do display some monotonicity as the rejections or acceptances – their RT’s monotonically decreased with offer size over the range \[10%, 100%] from 1.46 hours to 0.54 hours (the 0-10% offer RTs decreased very slightly to 1.17 hours) (Fig. Sx). Therefore, on eBay a countered offer resembles an acceptance more than a rejection response. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_13.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_14.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 7A. Distribution of buyers’ first offer conditional on sellers’ response. Histograms of buyers’ initial offers (as a fraction of the sellers’ list prices), conditional on the seller accepting, rejecting, or countering the offers.
    Figure 7B. Sellers’ median RT (in hours) as a function of buyers’ initial offers (as a fraction of the sellers’ list prices), conditional on the seller accepting or rejecting or countering the offers. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent bootstrapped standard errors.
</div>


## 🧩 Puzzling Results

---

**Question:** Finally, there is the question of how buyers on eBay respond to sellers’ RT’s. Since a fast rejection from a seller should signal to the buyer that their offer was not competitive, buyers who are rejected quickly should be discouraged from coming back with a second offer, but if they do make a second offer, it should be much higher than if they were rejected slowly. Does this happen on eBay?

**Result:** Indeed, in a lab experiment from my lab, [Konovalov & Krajbich (2023)](https://doi.org/10.1093/ej/uead055) found that second offers adjust more after a fast rejection than a slow rejection. However, in the existing eBay data, we observed the opposite effects. Buyers were more, not less, likely to make a second offer for faster rejections (Fig. 8) and conditional on making a second offer, those offers were lower for faster rejections (Fig. 8). Thus, counter to the lab data and to our predictions, buyers on eBay appear to be encouraged by a fast rejection.

{% include figure.liquid loading="eager" path="assets/img/project_1_images/project_1_fig_15.png" title="example image" class="img-fluid rounded z-depth-1" width = "500" %}
Figure 8. Buyers react adversely to slow sellers. (left) Probability that buyers make second offers as a function of sellers’ rejection RT to the first offers. The inset zooms in on rejection between 0 and 2 hours.(right) Size of buyers’ compromise as a function of sellers’ rejection RT to the first offers. The buyer’s compromise is the amount that they raised their second offer, divided by the gap between the list price and buyer’s first offer.  A 100% compromise would be a second offer that is the list price; a 0% compromise would be a second offer that is the same as the first offer. The size of the dots indicates the relative amount of data in that bin and the bars represent bootstrapped standard errors across buyers. 

## 🏁 Conclusions

---

These results show, using data from eBay's bargaining exchanges, that a significant proportion of responders do not adhere to preset strategies but decide in real-time in a way that reveals private information. The time agents take to respond becomes an inadvertent indicator of their evaluation of an offer. These findings show that RT can unintentionally expose an person's private preferences, offering a strategic advantage to the proposers.

## 🌟 Outcomes

---

This is an updated version of a preprint I posted online in 2020. You can check it out here: [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3804578](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3804578)

Presented the project at various conferences: 

- [International Conference on Computational Social Science, 2023](https://www.ic2s2.org/)
- Psychology Graduate Research Forum at Ohio State University, 2022
- [Annual Meeting for the Society of Neuroeconomics, 2022](https://neuroeconomics.org/wp-content/uploads/2022/09/SNE-Conference-2022_Program-1.pdf)
- [Consumer Neuroscience Satellite Symposium, 2022](https://neuroeconomics.org/wp-content/uploads/2022/09/SNE-Conference-2022_Program-1.pdf)
- [Society for Judgment and Decision Making Annual Conference, 2022](https://sjdm.org/programs/2022-program.pdf)
- [North-American Economic Science Association Conference, Choice Process Tracing Workshop, 2021](http://w3.econlab.arizona.edu/esa2021/index.php/choice-process-data-workshop/)

Working currently at a new version of the paper to submit for publishing soon.

