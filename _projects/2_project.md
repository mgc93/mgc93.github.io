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
 
**Collaborators**: David Poensgen, Ian Krajbich

**Programming**: CSS, HTML, Javascript, MATLAB, R, stan

**Skills**: Bayesian Statistics, Experiment, Linear and Logistic Mixed Effects Regressions, Model Comparison, Model Simulation and Model Fitting, Reinforcement Learning Models, Sequential Sampling Models, Webcam Eye-tracking


## 🔭 About

---

If immediate rewards are preferentially processed compared to delayed rewards, the learning process may not converge to the true expected value and people may sub-optimally prefer actions that yield larger immediate rewards but lower total rewards. Examples of such behavior include overeating, overspending, not working hard enough, exercising too little, not saving enough and so on.

Here, we used behavioral and eye-tracking experiments to study how people learn when their choices yield both immediate and delayed reward information. Subjects faced a series of binary choices between stimuli that yielded two rewards. Importantly, the rewards themselves were all delivered at the end of the study so there was no reason to weight immediate and delayed rewards differently. In some trials, the stimulus with the larger total reward had a smaller immediate reward. Overweighting immediate rewards could lead to errors in these cases.

We modeled learning in this task using an extension of a simple Reinforcement Learning model, embedded in a dynamic choice model testing whether our subjects learned from immediate rewards at a higher rate than from delayed rewards. Using eye-tracking, we also tested whether our subjects preferentially gazed at immediate rewards compared to delayed rewards. We correlated the individual learning rate parameters to the proportion of dwell time difference spent on either type of reward to test whether attention could explain any differences in learning rates. We also investigated whether any learning biases were linked to distorted declarative memories for those stimuli. Finally, we also tested whether any learning biases were related to working memory or intertemporal preferences.    
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

In this project, we study this kind of learning situation in a controlled setting.

## 👾 Methods

---

**Experimental Design**

Study 1 was only behavioral while Study 2 included webcam eye-tracking.

Stimuli: 6 abstract art images

Trials: 105 binary choices

Each stimulus had: (immediate reward, delayed reward) + small random number from {0,1,2,3}, {0,1,2,3} to make learning more difficult.

Options can be either:

- rising: immediate < delayed
- falling: immediate > delayed

Goal: collect as many points as possible by choosing the stimuli with the highest total payoffs

Potential bias: maximize immediate instead of total rewards

Eye-tracking: online using webcam eye-tracking with the Webgazer library in jsPsych (a javascript based library for psychology experiments that you can customize).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="50%" %}
    </div>
</div>
<div class="caption">
    Figure 1. Task. Each trial, subjects chose between two patterned discs. After each choice, subjects saw the immediate reward in the center of their chosen disc. Below (or above) that, they saw the delayed reward in the center of the chosen disc from the previous trial.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" width="50%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 2. Experimental design. For each subject/block there were six unique stimuli, colors in Study 1 or patterns in Study 2. Each stimulus had a total reward value ranging from 8 to 18, in steps of 2. For each total reward value there was an ascending version and a descending version based on whether the immediate reward was smaller or larger than the delayed reward, respectively. The component rewards were set by dividing the total reward in half, adding 2 for the larger reward, and subtracting 2 for the smaller reward. For each total reward value, Group 1 saw the descending or ascending version and Group 2 saw the opposite. A small random number was added to each underlying reward to make learning more difficult. Assignment of colors and patterns to total rewards was randomized by subject.
</div>


**More about webcam eye-tracking**

Because I collected data during the pandemic, we decided to use online webcam eye-tracking. The library that made this possible was developed by [Papoutsaki, Sangkloy, Laskey, Daskalova, Huang and Hays (2016)](https://webgazer.cs.brown.edu/) and was incorporated into jsPsych by one of my colleagues ([Yang and Krajbich, 2023](https://www.cambridge.org/core/journals/judgment-and-decision-making/article/webcambased-online-eyetracking-for-behavioral-research/B726E77B68A76577F9BC6BB8F1EBC6E4)). I implemented it in my own code for the task. Although the precision is much lower than with lab eye-tracking, it is useful when showing few stimuli on the screen (in this case 2 images).

**Timeline of the experiment**

Subjects did a short initial eye-tracking calibration and we exclude them if they fail. Then they read the instructions and answered some questions to make sure they understood them. They then did a longer eye-tracking calibration and go through the task and at the end answer a few memory surveys. During the task we do some additional eye-tracking validations and exclude subjects who fail 2 out of the 4 validations from the eye-tracking analysis to preserve good data quality.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" width="100%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 3. Timeline of the experiment.
</div>


**Sample size**

226 subjects learned the values associated with 6 stimuli, represented by colors in Study 1 (Colors Task; N =  102) and patterns in Study 2 (Patterns Task; N = 124; Fig. 1). 

We excluded subjects whose accuracy on trials with both options ascending or descending was below 60 percent. We excluded trials in which the two options were identical as there was no (in)correct answer on such trials. We also excluded the first block of trials (21 trials) since subjects had very little information about the stimuli during that block. Finally, we also excluded trials in which subjects did not choose in time.

Subjects: 

- Study 1 (colors): 87 (behavior), 87 (modeling)
- Study 2 (patterns): 90 (behavior), 75 (eye-tracking), 89 (modeling)

## 🐳  Results

---

### 🍪 Behavioral Results

SWe found that subjects displayed a learning bias in favor of immediate rewards. Subjects were more likely to choose a descending option than an ascending option, were more likely to make an error when the ascending option was the correct choice, and put more weight on the immediate feedback than the delayed feedback. Moreover, this bias increased over the course of the experiment.

Looking at subjects’ choices, we found that they put more weight on immediate rewards compared to delayed rewards.  For the same total reward, the option with the higher immediate reward was more likely to be chosen than its counterpart with the lower immediate reward (Fig. 4A,B). 

We confirmed these results using regressions of *Choose Left* on differences in the average immediate, delayed, and total rewards between the left and right options, as well as whether the options were ascending or descending.  We used mixed-effects regressions with random intercepts and slopes at the subject level.  For each trial we calculated the relevant average rewards seen by the subject up to that point in the experiment.  Choosing the left option was more likely when it was descending as opposed to ascending (Study 1: *p < .001*; Study 2: *p < .017*; Fig. 4D) or when the right option was ascending rather than descending (Study 1: *p < .001*; Study 2: *p < .001*; Fig. 4D), controlling for the difference in total reward.  Subjects put larger weights on immediate rewards than delayed rewards. When regressing choice on the immediate and delayed reward differences, the weight on immediate was higher than on delayed (Study 1: *β Immediate* = 2*.*18*,* 95%*CI* = [1*.*97*,*2*.*40]*, β Delayed* = 0*.*90 [0*.*71*,*1*.*10]; Study 2: *β Immediate* = 1*.*54 [1*.*33*,*1*.*75]*, β Delayed* = 1*.*11 [0*.*91*,*1*.*31]; Fig. 4C). A Likelihood Ratio Test comparing the immediate and delayed coefficients revealed significant differences (Study 1: *χ*2(4*, N* = 87) = 860*.*74*, p < .001*; Study 2: *χ*2(4*, N* = 90) = 350*.*1*, p < .001*).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 4. Choice behavior. A,B Probability of choosing an option as a function of the option’s total reward. A. Study 1 (colors). B. Study 2 (patterns). C. Probability of choosing the left option as a function of the difference in the experienced immediate and delayed rewards, based on a mixed-effects logistic regression. Dots represent subject level effects and bars represent standard errors of the fixed effects. D. Probability of choosing the left option as a function of whether the left and right options were descending or ascending. Dots represent subject level averages and bars represent standard errors across subjects.
</div>

The bias to overweight immediate rewards over delayed did not decrease as the experiment progressed; instead it increased (Fig. 5).  Building on the previous regression, we included interaction effects between trial number and the immediate/delayed rewards.  The interaction of trial number and immediate reward was positive and significant (Study 1: *β Immediate*:*Trial* = 0*.*38*,* 95%*CI* = [0*.*28*,*0*.*49]*, p < .001*; Study 2: *β Immediate*:*Trial* = 0*.*34*,* 95%*CI* = [0*.*26*,*0*.*43]*, p < .001*), while the coefficient for the interaction of trial number and delayed reward was also significantly positive but smaller (Study 1: *β Delayed*:*Trial* = 0*.*12*,* 95%*CI* = [0*.*04*,*0*.*20]*, p* = *.*003; Study 2: *β Delayed*:*Trial* = 0*.*19*,* 95%*CI* = [0*.*11*,*0*.*26]*, p < .001*). A Likelihood Ratio Test comparing the immediate and delayed interaction coefficients revealed that the increase in the delayed coefficient over time was significantly smaller than the increase in the immediate coefficient over time (Study 1: *χ*2(4*, N* = 87) = 860.74*, p < .001*; Study 2: *χ*2(4*, N* = 90) = 350.1*, p < .001*). This indicates that the immediacy bias increased over the course of the experiment.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="100%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 5. Behavioral bias over time. Behavioral bias increases over time. Probability of choosing a stimulus given it is in the choice set as a function of the total reward of the stimulus. Dots represent subject level averages and bars represent standard errors across subjects.
</div>

### ⌚Response Time Results

The learning bias was also evident in subjects’ response times (RT). We know from past work that people make faster choices when there is a larger absolute value difference (|VD|) between their options or a larger overall (summed) value (OV) of their options. Since subjects’ choices were more influenced by immediate than delayed rewards, we expected to analogously see more influence of immediate than delayed rewards on RT. This was indeed the case. Immediate rewards had a larger effect on RT than delayed rewards for both |VD| and OV. We regressed log(RT) on |VD| and OV, either in total rewards, or separated into immediate and delayed rewards.  Larger total |VD| and larger total OV decreased RT (Study 1: β VD = −0.05 \[−0.07,−0.04], p < .001, β OV = −0.06 \[−0.08,−0.05], p < .001; Study 2: β VD = −0.04 \[−0.05,−0.03], p < .001, β OV = −0.05 \[−0.06,−0.04], p < .001; Fig. 6A,D). 

However, when we separated reward into immediate and delayed components, we found that immediate but not delayed |VD| significantly decreased RT (Study 1: β VD Immediate = −0.04 \[−0.06,−0.03], p < .001; β VD Delayed = −0.002 \[−0.01,0.01], p = .786; Study 2: β VD Immediate = −0.02 \[−0.03,−0.01], p < .001; β VD Delayed = −0.01 \[-0.02,0.00], p = .056; Fig. 6B,C). The difference between immediate and delayed effects was significant (Study 1: χ2(6, N = 87) = 114.19, p < .001; Study 2: χ2(6, N = 90) = 82.67, p < .001). 

We also found that immediate OV had a larger effect on RT than delayed OV (Study 1: β OV Immediate = −0.07 \[−0.09,−0.05], p < .001; β OV Delayed = −0.03 \[−0.04,−0.01], p < .001; Study 2: β OV Immediate = −0.04 \[−0.05,−0.03], p < .001; β OV Delayed = −0.03 \[−0.04,−0.02], p < .001; Difference: Study 1: χ2(6, N = 87) = 95.29, p < .001; Study 2: χ2(6, N = 90) = 52.07, p < .001; Fig. 6C,F).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-left">
    Figure 6. Value difference and overall value effects on response time (RT). A,B,C Absolute value difference (|VD|) effects on RT for each study. A. RT decreases with total |VD|. B. RT decreases with immediate |VD|. C. RT does not decrease with delayed |VD|. D,E,F Overall value (OV) effects on RT for each study. D. RT decreases with total OV. E. RT decreases with immediate OV. F. RT weakly decreases with delayed OV. Dots and bars represent mean and standard errors across subjects.
</div>

### 📐 Modeling Results

**Model**

We sought to capture the relative effect of immediate and delayed rewards using a formal learning model. To do so, we employed an RL model embedded in a drift diffusion model (DDM), but allowed different learning rates for immediate and delayed rewards.

We fitted a reinforcement learning drift diffusion model (RLDDM). This type of model combines a Reinforcement Learning model based on the Rescorla-Wagner rule for the value of each stimulus with a Drift Diffusion Model that accounts for both choices and RTs. Instead of using the logistic function to transform values into action probabilities, we use the DDM model to predict not only choices, but also response times (see project on [cognitive modeling in negotiation](How%20cognitive%20modeling%20can%20identify%20response%20biase%20464e9b02091a4d3285f23f11ac212e19.md) for additional explanation about the DDM).

Given that each stimulus (s) was associated with two rewards, one immediate and one delayed ($r^{I},r^{D}$ ), the total value for a stimulus was the sum of the predicted values for the immediate value and the delayed value ($V_{k}(s_{k})$). The two values generate two different prediction errors, one for the immediate reward and one for the delayed reward on each trial ($k$). The learning rate controls ($\alpha^{I}, \alpha^{D}$) how much expectations about the value of the stimuli are updated. The predicted value of a stimulus is the total of the immediate value and the delayed value. In order to determine if learning occurred at different rates for the immediate and delayed rewards, we also fitted a restricted model in which the learning rate was the same for both rewards ($\alpha^{I} = \alpha^{D} = \alpha$).

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

**Fitting procedure**

The software Stan was used to find the best fitting parameters for each subject separately. Estimates of the posteriors for each parameter were obtained using Monte-Carlo Markov Chain sampling method. For each subject, four chains were run in parallel. To construct posterior distributions, each chain was sampled for 10,000 iterations including an initial burn-in period of 5,000 samples. The potential scale reduction factor (PSRF; Brooks & Gelman, 1998) or R-hat is used to indicate chain convergence. This method compares the between and within chain estimates for model parameters. A value near smaller than 1.05 indicates convergence. To check stability of the estimates, effective sample size is used (ESS). ESS is the effective number of steps in the MCMC chain after the autocorrelation is factored out (Kruschke, 2020).

**Model validation**

To check whether the model mimics the data well, a posterior predictive check was conducted. For each subject, the mean posterior estimate was used for each parameter to generate 100 simulations of choices in the experiment using the actual experimental trials. 

We compute choice accuracy for the experiment, as well as choice accuracy for each possible choice set type in the experiment. The choice set could be congruent (worse option rising, better option falling), incongruent (worse option falling, better option rising), both falling options, both rising options and same total payoff. The model can account for the choice data quite well (Fig. 7).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_8.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 7. Model parameters and fits. A,B Average choice accuracy in the data and in the model simulations using the mean posterior values across trials and subjects. A. Experiment level. B. Block level for each type of trial. Incongruent choice sets: worse option descending, better option ascending, Congruent choice sets: worse option ascending, better option descending.
</div>

**Model Results**

Consistent with the model-free analyses, we found higher learning rates for immediate rewards than for delayed rewards. This was true for both studies (Study 1: *M Immediate* = 0*.*27*, M Delayed* = 0*.*14*, t*(86) = 6*.*97*,* 95%*CI* = [0*.*09*,*0*.*16]*, p < .001*; Study 2: *M Immediate* = 0*.*23*, M Delayed* = 0*.*18*, t*(88) = 2*.*75*,* 95%*CI* = [0*.*01*,*0*.*09]*, p* = *.*007).

**Model comparison**

According to subject-level WAIC, the model with differential learning provides a better fit for 48% of our subjects while the model with the same learning rate for both types of rewards fit 52% of our subjects better. Thus, about half of our subjects were better described by two different learning rates.

### 👀 Eye-tracking Results

In Study 2 we collected eye-tracking data while subjects made their choices. We sought to test whether subjects allocated more gaze to the immediate or delayed rewards, and whether the relative fraction of dwell time on the two rewards predicted the learning bias. We observed a tendency to dwell longer on the immediate rewards compared to the delayed rewards, but this gaze bias was not correlated with the behavioral bias. On the whole, subjects tended to look more at the immediate reward compared to the delayed reward (Fig. 8). Using subject-level regressions, we found that 21 out of 75 subjects had a significant gaze bias towards the immediate reward and 14 out of 75 had a significant gaze bias towards the delayed reward.

Surprisingly, gaze biases did not positively correlate with choice biases. This was true both when using the behavioral bias calculated from the regressions (Dwell Proportion: *r*(73) = *−.*09*, p* = *.*425; First Fixation: *r*(73) = *−.*24*, p* = *.*042) and when using the learning rates from the RL model (Dwell Proportion: *r*(73) = *−.*20*, p* = *.*086; First Fixation: *r*(73) = *−.*22*, p* = *.*064). If anything, the correlation was in the opposite direction to what we expected.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_images/project_2_fig_9.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 8. The link between gaze and behavior. The mean dwell proportion to immediate rewards within a trial for 250 ms time bins across the trial. Black dots represent each subject within a time bin and red bars are standard errors across subjects.
</div>


## 🏁 Conclusions

---

In this article we found that people sub-optimally overweight immediate reward feedback relative to delayed reward feedback. In our task, subjects merely had to add together two (small) numbers to determine the total reward from their choice.  And yet, subjects put between 1.4 and 2.4 times as much weight on the immediate rewards compared to the delayed rewards, roughly equivalent to counting the immediate rewards twice.  This resulted in 12 to 30% increases in errors when the option with the smaller immediate reward was the wrong choice. Surprisingly, this immediacy bias only grew stronger as the experiment progressed.  At the same time, we also observed an attentional bias towards immediate feedback – people spend about 53% of the time looking at the immediate feedback. However, this gaze bias does not correlate with the choice bias.  We also found some suggestive evidence that this immediacy bias may be linked to impatience and working-memory deficits.  

In summary, we’ve shown that people show a bias to learn more from immediate feedback than even slightly delayed feedback.  This has major implications for how we evaluate people’s choices.  As opposed to ascribing impatient behavior to an unwillingness to wait, we argue that impatience may be due to delayed rewards appearing smaller than they actually are, perhaps due to inattention to delayed feedback.  This may explain why impatience and temporal inconsistency are such pervasive problems.   

## 🌟 Outcomes

---

Won a $2,250 grant for the project: Decision Sciences Collaborative Research Grant at the Ohio State University, 2020.

Presented the project at the [Interdisciplinary Symposium in Decision Neuroscience, 2023](https://www.fox.temple.edu/faculty-research/institutes-centers/center-applied-research-decision-making/interdisciplinary-symposium-decision-neuroscience-2023).

Presented a poster of the project at EADM Summer School on Learning and Decision Making, 2022.
