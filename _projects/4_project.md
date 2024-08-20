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


