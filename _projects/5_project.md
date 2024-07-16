---
layout: page
title: Response times in economic games
description: Can you predict whether someone will repeat their action or switch based on their response times in a similar situation?
img: assets/img/project_image_rt_in_economic_games.jpeg
importance: 5
category: Research and Teaching
---

<img src="https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Untitled" width="700"/>

**Collaborators**: Ian Krajbich

**Programming**: CSS, HTML, Javascript, R, stan

**Skills**: Bayesian Statistics, Clustering, Experiment, Linear and Logistic Mixed Effects Regressions, Model Comparison, Model Simulation and Model Fitting, Sequential Sampling Models

## 🔭 About

---

Can you predict whether someone will repeat their action or switch based on their response times in a similar situation?

A robust finding in the individual decision-making literature is the link between response times (RT) and strength of preference; decision times are longest when the utilities of the two options are close to each other. This relationship is a feature of sequential sampling models, such as the Drift Diffusion Model (DDM) ([you can read more about it here](How%20cognitive%20modeling%20can%20identify%20response%20biase%20464e9b02091a4d3285f23f11ac212e19.md)). Extending this understanding to interactive decision-making settings, we explore the applicability of this RT-preference relationship across four extensively studied game types in game theory: stag-hunt (SH), hawk-dove (HD), prisoner’s dilemma (PD), and harmony (HG) games.

Our findings reveal that subjects’ choices not only conform to expected utility but also exhibit sensitivity to the difference in expected utility, as reflected in their RTs. Through model comparison, we demonstrate that the DDM outperforms a non-DDM model that treats choices and RTs as independent. Consequently, RTs serve as a valuable metric for inferring individuals’ likelihood of repeating their previous actions. 

## 🔍 Research question

---

In previous work, I studied what response times reveal about preferences in a bargaining setting ([read more about it here](Response%20time%20in%20negotiation%20on%20eBay%20a27fa8e8fcd7445fad8c146f6cc122cf.md)). In this project, I wanted to extend this approach to other strategic settings. For this purpose, I used four types of games extensively studied in game theory: 

- stag-hunt or coordination games (SH) in which cooperation can lead to a better outcome for both, but there’s a risk of one player defecting for a more immediate benefit,
- hawk-dove or anti-coordination games (HD) in which there is a dilemma of choosing between a potentially higher individual payoff through aggression and the lower individual payoff through avoidance,
- prisoner’s dilemma games (PD) in which there is a conflict between individual self-interest and mutual cooperation
- harmony games (HG) in which individuals benefit more from harmony or common actions than from conflict or competition.

## 👾 Methods

---

The experiment was a within-subject design. Subjects made a series of binary choices in 72 different games. There were 4 types of games: 

- stag-hunt or coordination games (SH),
- hawk-dove or anti-coordination games (HD),
- prisoner’s dilemma games (PD) and
- harmony games (HG).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_1.png" title="example image" class="img-fluid rounded z-depth-1" width="40%" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_2.png" title="example image" class="img-fluid rounded z-depth-1" width="40%" %}
</div>
<div class="caption text-left">
    Figure 1. Example games of each type.
</div>

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

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-left">
    Figure 2. Task design. A. Game payoffs. (1) HG - Harmony Game (2) SH - Stag-Hunt Game (3) HD - Hawk-Dove Game (4) PD - Prisoner’s Dilemma B. Game Risk Factor or the mixed strategy equilibrium probability of playing the top action.
</div>

We measured in each game which action a participant chooses from the two available actions. We also measured the response time (RT) of each choice. For each game, we also measure subject’s beliefs about how many other subjects in the study chose each action.

## 🐳  Results

---

### 🍪 Behavioral Results

I computed the expected utility based on subject’s beliefs (p) about what other subjects in the same study would do. The expected utility of the efficient action is:  $EU top = pa + (1 − p)c$ and the expected utility of the inefficient action is: $EU bottom = pb + (1 − p)d$.

I first investigated the effects of expected utility and payoffs on choices. As expected, subjects were more likely to choose the top action, the higher the expected utility of the top action and the lower the expected utility of the bottom action (β EU top = 1.32, SE = 0.05, p < .001, β EU bottom = −0.62, SE = 0.04, p < .001). The same was true when considering the temptation and the sucker payoffs. Subjects were more likely to choose the top action, the higher the sucker payoff (c) was and the lower the temptation payoff (b) was (β sucker = 1.20, SE = 0.05, p < .001, β temptation = −1.01, SE = 0.05, p < .001).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_4.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 3. Choice probability. Probability of choosing the top action depending on: A. temptation payoff B. sucker payoff C. Expected utility between top and bottom action calculated based on each subject’s beliefs.
</div>

I next investigated whether the risk factor of the SH and HD games affects choice behavior. As expected, a higher risk factor led to increased probability of choosing the top action in SH and decreased the probability of choosing the bottom action in HD (β r SH = −3.29, SE = 0.78, p < .001, β r HD = 2.54, SE = 0.53, p < .001). Moreover, subjects were more likely to choose the top action in SH when it was risk-dominant (β RD = 3.77, SE = 1.19, p = 0.001). They were also more responsive to the risk factor in SH when the the top action was risk-dominant (β r:RD = −7.38, SE = 2.28, p = 0.001). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_5.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 4. Choice probability based on game risk factor. Probability of choosing top action based on risk factor in: A. Stag-Hunt Game B. Hawk-Dove Game. Bars represent standard errors across subjects.
</div>


**Predicting choices**

For each type of game, I chose 2 specific games in we predicted the highest proportion of responses to one or the other action, in other words, easy choices. I chose 2 games for each game type with high sucker and low temptation payoffs or low sucker and high temptation payoffs (SH : {(5,4),(9,0)}, HD : {(11,10),(15,6)}, PD : {(13, 4), (14, 0)}, HG : {(7, 7), (6, 10)}). For each game, we selected the subjects who chose the most likely action according to our predictions (SH : {(5,4)_{T} ,(9,0)_{B}}, HD : {(11,10)_{T} ,(15,6)_{B}}, PD : {(13,4)_{T} ,(14,0)_{B}}, HG : {(7, 7)_{T} , (6, 10)_{T}}). I then predicted whether they were more likely to repeat the same action depending on their RT. We predicted that choosing the easy action quickly would make them more likely to repeat it in another game compared to when choosing the easy action slowly. For SH, HD, PD games, where some type of conflict is present, the response time should reflect mostly the strength of preference of drift rate. However, for the HG games, where conflict should not play a role, the response time should mainly reflect the speed-accuracy trade-off or boundary separation. Therefore, for the HG games, I predicted that short RTs would increase the likelihood of repeating the action compared to quick RTs.

Overall, I found the expected results for both the top and bottom actions, the shorter RTs in choosing an action, the more likely it was to be repeated in a different game. When running regressions separately for each type of game, the results held for repeating the bottom action, but were not significant for repeating the top action. I also found the expected effect for HG games, but only for one game the result was significant.


### ⌚Response Time Results


I then examined the same effect on the response times. Subjects’ RTs were longer when the expected utility difference between top and bottom action was closer to zero (β EU(Top−Bottom) = −0.003, SE = 0.0006, p < .001).

Subjects’ RTs were also longer, the closer they were to their indifference point between playing the top or bottom action (β (Choice Prediction−0.5) = −0.72, SE = 0.07, p < .001). Their indifference point was determined using the absolute value of predicted choice probabilities from the logistic regression of playing the top action on the sucker and temptation payoffs minus 0.5. 

Subjects’ RTs were also longer, the closer the game’s risk factor was to their indifference point (β (Choice Prediction−0.5) = −0.62, SE = 0.09, p < .001). Their indifference point was determined using the absolute value of predicted choice probabilities from the logistic regression of playing the top action on the game’s risk factor minus 0.5.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_6.png" title="example image" class="img-fluid rounded z-depth-1" width="70%" %}
    </div>
</div>
<div class="caption text-left">
    Figure 5. Response Time. Mean response time in seconds depending on: A. choice predictions based on temptation and sucker payoffs B. game type (1) HG - Harmony Game (2) SH - Stag-Hunt Game (3) HD - Hawk-Dove Game (4) PD - Prisoner’s Dilemma. Black dots are individual subjects. Bars represent standard errors across subjects.
</div>


### 📐 Modeling Results


I fitted two models to each subjects data. One model assumed subjects choices and response times were the result of an accumulation process. I used a Drift Diffusion Model (DDM) to model the accumulation of evidence over time for whether to chose the top or bottom action in each game (*Ratcliff et al., 2016*). The other model assumed choices and response times are generated independently.

**DDM** 

The DDM assumes that decision-making involves accumulating noisy evidence until a threshold is reached, at which point a decision is made. The accumulation process can be approximated by a random walk, where the accumulated evidence drifts towards one of the decision boundaries (corresponding to different response options) with a certain rate, influenced by the quality of evidence.

The model has 4 components. 

- The drift rate (v) represents the rate of evidence accumulation towards one of the decision
boundaries. Higher drift rates indicate stronger evidence favoring one option over others. We model the drift rate using a drift intercept (β0) and a drift slope (β1).
    - The drift intercept (β0) represent a bias during the deliberation process for one option or the other (top versus bottom).
    - The drift slope (β1) represents the slope of the evidence accumulation process and depends on the difference between the expected utility from the top versus the bottom action calculated using each subject’s beliefs about their opponent strategy for each game. When the difference is high, the speed of evidence accumulation is faster leading to more accurate and faster responses.
- The boundary separation (a) represents the amount of evidence required to make a decision. Lower thresholds result in faster decisions but may increase the likelihood of errors. In our case, one boundary represents the choice of the top action, while the other boundary represents choice of the bottom action in each game.
- The non-Decision Time (t) accounts for the time taken for stimulus encoding, motor response initiations.
- The starting point bias (z) represents a pre-decisional bias to choose one option or the other even before the decision process starts.

On each trial, the drift rate was defined as:

$$
v = \beta_{0} + \beta_{1}(EV_{Top} - EV_{Bottom})
$$

$$
RT \sim Wiener(a, t, z, v)
$$

The model was fit separately to each subject’s data and only the drift rate parameters were allowed to vary between games. 

**non-DDM**

The second model assumes choices and response times are generated independently. Choices of the top or bottom action follow a logistic regression with the choices determined by the difference in expected utility between the top and bottom actions using each subject’s belief about their partner’s strategy.

$$
Y \sim Bernoulli(v)
$$

$$
v = 1/1 + e^{-(\beta_{0} + \beta_{1}(EV_{Top} - EV_{Bottom}))}
$$

Response time follow a log-normal distribution with mean and standard deviation.

$$
RT \sim Lognormal(\mu,\sigma)
$$

The model was fit separately to each subject’s data. Only the drift rate parameters were allowed to vary between the 4 game types. The boundary separation, non-decision time and starting point bias were constant across game types. 

**Fitting procedure**

The software Stan was used to find the best fitting parameters for each subject separately. Estimates of the posteriors for each parameter were obtained using Monte-Carlo Markov Chain sampling method. For each subject, four chains were run in parallel. Each chain consisted of 5,000 samples out of which 2,500 were warm-up samples. We computed R-hat of all parameters to assess model convergence. This method compares the between and within chain estimates for model parameters. The maximum R-hat was 1.002 indicating the model converged successfully (*Gelman and Rubin, 1992*). The priors for the parameters of interest were chosen to be weakly informative to have minimal influence on the posterior (*Gelman et al., 2013*).

**Model comparison**

To compare models, we used the Widely Applicable Information Criterion (WAIC) (*Watanabe, 2018*). This criterion is especially useful when the posterior  distribution is not Normal. We computed WAIC for each subject and each model. For this comparison, I included all 60 subjects. According to subject level WAIC, the DDM provided a better fit for 55 (92%) of our subjects while the non-DDM fitted 5 (8%) of our subjects better. Thus, most subjects follow a DDM process when making their decisions.

### 🧶 **Clustering analyses**

I sought to replicate the choice-based classification into behavioral patterns (envious, optimist, pessimist, trustful, undefined) from *Poncela-Casasnovas et al. (2016)*. Using only choice data, I use k-means clustering with a fixed cluster size of 5 to see if I find the same behavioral classifications. For each subject, I calculate their average of choosing the top action in each type of game and enter this information into a k-means clustering algorithm. In order to ensure we find the global maxima instead of local maxima, we use 100 random initial starting positions for the algorithm.

I find similar behavioral patterns, with one exception. Instead of an undefined cluster, I find a new behavioral type where people choose the top action, except when it is dominated (PD games). I call this type opportunist.

- **Optimists:** Approximately 17% (20% original paper) of the population fall into this category. They cooperate whenever the temptation to defect is less than the reward for cooperation. They pursue maximum payoff without considering the likelihood of their counterpart reciprocating. They exhibit a maximax behavior and are not very risk-averse.
- **Pessimists:** About 18% (21% original paper) of the population belong here. They cooperate only when the reward for cooperation exceeds the temptation to defect, aiming for the best worst-case scenario. Their actions are guided by a maximin principle, and they tend to be more risk-averse.
- **Envious:** Around 25% (30% original paper) of the population exhibit this behavior. They cooperate only when their potential payoff exceeds that of their counterparts, even if it means sacrificing their own potential payoff. They seem driven by envy, status-seeking, or lack of trust, prioritizing competitiveness over rationality.
- **Trustful:** Approximately 23% (17% original paper) of the population falls into this category. They consistently cooperate, likely due to trust in partners behaving cooperatively or positive expectations. Their cooperative behavior may stem from various factors such as trust, but it’s not definitively attributed to one motivation.
- **Opportunist:** Approximately 17% (‘undefined’ 12% original paper) of the population falls into this category. They cooperate in situations where mutual benefit is clear (SH, HG) and they adopt a more self-interested or risk-averse approach in competitive or uncertain situations (PD, HD).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_5_images/project_5_fig_7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-left">
    Figure 6. Behavioral types based on choice clustering. A Average behavior (N = 60). B (1) Opportunist (N = 10, 17%). (2) Trustful (N = 14, 23%). (3) Envious (N = 15, 25%). (4) Pessimist (N = 11, 18%). (5) Optimist (N = 10, 17%). Choice of top action.
</div>


## 🏁 Conclusions

---

I discovered that subjects’ choices aligned with expected utility, calculated using their beliefs about what the partner might do and the benefit for choosing each action. More importantly, their RT were also sensitive to the expected utility difference. This research highlights the value of RT in distinguishing between players when choices alone cannot.

## 🎯 Future directions

---

In the next phase, I plan to present participants with RT of potential partners in similar games, aiming to assess whether individuals can infer others’ preferences based on RT and use this information to act accordingly. For instance, inferring a stronger preference for the safe action compared to the efficient action in a SH game from the longer RT in choosing the efficient action and using this knowledge to better coordinate.
