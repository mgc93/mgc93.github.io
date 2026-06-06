---
layout: page
title: Altruism and attention to social information
description: Can you use attention to social information to predict how much someone will give?
img: assets/img/project_image_altruism_attention.jpeg
importance: 7
category: Research
---

<img src="https://images.unsplash.com/photo-1435686858161-59da32dfd4b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich, Mariana Blanco

**Tools & Languages**: MATLAB, R, stan

**Methods**: Bayesian Statistics, Experiment Design, Eye-tracking, Linear and Logistic Mixed Effects Regressions, Model Comparison, Model Simulation and Model Fitting

## 🔭 About

---

Our decisions are often influenced by what those around us do, but we are also inclined to seek out similar others. Research on social influence has focused more on choice behavior and less on process data such as eye-movement patterns produced during the deliberation process. However, process data can reveal hidden information about a person's preferences in situations where choices alone might not be informative.

Using eye-tracking in the lab, we study the effect of social influence on altruism. We record participants' eye movements while inspecting others' previous choices before making their own giving decisions. We correlate the types of behavioral responses to social information with specific attention pattern and to test whether attention patterns alone can be used to infer giving behavior.

## 👾 Methods

---

**Task**

Subjects decided how many out of 100 tokens to give to an anonymous recipient. Subjects were paid based on how many tokens they decided to keep while the anonymous recipient received the shared tokens multiplied by an exchange rate. The experiment was divided into 7 blocks of 20 trials, presented in a random order. In each block, the mean exchange rate was one of the following: {0.25, 0.33, 0.50, 1, 2, 3, 4}. For example, if the exchange rate was 0.25, then four shared tokens would translate into one token for the receiver, while if the exchange rate was 4, then one shared token would translate into four tokens for the recipient.

<figure style="width: 90%; margin: 1em auto; text-align: center;">
  <img src="/assets/img/project_7_images/project_7_fig_1.png" alt="Figure 1" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 1. Experimental Design. Left:</strong> In each of seven 20-trial blocks (denoted by different colors), subjects decided how many of 100 tokens to give to an anonymous recipient using a horizontal slider (bottom left inset; red label = tokens given, green label = tokens received). On each trial, the recipient's payoff equaled the number of tokens given multiplied by a trial-specific exchange rate. Blocks were centered on different exchange rates, with trial-level rates drawn uniformly from narrow intervals around each mean. At the start of the experiment, subjects completed one decision at each of the seven exchange rates (gray block = no social information), plus one no-information trial at the start of each block. <strong>Right:</strong> During each block, decisions were made within a 3×3 grid. The subject's own decision cell (blue border) displayed only the slider for their current choice; the other eight cells displayed the responses of previous givers for the same exchange rate. Between blocks, the subject's cell changed location and a new set of givers—constituting a new descriptive norm (high vs. low generosity)—was shown. Eye movements were recorded throughout.</figcaption>
</figure>

**Procedure**

At the beginning of the experiment, subjects first made decisions without any social information. They made 7 such decisions, one for each exchange rate, in a random order. At the end of the experiment, one random trial was selected for payment. The subject received the number of tokens they decided to keep in that trial, plus what another subject in the experiment decided to give them, plus a show-up fee.

**Eye-tracking**

There was no time constraint for these decisions. Subjects made their decisions by clicking on the slider bar, at which point they automatically advanced to the next trial. Between decision screens, subjects had to fixate on a cross at the middle of the screen. We monitored subjects' eye movements during this experiment using an SR Research EyeLink 1000 Plus eye tracker.

**Learning**

Within a block, the identities of the other givers remained constant so to that the decision makers could learn about those givers' preferences. In this way, we could detect whether decision makers preferentially directed their gaze to givers with specific giving preferences. The order of the trials within a block was randomized between subjects.

**Social norm manipulation**

Each block, a new set of givers was shown. In this way, a different social norm prevailed in each block. The social information was pseudo-randomly chosen such that in some blocks a high norm was present, while in other blocks a low norm of giving was present in a way that was not highly correlated with the exchange rate.

Subjects were recruited from the Ohio State University economics subject pool. In total 99 subjects participated in the experiment.

**Attention Model**

To model the information search process, we use a modeling framework developed by Zhao et al. (2023) for analyzing the search process in decisions from large sets of items. The model focuses on the transition between cells, without taking into account how long each cell is fixated. Each transition is treated as a decision of what cell to look at next, excluding the current cell. The decision relies on attention scores assigned to each cell, which account for perceptual features such as distance from the current cell and social features such as the give amount. The model uses a softmax function of the attention score to pick which cell to look at next.


<figure style="width: 85%; margin: 1em auto; text-align: center;">
  <img src="/assets/img/project_7_images/project_7_fig_3.png" alt="Attention model" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 2. Attention model specification.</strong></figcaption>
</figure>

Attention scores are calculated using several features. One category of effects remains constant throughout the trial. These effects include measures of the cell location within the grid, as well as the current give amounts, and the standard deviation of the give amounts up to the current trial. A second category of Markov effects depends on the current cell. These include effects such as the distance to the current cell and reading order. The third category of effects depends on the entire history of fixations within the trial, such as whether a cell has already been looked at (return inhibition), and the give amounts in those looked-at cells (give-based return). Using these features, we account for both perceptual and social effects that could drive attention.

<figure style="width: 85%; margin: 1em auto; text-align: center;">
  <img src="/assets/img/project_7_images/project_7_fig_2.png" alt="Attention model features" style="width: 100%;"/>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 3. Example of spatial and social information features for the attention model.</strong></figcaption>
</figure>

Each feature in the model contributes to the attention score in a linear and independent way, with the exception of a memory maintenance feature. For example, we estimate how the give amount influences the attention score. If cells with higher give amounts are more likely to be examined, we expect a positive coefficient. If cells that are farther from the current cell are less likely to be examined, we expect a negative coefficient. The memory maintenance feature takes into account the fact that effects that depend on the history of fixations might fade over time. If the decay factor is less than one, the impacts of the history effects are scaled down over successive transitions. For instance, the tendency to avoid a previously looked-at cell might fade as that fixation fades farther into the past. With a decay factor of 0.8, a history effect would be reduced to 80% of its original strength after one transition, 64% after two transitions, 51% after three transitions, etc.

We apply this model separately to each subject's eye-tracking data. We use Bayesian model fitting techniques to fit this model to the gaze data and then interpret the resulting features that drive gaze transitions.

We also model the point at which subjects stop sampling information within a trial. The model computes the stopping probability using a logistic function based on the number of fixations so far, the give amount of the currently fixated social information, and the highest minimum give amount seen so far in the trial as well as the trial number within the block and the trial number within the experiment.

We then ran a ridge regression to predict giving in the first trial of each block before seeing the social information using the subject-level attention and stopping features in the rest of the block. We can then see different attention features are correalated with altruistic versus selfish participants.

## 🏁 Conclusions

---

Altruistic subjects looked at and returned to high givers. In contrast, selfish subjects only attended to high givers when giving was cheap, continued searching after encountering high givers, and increasingly disengaged from social information as the experiment progressed. These findings reveal that people are aware of the norm but strategically seek information that justifies their preferences. Our results demonstrate that attention dynamics can identify underlying prosocial preferences and predict who will respond to norm-based interventions.
