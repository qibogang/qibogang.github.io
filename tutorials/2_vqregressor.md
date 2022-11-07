---
title: 'Quantum Regressor'
cover_image: 'images/posts/vqregressor.png'
excerpt: 'Using a variational quantum circuit to fit one dimensional functions.'
---

## A variational quantum regressor using the parameter shift rule

Code at [https://github.com/qiboteam/qibo/tree/vqregressor/examples/vqregressor](https://github.com/qiboteam/qibo/tree/master/examples/vqregressor).

### Problem overview

We want to tackle a simple one dimensional regression problem using a single qubit Variational Quantum Circuit (VQC) as model, initialized using a [re-uploading strategy](https://arxiv.org/abs/1907.02085). In particular, in this example we
fit the function y = sin(2x), picking the x points from the interval I=[-1,1].

* goal 1
* goal 2

r$$ \partial_{\mu} \braket{q_f | O | q_f} = r\bigl( f(\mu^+) - f(\mu^-)) \bigr) $$