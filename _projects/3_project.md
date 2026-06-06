---
layout: page
title: Field experiment on eBay
description: Testing whether response times reveal eBay sellers' evaluations of offers
img: assets/img/project_image_ebay_field_experiment.jpeg
redirect:
importance: 3
category: Research
---

<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich

**Tools & Languages**: R, python, eBay API

**Methods**: Data Cleaning, Field Experiment, Linear and Logistic Mixed Effects Regressions

## 🔭 About

---

One of my previous projects ([eBay observational study](/projects/1_project/)) using observational eBay data showed that seller’s and buyer’s response times on eBay varies with how good the offer is, namely responders are fast ( 🐇 ) to reject ( 👎 ) bad offers and slow ( 🐢 ) to reject ( 👎 ) good offers and they are fast ( 🐇 ) to accept ( 👍 ) good offers and slow ( 🐢 ) to accept ( 👍 ) bad offers. Although we controlled for possible confounding factors such as seller and item characteristics, we wanted to know if this results reflected a causal relationship between offer size and response times (RTs). So we decided to run a field experiment on eBay to test this idea by acting as buyers and making random offers to sellers on eBay.

<figure style="width: 70%; margin: 0 auto; text-align: center;">
  <img src="/assets/img/project_3_images/project_3_fig_1.png" alt="Figure 1" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 1.</strong> Bargaining setting. Buyers make offers to the seller. High offers are accepted quickly (first row). Medium offers are rejected slowly (second row), while low offers are rejected quickly (third row). Thus, the seller reveals their preference for each offer through their RT.</figcaption>
</figure>




<br>

## 👾 Methods

---

We ran two waves.

<div style="display: flex; gap: 24px; align-items: flex-start; margin-top: 1.5em;">
<div style="flex: 1;" markdown="1">

- In the **first wave** (July–August 2020, during Covid), we targeted 50 sellers with enough items (15–100 listings each). We made 11 offers per seller — each for a different item — at pseudorandom fractions of the list price ranging from 0.3 to 0.9. Items were baseball cards priced between $10 and $20.
- In the **second wave** (February–April 2023), we scaled up to 150 sellers with 21 offers each, widening the offer range to 0.1–0.8. We also expanded to other collectible cards (Pokémon, Magic: the Gathering, Yu-Gi-Oh, sports cards) — chosen because they are easy to ship, store, and had high bargaining activity on eBay.

</div>
<img src="/assets/img/project_3_images/project_3_fig_2.png" alt="Figure 2" style="width: 28%; flex-shrink: 0;"/>
</div>

This was a **within-subject design**: each seller received offers at multiple price points, letting us isolate the effect of offer size from unobserved seller characteristics.

We used **three different eBay accounts** with no prior history, spaced offers so they never overlapped, and sent at most one offer per seller per day.

We also **screened out sellers with automatic thresholds** by making an initial offer at 50% — sellers who auto-accepted or auto-rejected were replaced.

I used the **eBay API** to identify items and sellers, retrieve listing metadata, and collect offer outcomes and response times.

## 🐳 Results

---

Similar to what we observe in the eBay observational data, we expected that sellers’ acceptance times would decrease with increasing offer size and sellers’ rejection time would increase with increasing offer size.

<figure style="width: 85%; margin: 1.5em auto; text-align: center;">
  <img src="/assets/img/project_3_images/project_3_fig_3.png" alt="Figure 3" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 2.</strong> eBay field experiment mirrors preexisting eBay data. (A) Sellers’ probability of accepting the first offer as a function of the offer ratio (offer/list price). (B) Sellers’ median RT (in hours) as a function of the offer ratio, conditional on acceptance or rejection. The size of the dots indicates the relative amount of data in that bin, across both curves, and the bars represent SE across sellers. Bins with less than 40 observations are excluded.</figcaption>
</figure>

You can read more about this in our [PNAS paper](https://www.pnas.org/doi/10.1073/pnas.2410956122){:target="_blank"}.

## 🌟 Acknowledgements

---

Undergraduates who helped collect the data with me. From left to right: Astin Lin, Selina Yu, Jocelyn Spanbauer, Vidhur Narayan, Fangzhi Li. Other undergraduates helped me with the first pilot experiment and are not in this picture: Josh Hascher, Katherine Scantling, Alexandrea Howard (high schooler). I couldn’t have done this without them.

<img src="/assets/img/project_3_images/project_3_fig_4.png" alt="Figure 4" style="width: 100%; margin-top: 1em;"/>