---
layout: page
title: Field experiment on eBay
description: Testing whether response times reveal eBay sellers' evaluations of offers
img: assets/img/project_image_ebay_field_experiment.jpeg
redirect: 
importance: 3
category: Research and Teaching
---

<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich

**Programming**: R, eBay API, python

**Skills**: Data Cleaning, Field Experiment, Linear and Logistic Mixed Effects Regressions

## 🔭 About

---

One of my previous projects using observational eBay data showed that seller’s and buyer’s response times on eBay varies with how good the offer is, namely responders are fast ( 🐇 ) to reject ( 👎 ) bad offers and slow ( 🐢 ) to reject ( 👎 ) good offers and they are fast ( 🐇 )  to accept ( 👍 ) good offers and slow ( 🐢 ) to accept ( 👍 ) bad offers. Although we controlled for possible confounding factors such as seller and item characteristics, we wanted to know if this results reflected a causal relationship between offer size and response times (RTs). So we decided to run a field experiment on eBay to test this idea by acting as buyers and making random offers to sellers on eBay. 



## 🔍 Research question

---

**Idea**

- select sellers and a specific number of items for each seller
- randomly make offers that are a % of list price
- measure seller’s RT for both acceptances and rejections

**Hypotheses**

- Seller’s response times will depend on the size of the first offers as a fraction of list price. Accept times will decrease and reject times will increase with increasing offer size.
- Seller experience decreases both acceptance and rejection response times. In addition, higher seller experience will make rejection times less responsive to offer ratio. This might happen if sellers are aware that response times betray some private information about their preferences so they might try to manipulate their response times to some degree to signal a higher value for the item to the buyer by rejecting quickly (Fig. 1).
- Sellers with less desirable items will be faster to accept offers and slower to reject offers.


<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" width="600px" %}
    </div>
</div>
<div class="caption">
    Figure 1. Bargaining setting. Buyers make offers to the seller. High offers are accepted quickly (first row). Medium offers are rejected slowly (second row), while low offers are rejected quickly (third row). Thus, the seller reveals their preference for each offer though their RT. Buyers can use this information to adjust their next offer. The buyer needs a larger increase in their offer after a fast rejection compared to slow rejection in order for the seller to accept.
</div>



## 👾 Methods

---

🗃️ **Step 1: randomly select items that satisfy some restrictions**

- Product type: single collectible card (easy to store and ship, high number of sales)
    - Sports: baseball, soccer, football, basketball, hockey
    - Collectible card games: magic: the gathering, pokemon, yu-gi-oh
- Item condition: very good and above
- Price range: $10 - $17
- Shipping cost: not free (so that the seller’s response would be solely based on their value for the item)
- Seller characteristics:
    - Located in the US
    - Feedback score: above 99% (median on eBay)
    - Experience: above median reviews of viable sellers
    - Items: more than 21 and less than 500

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="300px" %}
    </div>
</div>
<div class="caption">
    Figure 2. Example of item bought. Baseball card.
</div>


📔 **Step 2: design**

- within-subject design
    - multiple offers to the same 150 sellers (based on a power analysis from a pilot experiment with 55 sellers and 11 offers per seller)
- selection of sellers
    - randomly selected from pool that had at least 21 items on sale
    - first made an offer at 0.50 of list price (to try to screen out sellers that use automatic rejection thresholds)
        - replace seller if automatic acceptance or automatic rejection for this offer (39 total sellers)
    - replaced additional sellers (38 total sellers)
        - We initially set the item price range to be between $7 - $17, but realized that we could not make our lowest offers for items below 10 since all offers on eBay have to be at least 99 cents.
- levels of offers as % of list price for each seller:
    - 2 x {0.10, 0.15, 0.20},
    - 1 x {0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.60, 0.65},
    - 2 x {0.70, 0.75, 0.80}
- total planned offers: 21 x 150 = 3150
- randomization
    - first offer always 0.5
    - the rest randomized within seller


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 3. Histogram of offers as a percent of list price (p1/p0).
</div>


📤 **Step 3: making offers**

- 3 different eBay accounts
    - with no previous history on ebay
    - with different names and addresses to make offers to sellers
    - mostly used 2 accounts due to technical difficulties with one account
- expiration time of the offer: 24 h
- batch size of offers: approx 100/day
- time of offers: 9am-1pm (EST) on weekdays between February and March 2023
- spacing of offers to the same seller: 1 offer per day so offers don’t overlap
- response to possible counteroffers: let it expire
- issues:
    - We avoided making offers while the seller indicated that they were away which led to some delays and incomplete number of offers for some sellers.
    - Some sellers also deleted their listings during the experiment which also led to incomplete number of offers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 4. Screenshot of the offer page on eBay.
</div>

📐 **Step 4: measurement**

- create eBay developer account that uses the eBay API (Application Programming Interface) to send requests and return data from the eBay database
- used the eBay APIs to find items, find available information for items and sellers, and retrieve data about the offers we made and their RTs.
- Unfortunately, the eBay API does not directly record the time when the seller responds to an offer, only when the offer is made → workaround
    - We used the timestamp of when the sales occurred for acceptance RT, the next offer creation time for counteroffers and we made a customized script to get the rejection offer timestamp.
    - The script accessed approximately every 5 minutes the accounts to check whether the status of the offer had changed and recorded the time of a status change from pending to a rejection.
    - If technical issues occurred and the script was inactive and couldn’t record rejection timestamps, we used the message timestamps for rejections instead.
    - We checked the delay between our script timestamp measure and notification measure. It was approximately uniformly distributed between no delay or a maximum delay of about one hour.

🗄️ **Step 5: logistics**

- wrote and submitted IRB for the experiment
- set up tax exempt accounts on eBay
- created a detailed tutorial on how to make offers and for other contingencies for undergraduates helping with data collection
- made sure script runs continuously on lab laptops and sends automatic emails in case it crashes
- made a schedule every week for each undergrads for which offers to make and met with all undergrads to explain the experimental procedure and answer any questions they might have
- monitored in real time using google spreadsheets how offers were made and answered possible questions or dealt with problems that arose
- downloaded and sent receipts for reimbursement each week
- made sure items arrived at the specified address each week
- stored the item in a designated room
- unpacked all items with the help of undergrads and checked any missing items with the help of an item checklist

## 🐳 Results

---

**Missing data**
In a few cases I couldn’t retrieve the RT. This happened in 18 cases for acceptances (1.3% of acceptances), in 7 cases for rejections (1.2% of rejections) and 6 cases for counteroffers (0.8% of counteroffers). I excluded these observations. In total, I had 3,037 offers, with 11 auto- acceptances, 182 auto-rejections, 200 expired, 1308 acceptances, 565 rejections and 771 counteroffers.

For rejections, 24% of RT come from message notifications and 76% come from the eBay API. Based on 436 observations, the mean delay in messages timestamps compared to our script timestamp was 26.6 minutes (Mean = 26.6 min, SD = 17.6 min, Median = 26.7 min). I also ran the regression of log(RT) on offer ratio with a dummy variable for the source of the RT, but the results did not change significantly.

**Descriptive statistics**

Although the sellers have 24 hours to respond, most respond within an hour (M = 3, Std. = 7, Median = 1, Table 1, Fig. 5).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Table 1. Summary statistics for variables of interest.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 5. Response times in hours by type of seller response. The seller has 24 hours to respond.
</div>


As in the eBay observational data, low offers are more likely to be declined while mid-range offers are more likely to be countered (Fig. 6). There is also a tendency to let very low offers expire. Even though we try to exclude sellers that have automatic thresholds set, we still encounter cases where our offers are automatically declined. As expected, this is more likely to happen for very low offers. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    igure 6. Probability of each type of seller response. As offer size as a fraction of price increases, the seller is more likely to accept it and less likely to reject it. If the offer is in the mid-range, the seller is more likely to counter it. The seller is also more likely to let very low offers expire
</div>

**Main result**
Similar to what we observe in the eBay observational data, we expected that sellers’ acceptance times would decrease with increasing offer size and sellers’ rejection time would increase with increasing offer size (Fig. 7). 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption">
    Figure 7. eBay field experiment mirrors pre-existing eBay data. A. Sellers’ probability of accepting the first offer as a function of the offer ratio (offer / list price). B. Sellers’ median RT (in hours) as a function of the offer ratio, conditional on acceptance or rejection. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent
standard errors across sellers. Bins with less than 40 observations are excluded.
</div>

To test our hypothesis, I performed a mixed-effects linear regression with the log of seller’s RT as the dependent variable. As independent variables I used the seller’s response and the first offer (as a fraction of list price) for each response type: accept or reject. I included full seller random effects. In cases where the models didn’t converge or had singular boundary issues, I performed a model comparison between models with simpler random effects structure and chose the best model according to the AIC criterion. 

I found the expected negative coefficient on offer ratio for the acceptances, and a positive coefficient on offer ratio for the rejections (Table 2). I didn’t find a significant coefficient for countered offers on offer ratio.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption">
    Table 2. Linear regressions for eBay field experiment 2 of log(RT) on first buyer offer ratio (p1/p0) (z-score) conditional on the seller accepting, or rejecting the offers. These regressions include random effects (clustered by seller) on the intercept and offer ratio. The random effects structure was chosen based on the model with the lowest AIC from a model comparison. All variables are z-scored except Number of Best Offer.
</div>



**Additional results - item characteristics**

We expected that sellers with less desirable items such as items with older listing dates will be faster to accept offers and slower to reject offers. 

To test the effect of item characteristics on RT, I added measures of item characteristics to the previous model, including number of previous offers for the item, whether the item was relisted. I didn’t find any significant effects of item characteristics on RTs (Table 2).

**Additional results - seller characteristics**

We also expected seller experience to decrease both acceptance and rejection RT. In addition, we expect that higher seller experience will make their rejection times less responsive to offer ratio. 

To test the effect of seller experience on RT, I added measures of seller experience to the previous model, such as seller’s number of feedback rating received, seller’s registration year on eBay and number of listings available at the start of data collection. Only one of the measures of seller experience was significant and only on acceptance RT: years since registration. Contrary to expectations, the main effect of years of experience increased acceptance RT and the interaction effect was significantly negative (Table 2).

## 🏁 Conclusions

---

Our results aligned well with the existing eBay data – sellers were more likely to accept higher offers, were significantly faster to accept higher offers, and were non-significantly slower to reject higher offers. 

## 🌟 Outcomes

---

Presented the project at a conference: [International Conference on Computational Social Science, 2023](https://www.ic2s2.org/)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_10.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>

Undergraduates who helped collect the data with me. From left to right: **Astin Lin, Selina Yu, Jocelyn Spanbauer, Vidhur Narayan, Fangzhi Li**. Other undergraduates helped me with the first pilot experiment and are not in this picture: **Josh Hascher, Katherine Scantling, Alexandrea Howard** (high schooler). I couldn’t have done this without them.

## 🎯 Future directions

---

We were interested in answering 2 main questions. 

Question 1: What is the effect of the buyer’s offer on the seller’s RT? - test using randomized buyer offers.

Question 2: What is the effect of the seller’s rejection RT on buyer’s second offer? - test using randomized rejection times to buyer’s first offers.

The set up for each part was as follows.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_3_images/project_3_fig_11.png" title="example image" class="img-fluid rounded z-depth-1" width="60%" %}
    </div>
</div>

We completed part 1. We set up part 2, but offers came in too slow (1-2 per week for 150 items) so we abandoned the idea. We’re considering testing part 2 with an in-person field experiment at a convention or event where people trade cards.

