---
layout: page
title: Ohio Super Computer Center Summer Institute Teaching
description: Taught the basics of statistics, experimentation and R programming using cluster computing resources and helped high school students to apply these skills to analyze and present an eye-tracking project
img: assets/img/project_image_osc_teaching.jpeg
importance: 6
category: Research and Teaching
---

<img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich

**Programming**: R, stan

**Skills**: Experiment, Eye-tracking, Model Simulation and Model Fitting, Sequential Sampling Models, Supercomputing Resources

# Lesson Plan

---

Day 1: Introduction to research, cognitive modeling, DDM and aDDM (by Ian Krajbich)

Day 2: Introduction to R, tidyverse and ggplot

Day 3: Practice R by replicating [aDDM paper](https://www.nature.com/articles/nn.2635) analyses using original dataset. Field trip to see experimental economics lab, eye-tracker and MRI.

Day 4: Collecting data for the experiment and modeling introduction. 

Day 5: Introduction to statistics, experimental research design, modeling exercise - simulating the DDM and aDDM. Field trip to see Ohio Supercomputing Center.

Day 6: Behavioral analysis and aDDM analysis using the collected data

Day 7: Preparing the presentation

Day 8: Finishing presentation and presenting to parents and other attendees

# Project - How gaze affects choices: comparison between food ( 🍕) and art ( 🎨 )

---

## 📔 Background

---

**DDM and aDDM**

Natural constraints like competition over resources and survival require us to make decisions quickly and accurately. Imagine choosing between two TV shows: Black Mirror and Russian Doll. There is a ‘correct’ answer in the sense that you like one option better than the other. There is a cost associated with making the wrong decision, but also a cost of spending more time on the decision. Balancing these costs leas us to the speed-accuracy tradeoff. 

How do we make decisions?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Suppose we don’t know anything about the TV shows, but we can ask our friends how much they liked each show. Each person we ask gives us more information, On average we become more confident that one of the movies is the better one to see.

When we get ratings for the two options we can calculate a net rating: ration for option 1 - rating for option 2. After each person we ask, we can update our net rating. This total net ration is called a decision variable. The decision variable reflects the evidence we’ve collected so far in favor of one option or the other. It always starts at 0, unless we have some prior knowledge or bias.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>


Each person we ask gives us more information. On average we become more confident that one of the TV shows is the better one to see. But how do we decide when to stop and pick a TV show?

A good rule is to keep collecting information until the decision variable reaches a threshold value e.g. keep asking people for rating until one TV show beats the other TV show by x stars.

Think of a threshold as a desired confidence level. 

- If your emphasis is speed (maybe you are in a rush):
    - set a low threshold
- If your emphasis is accuracy (maybe you are picking a show for a date)
    - set a high threshold

Suppose you want to be 80% sure that you’ve chosen the better TV show. Setting the threshold at the right level will get you 80% accuracy as quickly as possible (on average).

In general, for any desired accuracy rate, the constant threshold rule will get you there the fastest (on average).

**Summary**

In most cases, people make more accurate decisions when they take more time to collect information. Information can be from outside sources (e.g. asking friends) or from internal sources (e.g. thinking about how much you like something).

Taking more time to make a decision comes at the cost of doing other things or making other decisions.

Accumulating net evidence (using a decision variable) up to a fixed threshold or confidence level is often the best way to balance this speed-accuracy tradeoff.

**DDM**

A formal mathematical model of capturing and explaining decision-making.

$$
V_{t} = V_{t-1} + d(u_{0} - u_{1}) + \epsilon_{t}
$$

$$
\epsilon_{t} \sim \mathcal{N}(0,\sigma^2)
$$

- $(u_{0}-u_{1})$  represents the average evidence for each of the two options
- $\epsilon_{t}$ represents the noise around the slope due to the noisy observations

**aDDM**

An extension of the DDM that accounts for attention during the decision process.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    <b>aDDM.</b> A relative decision value (RDV) evolves over time with a slope that is biased toward the item that is being fixated. The slope dictates the average rate of change of the RDV, but there is also an error term drawn from a Gaussian distribution. When the RDV hits the barrier a choice is made for the corresponding item. The shaded vertical regions represent the item being fixated.

</div>


$$
  \text{look left: } V_{t} = V_{t-1} + d(u_{left}-\theta u_{right}) + \epsilon_{t}
$$

$$
\text{look right: } V_{t} = V_{t-1} + d(\theta u_{left}-u_{right}) + \epsilon_{t}
$$

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    aDDM simulations. In simulated runs of the model, the RDV generally moved toward the fixated item, but the slope depended on the values of the two items (Fig. 1c,d). For example, the RDV signal integrated toward the left barrier when the subject fixated on the left item, even though it had a lower value than the right item (Fig. 1d). This suggests that visual fixations are important for the integration process.
</div>


## 🔍 Research question

---

How much are your choices influenced by attention?

Given a choice between two items, you’ll probably choose the one you like the most.

BUT, the item to which you pay more attention may have an advantage over the unattended item ([Krajbich et al., 2010](https://www.nature.com/articles/nn.2635)).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="600px" %}
    </div>
</div>

So if you look more at the item rated 10, or look between both equally, you’ll choose that item (most likely, with some noise).

But if you looked more at the item rated 8, you may actually be more likely to choose that item, depending on how much attention influences you choices.

Research Question: Is the effect that attention has on choice larger for art or for food?

## 👾 Methods

---

**Art Rating**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="200px" %}
    </div>
</div>


**Food Rating**


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" width="200px" %}
    </div>
</div>

- Ratings for every art piece and food item
    - 107 pieces of art
    - 108 foods
- Eye-tracked choices between two art images or two food items
    - 105 art choices
    - 150 food choices

**Art Choices**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>


**Food Choices**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>

Eye-tracking

- subjects rest their head on the chin rest
- camera measures location and dwell time of eye movements
- 1000 Hz - 1 measurement per second
    
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_10.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

    

Behavioral and eyetracking analyses

- linear regressions
- logistic regressions
- t-tests

Modeling analyses

- aDDM developed by [Krajbich et al. (2010) Nature](https://www.nature.com/articles/nn.2635)
- using the [Ohio Supercomputing Center](https://www.osc.edu/) to fit the model

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_11.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Hypotheses

- larger value differences → higher choice probability
- larger values difference → faster decisions
- more dwell time → higher choice probability
- discount for art ? discount for food
- last fixation → higher choice probability

## 🐳 Main Results

---

As the value difference between left and right item increases, probability of choosing the left item increases for both food and art.

Food choices are slightly more consistent with choices than art ratings.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_12.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>


As the value difference becomes more negative or more positive, response times decrease.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_13.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>

As total dwell time between left and right item increases so does the probability of choosing left.

aDDM attention discount parameter:

- art: $$\theta = 0.504$$
- food: $$\theta = 0.378$$
- lower $$\theta$$ = larger gaze effect

This means that the group was more influences by attention for their food choices compared to the art choices.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_14.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>


This is not because people look at higher rated items for longer.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_15.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>


When the last fixation is to the left, the probability of choosing the left option increases.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_6_images/project_6_fig_16.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 🏁 Conclusions

---

The groups’s choices followed an evidence accumulation process

- higher ratings lead to higher probability of choosing and a difference in ratings close to zero lead to equal probability of choosing either option.
- smaller differences between ratings lead to longer response times.

More attention on an object increases the probability of it being chosen.

The group was more influenced by attention for their food choices compared to the art choices.


## 🌟 Outcomes

---

**Student evaluations**

### Day 2

**What did you learn today?**

> We learned how to code with R.
> 

### Day 3

**What did you learn today?**

> I learned more about the applications of programming on psychology.
> 

> A lot about mri scanning and eye tracking. Learned a little bit about how to code for eye tracking data.
> 

> I learned how an eye tracking machine and MRI works.
> 

> I learned how to plot histograms in r and some of the science behind MRIs.
> 

> I learned all about brain imaging and monitoring via tools such as MRIs and eye tracking, which are powered through computing.
> 

> How a normal video camera can be used to create an eye tracking device.
> 

> Computational applications of science
> 

**Who helped you out today and how?**

> Miruna helped me out by guiding me on the right path to answer a plotting question. She helped me think about it in terms of loops and vectors so that they could later be plotted.
> 

**What did you like the best about today’s activities?**

> I liked doing the eye tracking for our project and leaning about how it works.
> 

> I liked the eye tracker activity the best.
> 

> The fieldtrip to the psych building
> 

> I really enjoyed the MRI portion of the tour as I got to see real images of the brain which fascinated me very much.
> 

**Comments about the field trip**

> I didn't realize how hard it is for researchers get good MRI data and how many people are involved in the process of running the actual experiment.
> 

> It was great because I learned about interests I did not realize I had.
> 

### Day 4

**What did you learn today?**

> I learned more about modeling data using R.
> 

> I learned how to use chi-square to do goodness of fit
> 

> How hard it is to make a main function actually work.
> 

> We learned how to parallel process with R.
> 

### Day 5

**What did you learn today?**

> I learned how to do a t test in r.
> 

> break up program into multiple functions
> 

> We learned how to use linear regressions with R.
> 

### Day 6

**What did you learn today?**

> Learned how to create animations in r
> 

> I learned how to animate data.
> 

> Miruna helped us learn to code.
> 

### Day 7

**What did you learn today?**

> I learned about proper formatting for presentations
> 

> how to give a good presentation
> 

> I liked the running through presentations and receiving advice.
> 

**Final comments**

> Choice Group I think that the group leader helped a lot and made it very clear what we would learn and what the topic was like. However, it was a little confusing on what we would put onto the slides and where the code we did could be useful, but we eventually figured it out.
> 

> Choice - Miruna and Professor Ian were both very helpful in teaching psychology, R, and proper presentational techniques. Learning R was fast but got better with more practice.
> 

**How do you think SI has impacted your future educational and career choices?**

> It taught me about research fields I never knew I was interested in.
> 

> I learned more about computer science and the applications or super computing. I also learned more about presenting and acquired more presentation skills.
> 

> Showed me how computer science can be involved with other career paths and I would like to have a mix of computational science and some other STEM field.
>
