---
title: 'Quantum Regressor'
cover_image: 'images/tutorials/vqregressor.png'
excerpt: 'Using a variational quantum circuit to fit one dimensional functions.'
---

## A variational quantum regressor using the parameter shift rule

Code at [https://github.com/qiboteam/qibo/tree/vqregressor/examples/vqregressor](https://github.com/qiboteam/qibo/tree/master/examples/vqregressor). 



### Problem overview

We want to tackle a simple one dimensional regression problem using a single qubit Variational Quantum Circuit (VQC) as model, initialized using a [re-uploading strategy](https://arxiv.org/abs/1907.02085). In particular, in this example we
fit the function y = sin(2x), picking the x points from the interval I=[-1,1].

The optimization is performed using an [Adam](https://arxiv.org/abs/1412.6980) optimizer.
It needs the circuit's gradients, which we evaluate through the [Parameter Shift Rule](https://arxiv.org/abs/1811.11184) (PSR).

A method like this is
needed because in quantum computation we can't perform the [Back-Propagation Algorithm](https://www.nature.com/articles/323533a0) on the hardware:
in that case the values of the target function in the middle of the propagation are needed, but for evaluating them on the hardware we have to measure,
and measuring we provoke the collapse of the system and the loss of all the information wealth. The PSR provide us with a numerical tool, with which we
can perform a gradient descent even on the physical qubit.

### The Parameter Shift Rule in a nutshell

Let's consider a parametrized circuit U, in which we build up a gate of the form G = exp [-i a A]
(which represents an unitary operator with at most two eigenvalues +r and -r), and an observable B.
Finally, let |qf> be the state we obtain by applying U to |0>.

We are interested in evaluating the gradients of the following expression:

```
# We initialize the quantum regressor
vqr = VQRegressor(layers=layers, ndata=ndata)
    
# and the initial parameters
initial_params = np.random.randn(3 * layers)
    
# Let's go with the training
vqr.train_with_psr(
    epochs=epochs,
    learning_rate=learning_rate,
    batches=batches,
    J_treshold=J_treshold,
)

# show predictions
vqr.show_predictions("Predictions of the VQR after training", False)
```