---
layout: page
title: Learned Impatience
description: Do people discount delayed reward information relative to immediate reward information, even if the timing of the information has no impact on the delivery of the reward?
img: assets/img/project_image_learned_impatience.jpeg
importance: 2
category: Research and Teaching
giscus_comments: false
---
 
 <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>
 

## 🔭 About

---

Often choices involve immediate as well as delayed rewards. If immediate rewards are preferentially processed compared to delayed rewards, behavior will be suboptimal. Overeating, overspending, or procrastinating are examples of such behavior.

To study this effect in the lab, we proposed a novel task in which subjects faced choices between stimuli with lower total rewards, but higher immediate rewards and stimuli with higher total rewards, but lower immediate rewards. Subjects will be biased if they tend to maximize immediate rewards instead of total rewards. Presenting immediate reward feedback from the current choice and the delayed reward feedback from the previous choice simultaneously allowed us to study to what degree attention can explain this phenomenon.

## 🔍 Research question

---

Do people discount **delayed reward** information relative to **immediate reward** information, even if the timing of the information has no impact on the delivery of the reward?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" width="600px" %}
    </div>
</div>


Imagine you’re in a situation where you have to decide which action to take. For instance eat cake ( 🍰 ) or an apple ( 🍎 ).

Usually actions have multiple consequences - some immediate, others delayed.

- If you eat the apple ( 🍎 ) now - it might not be as pleasurable as the cake, but you save some calories from your diet.
- If you eat the cake ( 🍰 ) - you get the small reward now, but you might regret it later.

Next time when you’re in the same situation, you’ll consider what to do based on your previous experience. Will the ordering of the immediate and delayed rewards affect your decision?

Even though in this case, you would be better off choosing the healthy option ( 🍎 ) now since you get a bigger **total** reward, you might instead choose the unhealthy option ( 🍰 ) because the **immediate** reward is higher. Then you would be **overweighting immediate consequences**.

Examples of suboptimal behaviors like this include: overeating, overspending, not working hard enough, exercising too little, not saving enough and so on.

In this project, we study this kind of learning situation in a controlled setting. To study this effect in the lab, we proposed a novel task in which subjects faced choices between stimuli with lower total rewards, but higher immediate rewards and stimuli with higher total rewards, but lower immediate rewards. Subjects will be biased if they tend to maximize immediate rewards instead of total rewards. Presenting immediate reward feedback from the current choice and the delayed reward feedback from the previous choice simultaneously allowed us to study to what degree attention can explain this phenomenon. 

## 👾 Methods

---

**Task**

In the experiment, subjects were faced with choices between two abstract images in each round or trial. Each option had two reward points, one immediate and one delayed. The goal was to accumulate as many points as possible by choosing the images with the higher total rewards since the points were transformed into money that was paid at the end of the experiment. The points were shown on top of the chosen image on the feedback screen (Figure 1). The immediate feedback was presented simultaneously with the delayed feedback from the previous choice. 

In some trials, subjects faced a choice between an option with a higher immediate reward but a lower total reward than the alternative. Choosing the former option is a mistake, but one that is consistent with discounting delayed reward information. We also measured subjects’ eye movements during the task which allowed us to determine whether any discounting could be attributed to biased visual attention.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="600px" %}
    </div>
</div>
<div class="caption">
    Figure 1. The choice stage is illustrated on the first and third screens. The feedback stage is illustrated on the second and fourth screens. The top image and number illustrate the chosen stimuli on the current trial and its immediate payoff, while the bottom image and the number illustrate the chosen stimuli on the previous trial and its delayed payoff. A randomly generated time interval between two and six seconds was added after each choice and feedback screen. Subjects had a maximum of three seconds to make their choice. If no choice was made within this time, one stimulus was chosen randomly by the computer. The feedback screen was presented for two seconds.
</div>

**Design**

Stimuli: 6 abstract art images

Trials: 105 binary choices

Each stimulus had: \<immediate reward, delayed reward> + small random number from \<{0,1,2,3}, {0,1,2,3}> to make learning more difficult.

Options can be either:

- rising: immediate < delayed
- falling: immediate > delayed

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 2. Between-subjects conditions in the experiment and each stimulus reward within conditions.
</div>


Goal: collect as many points as possible by choosing the stimuli with the highest total payoffs

Potential bias: maximize immediate instead of total rewards

Subjects: 90 (behavior), 75 (eye-tracking), 89 (modeling)

Eye-tracking: online using webcam eye-tracking with the Webgazer library in jsPsych (a javascript based library for psychology experiments that you can customize).

**More about webcam eye-tracking**

Because I collected data during the pandemic, we decided to use online webcam eye-tracking. The library that made this possible was developed by [Papoutsaki, Sangkloy, Laskey, Daskalova, Huang and Hays (2016)](https://webgazer.cs.brown.edu/) and was incorporated into jsPsych by one of my colleagues ([Yang and Krajbich, 2023](https://www.cambridge.org/core/journals/judgment-and-decision-making/article/webcambased-online-eyetracking-for-behavioral-research/B726E77B68A76577F9BC6BB8F1EBC6E4)). I implemented it in my own code for the task. Although the precision is much lower than with lab eye-tracking, it is useful when showing few stimuli on the screen (in this case 2 images).

**Timeline of the experiment**

Subjects did a short initial eye-tracking calibration and we exclude them if they fail. Then they read the instructions and answered some questions to make sure they understood them. They then did a longer eye-tracking calibration and go through the task and at the end answer a few memory surveys. During the task we do some additional eye-tracking validations and exclude subjects who fail 2 out of the 4 validations from the eye-tracking analysis to preserve good data quality.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Timeline of the experiment. 
</div>


## 🐳  Results

---

### 🍪 Behavioral Results

Subjects were able to learn the value of the stimuli as evidenced by overall accuracy levels above chance (M = 0.72, SD = 0.45).

They were also more likely to choose higher total value stimuli (tested using mixed effect logistic regression with total reward as fixed effect, choice in each trial as the outcome variable and random intercept and slope at subject level; estimate for the fixed effect of total reward was 0.30, SE = 0.02, 95% CI = \[0.26, 0.33], p < .001).

For the same total reward level, the option with the higher immediate reward was more likely to be chosen compared with the option with the lower immediate reward (Figure 4). 

To test for the presence of this learning bias, we used a mixed effects logistic regression with outcome variable the choice of right stimulus in a trial and as predictors the difference between right and left option in the experienced average immediate reward and delayed reward. Both coefficients were significantly positive with the one tracking immediate reward being higher than the one tracking delayed reward (Figure 5; b = 0.37, SE = 0.02, 95% CI = \[0.32, 0.42], p < .001; b = 0.27, SE = 0.02, 95% CI = \[0.22, 0.32], p < .001). A Likelihood Ratio Test comparing whether the coefficient of the immediate reward and the delayed reward were different was significant (X2 (4, N = 90) = 257.87, p < .001)).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 4. Behavioral bias across subjects. Probability of choosing a stimulus given that it is in the choice set as a function of the total payoff of the stimulus for each condition. For the same total value of the option, the stimulus with the higher immediate reward (first number) is more likely to be chosen compared with the stimulus with the lower immediate reward (second number). There were two conditions (red and blue) with two separate sets of options. For each total option value, one condition’s option had the reverse temporal order of rewards compared to the other condition.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="400px" %}
    </div>
</div>
<div class="caption">
    Figure 5. Behavioral results. A. Probability of choosing the right stimulus from a mixed effects logistic regression with difference between right and left option in the immediate and delayed average experienced rewards. Subjects put more weight on the immediate rewards than the delayed rewards.
</div>

To test whether this behavioral bias increased over the course of the experiment, we added interaction coefficients with trial number to the previous mixed effects logistic regression. The interaction of trial number and experienced immediate reward was positive and significant (b = 0.34, SE = 0.04, 95% CI = \[0.26, 0.43], p < .001), while the coefficient for the interaction of trial number and experienced delayed reward was also positive (b = 0.19, SE = 0.04, 95% CI = \[0.11, 0.26], p < .001), but was smaller and significantly different (X2(4, N = 90) = 139.11, p < .001).

### ⌚Response Time Results

Response times result also show evidence consistent with the behavioral bias. First, in a lot of lab experiments, RT decreases with absolute value difference and decreases with overall value. This is also the case in this experiment (Figure 6).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 6. (left) RT decreases with absolute value difference, though is slightly lower when the two options are identical, i.e. value difference = 0. (right) RT also decreases with overall value.
</div>

Moreover, in this experiment we can look separately of these effect on RT for immediate and delayed rewards separately to see if RT is more responsive to immediate compared to delayed rewards, which would be in line with the behavioral bias present in choices.

Both immediate and delayed value differences decrease RT (Figure 7, immediate effect > delayed effect: X2(8, N = 90) = 361, p<.001). However, only immediate overall value decreases RT (Figure 8).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 7. (left) RT decreases with absolute value difference for immediate and (right) for delayed rewards. The immediate effect is larger than the delayed effect.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 8. (left) RT decreases with overall immediate value. (right) RT doesn’t decrease with overall delayed value.
</div>

Therefore, the bias to choose based on immediate rewards rather than consider immediate and delayed rewards equally seems to also be present when analyzing subjects’ RTs.

### 📐 Modeling Results

We assume that this preference for immediate feedback manifests through reinforcement learning. Neurophysiology studies have shown that delaying a reward, even by a few seconds, reduces the response of dopamine neurons and neuroimaging studies have confirmed a decreased hemodynamic response to delayed rewards in the ventral striatum. Neuroimaging studies have also shown that the Hippocampus is selectively sensitive to delayed feedback, while the Ventral Striatum is selectively sensitive to immediate feedback and a double dissociation in learning exists between amnesiac and Parkinson’s patients.  

**Model**

We fit a modified Reinforcement Learning Drift Diffusion Model to the data and confirmed that subjects generally learned faster for immediate rewards compared to delayed rewards. This type of model combines a Reinforcement Learning model based on the Rescorla-Wagner rule for the value of each stimulus with a Drift Diffusion Model that accounts for both choices and RTs. Instead of using the logistic function to transform values into action probabilities, we use the DDM model to predict not only choices, but also response times (see project on [cognitive modeling in negotiation](https://www.notion.so/How-cognitive-modeling-can-identify-response-biases-in-negotiations-464e9b02091a4d3285f23f11ac212e19?pvs=21) for additional explanation about the DDM).

Given that each stimulus (s) was associated with two rewards, one immediate and one delayed ($r^{I},r^{D}$ ), the total value for a stimulus was the sum of the predicted values for the immediate value and the delayed value ($V_{k}(s_{k})$). The two values generate two different prediction errors, one for the immediate reward and one for the delayed reward on each trial ($k$). The learning rate controls ($\alpha^{I}, \alpha^{D}$) how much expectations about the value of the stimuli are updated. The predicted value of a stimulus is the total of the immediate value and the delayed value.

The priors for the parameters of interest were chosen to be vague to have minimal influence on the posterior. Both learning rates and the weight of the delayed reward have beta distributed priors with shape parameters equal to one.

$$
V^{I}_{k+1}(s_{k}) = V^{I}_{k}(s_{k}) + \alpha^{I}(r^{I}_{k} - V^{I}_{k}(s_{k})
$$

$$
V^{D}_{k+1}(s_{k}) = V^{D}_{k}(s_{k}) + \alpha^{D}(r^{D}_{k} - V^{D}_{k}(s_{k})
$$

$$
V_{k}(s_{k}) = V^{I}_{k}(s_{k}) + V^{D}_{k}(s_{k})
$$

$$
v \sim d(V_{k,correct(s_{k})}-V_{k,incorrect(s_{k})})
$$

$$
RT_{k,correct} \sim Wiener(a, t, z = 0.5, v)
$$

$$
RT_{k,incorrect} \sim Wiener(a,t,1-z = 0.5,-v)
$$

We found higher learning rates for immediate rewards than delayed rewards, using a paired t-test (*t*(89) = 2.70, p = 0.008).

**Fitting procedure**

The software Stan was used to find the best fitting parameters for each subject separately. Estimates of the posteriors for each parameter were obtained using Monte-Carlo Markov Chain sampling method. For each subject, four chains were run in parallel. To construct posterior distributions, each chain was sampled for 10,000 iterations including an initial burn-in period of 5,000 samples. The potential scale reduction factor (PSRF; Brooks & Gelman, 1998) or R-hat is used to indicate chain convergence. This method compares the between and within chain estimates for model parameters. A value near smaller than 1.05 indicates convergence. To check stability of the estimates, effective sample size is used (ESS). ESS is the effective number of steps in the MCMC chain after the autocorrelation is factored out (Kruschke, 2020).

**Model validation**

To check whether the model mimics the data well, a posterior predictive check was conducted. For each subject, the mean posterior estimate was used for each parameter to generate 100 simulations of choices in the experiment using the actual experimental trials. 

We compute choice accuracy for the experiment, as well as choice accuracy for each possible choice set type in the experiment. The choice set could be congruent (worse option rising, better option falling), incongruent (worse option falling, better option rising), both falling options, both rising options and same total payoff. The model can account for the choice data quite well (Figure 9).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_10.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 9. A.Average accuracy over trials across subjects in data and the simulated data using the mean posterior values of each subject for each parameter and model. B. Average accuracy over each block of trials across subjects in the data and the simulated data for each type of choice set separately.
</div>


### 👀 Eye-tracking Results

Turning to the eye tracking data, subjects were more likely to dwell on the immediate reward when controlling for trial level prediction errors and expected values for immediate and delayed rewards (mixed effects regression with outcome variable difference in proportion of dwell time to immediate minus delayed reward within a trial and as predictors absolute prediction error for immediate and delayed rewards, expected value for immediate and delayed rewards and random intercept at subject level and trial level, the fixed effect for the intercept was 0.095, S.E. = 0.035, 95% CI = \[0.026, 0.163], p = .007). However, this effect did not correlate with the behavioral bias across subjects (immediate reward r(72) = -0.097, p = .41, delayed reward r(72) = 0.046, p = .70 for correlation between subject level coefficients for immediate or delayed reward and subject level coefficients for the intercept for dwell time advantage for immediate versus delayed reward). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_11.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 10. Attention to Feedback within a Trial. Dwell Bin is the time point within a trial in steps of 250 ms e.g. [0, 250), [250, 500), [500, 750) etc. Red dots and bars represent mean proportion dwell to immediate reward within the respective time bin and 95% bootstrapped confidence intervals. Black dots and lines are subject level effects.
</div>


## 🏁 Conclusions

---

Our results show that people are biased towards options that yield immediate reward information. Visual attention appears to play a role in this phenomenon, though this result was only observed in the aggregate, not at the subject level. This work sheds new light on the fundamental problem of temporal discounting, indicating that it is, at least in part, an issue of reward information and not just reward delivery.

## 🌟 Outcomes

---

Won a $2,250 grant for the project: Decision Sciences Collaborative Research Grant at the Ohio State University, 2020.

Presented the project at the [Interdisciplinary Symposium in Decision Neuroscience, 2023](https://www.fox.temple.edu/faculty-research/institutes-centers/center-applied-research-decision-making/interdisciplinary-symposium-decision-neuroscience-2023).

Presented a poster of the project at EADM Summer School on Learning and Decision Making, 2022.
