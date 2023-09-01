---
layout: page
title: How cognitive modeling can identify response biases in negotiations
description: Using Drift Diffusion Modeling for lab and field bargaining
img: assets/img/project_image_learned_impatience.jpeg
importance: 3
category: Research
---


![https://images.unsplash.com/photo-1515139832362-a06b09ecced0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb](https://images.unsplash.com/photo-1515139832362-a06b09ecced0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)

Many decisions involve a process of comparing and accumulating net evidence in favor of the choice options up to a predetermined boundary, a process which takes time and reflects the strength of the net evidence. The evidence reflects the agent’s evaluation of the choice options – an agent deciding between an apple ( 🍎 ) and an orange ( 🍊 ) must weigh the benefits and costs of the apple against those of the orange. 

If these two evaluations are roughly equal ( 🍎 ~ 🍊), the agent will struggle to decide which item to choose ( 🐢 ). On the other hand, if the agent finds the orange to be much more attractive than the apple ( 🍊 > 🍎 or 🍎 > 🍊), then their choice will be quick and predictable ( 🐇 ). This relation between strength-of-preference and response time (RT) is a basic feature of evidence-accumulation or sequential-sampling models, such as the drift-diffusion model (DDM, Figure 1).

![Untitled](How%20cognitive%20modeling%20can%20identify%20response%20biase%20464e9b02091a4d3285f23f11ac212e19/Untitled.png)

In the bargaining example, the seller must weigh the buyer’s offer against the utility of the car and/or future offers. If the seller rejects ( 👎 ) the buyer’s offer quickly ( 🐇 ), they signal to the buyer that the offer was far too low; if the seller rejects ( 👎 ) the offer slowly ( 🐢 ), they signal to the buyer that the offer was competitive.

![Untitled](How%20cognitive%20modeling%20can%20identify%20response%20biase%20464e9b02091a4d3285f23f11ac212e19/Untitled%201.png)

The DDM is typically applied to fast perceptual judgments, but in recent years it has seen increasing application to economic choice. However, it has yet to be applied to strategic settings where RT might betray private information. It has also not been applied to decisions longer than a few seconds. Here, we fit the DDM to both the lab and eBay bargaining data to see how well it can quantitatively explain the choice and RT data and to better understand how agents’ decisions might change when RT is a strategic variable.
