---
layout: page
title: Response times in economic games
description: Can you predict whether someone will repeat their action or switch based on their response times in a similar situation?
img: assets/img/project_image_rt_in_economic_games.jpeg
importance: 5
category: Research
---

<img src="https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich

**Tools & Languages**: Javascript, HTML, CSS, R, stan

**Methods**: Bayesian Statistics, Clustering, Experiment Design, Linear and Logistic Mixed Effects Regressions, Model Comparison, Model Simulation and Model Fitting, Sequential Sampling Models, Game Theory

## 🔭 About

---

Can you predict whether someone will repeat their action or switch based on their response times in a similar situation?

A robust finding in the individual decision-making literature is the link between response times (RT) and strength of preference; decision times are longest when the utilities of the two options are close to each other. This relationship is a feature of sequential sampling models, such as the Drift Diffusion Model (DDM) ([you can read more about it here](/projects/4_project/)). Extending this understanding to interactive decision-making settings, we explore the applicability of this RT-preference relationship across four extensively studied game types in game theory: stag-hunt (SH), hawk-dove (HD), prisoner's dilemma (PD), and harmony (HG) games.


## 🔍 Research question

---

In previous work, I studied what response times reveal about preferences in a bargaining setting ([read more about it here](/projects/1_project/)). In this project, I wanted to extend this approach to other strategic settings. For this purpose, I used four types of games extensively studied in game theory:

- stag-hunt or coordination games (SH) in which cooperation can lead to a better outcome for both, but there's a risk of one player defecting for a more immediate benefit,
- hawk-dove or anti-coordination games (HD) in which there is a dilemma of choosing between a potentially higher individual payoff through aggression and the lower individual payoff through avoidance,
- prisoner's dilemma games (PD) in which there is a conflict between individual self-interest and mutual cooperation
- harmony games (HG) in which individuals benefit more from harmony or common actions than from conflict or competition.

## 👾 Methods

---

The experiment was a within-subject design. Subjects made a series of binary choices in 72 different games. There were 4 types of games:

- stag-hunt or coordination games (SH),
- hawk-dove or anti-coordination games (HD),
- prisoner's dilemma games (PD) and
- harmony games (HG).

<figure style="width: 100%; margin: 1em auto; text-align: center;">
  <div style="display: flex; gap: 12px; justify-content: center; align-items: center;">
    <img src="/assets/img/project_5_images/project_5_fig_1.png" alt="Example game 1" style="max-width: 30%; width: auto; height: auto;"/>
    <img src="/assets/img/project_5_images/project_5_fig_2.png" alt="Example game 2" style="max-width: 66%; width: auto; height: auto;"/>
  </div>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 1. Example games of each type.</strong></figcaption>
</figure>

We vary the temptation payoff (b) and the sucker payoff (c) to produce all 4 types of games. We keep payoff from top and left cell (a) and payoff from bottom and right cell (d) the same throughout. The following relative order of payoffs produces the 4 types of games:

- HG (c > d, a > b),
- HD (b > a > c > d),
- SH (a > b > d > c),
- PD (b > a > d > c).

For each subject, we randomize the order of the games. Between subjects, we randomize the placement of the 4 actions (top, bottom, left, right).

The games without a dominant strategy i.e. stag-hunt game (SH) and hawk-dove game (HD), vary in terms of the risk factor i.e. the probability that a player would have to attach to his partner playing the left action to be just indifferent to playing either action.

- In SH games, this is a measure of risk in playing the top or stag action. In HD games, this is a measure of risk in playing the hawk or bottom action.
- In SH games, for risk factor below 0.5, the payoff dominant equilibrium and the risk dominant equilibrium coincide, while for risk factor above 0.5 the payoff dominant equilibrium and the risk dominant equilibrium are different. In SH games, one action can give the player the highest payoff if their partner also chooses it and is called the efficient action. The other action gives the player a lower payoff and hence is called the inefficient action.

After the choice task, subjects completed a belief task. Subjects had to estimate the proportion of other subjects in the experiment who chose the left action in the same 72 different games as in the choice task.

<figure style="width: 90%; margin: 1em auto; text-align: center;">
  <div style="display: flex; gap: 12px; justify-content: center;">
    <img src="/assets/img/project_5_images/project_5_fig_3.png" alt="Task design A" style="width: 100%;"/>
  </div>
  <figcaption style="margin-top: 0.5em; font-size: 0.85em; color: #666; text-align: justify;"><strong>Figure 2. Task design. A.</strong> Game payoffs. (1) HG - Harmony Game (2) SH - Stag-Hunt Game (3) HD - Hawk-Dove Game (4) PD - Prisoner's Dilemma <strong>B.</strong> Game Risk Factor or the mixed strategy equilibrium probability of playing the top action.</figcaption>
</figure>

We measured in each game which action a participant chooses from the two available actions. We also measured the response time (RT) of each choice. For each game, we also measure subject's beliefs about how many other subjects in the study chose each action.


## 🐳  Results

---

Our findings reveal that subjects' choices not only conform to expected utility but also exhibit sensitivity to the difference in expected utility, as reflected in their RTs. Through model comparison, we demonstrate that the DDM outperforms a non-DDM model that treats choices and RTs as independent. Consequently, RTs serve as a valuable metric for inferring individuals' likelihood of repeating their previous actions.

## 🎯 Future directions

---

In the next phase, I plan to present participants with RT of potential partners in similar games, aiming to assess whether individuals can infer others' preferences based on RT and use this information to act accordingly. For instance, inferring a stronger preference for the safe action compared to the efficient action in a SH game from the longer RT in choosing the efficient action and using this knowledge to better coordinate.
