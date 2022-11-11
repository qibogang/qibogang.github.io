---
title: 'Parameter Shift Rule'
cover_image: 'images/tutorials/psr.png'
excerpt: 'Using the parameter shift rule to calculate the derivative of a circuit with respect to a variational parameter.'
---

## Parameter-Shift Rule for Rotation gates

In this tutorial we use the Parameter Shift Rule (PSR) [1, 2] for evaluating the gradients of a variational quantum circuit with respect a variational parameter.

#### The parameter shift rule in a nutshell

Let's consider a parametrized circuit $\mathcal{U}(\vec{\theta})$, in which we build up an unitary gate of the form:

$$ \mathcal{G} = \exp \bigl[-i\mu G \bigr] $$

which has at most two eigenvalues $\pm r$. Let's consider an observable $B$ and, finally, let $|q_f\rangle $ be the state we obtain by applying $\mathcal{U}$ to $|0\rangle$.
We are interested in evaluating the gradients of the following expression:

$$ f(\mu) \equiv \langle q_f | B | q_f \rangle, $$

where we specify that $f$ depends directly on the parameter $\mu$. We are interested in this result because the expectation value of $B$ is typically involved in computing predictions in quantum machine learning problems. The PSR allows us to calculate the derivative of $f(\mu)$ with respect to a evaluating $f$ twice more:

$$ \partial_{\mu} = \frac{1}{r} \bigl( f(\mu^+) - f(\mu^-) \bigr), $$

where $\mu^{\pm} = \mu \pm s$ and $s = \pi / 4r$. Finally, if we pick $G$ from the rotations generators we can use $s=\pi/2$ and $r=1/2$.

#### Loading required features


```python
import qibo
import numpy as np
from qibo import hamiltonians, gates
from qibo.models import Circuit
from qibo.hamiltonians.abstract import AbstractHamiltonian
from qibo.config import raise_error
```

Now we have can write a `parameter_shift` function, in which we take into account an hamiltonian (which is our $B$ observable), the index which identify the target variational parameter, the initial state of the circuit and the wigenvalues of the target observable.


```python
# -*- coding: utf-8 -*-

def parameter_shift(
    circuit, hamiltonian, parameter_index, generator_eigenval, initial_state=None
):
    
    # inheriting hamiltonian's backend
    backend = hamiltonian.backend
        
    # defining the shift according to the psr
    s = np.pi / (4 * generator_eigenval)

    # saving original parameters and making a copy
    original = np.asarray(circuit.get_parameters()).copy()
    shifted = original.copy()

    # forward shift and evaluation
    shifted[parameter_index] += s
    circuit.set_parameters(shifted)

    forward = hamiltonian.expectation(backend.execute_circuit(circuit=circuit, initial_state=initial_state).state())

    # backward shift and evaluation
    shifted[parameter_index] -= 2 * s
    circuit.set_parameters(shifted)

    backward = hamiltonian.expectation(backend.execute_circuit(circuit=circuit, initial_state=initial_state).state())

    # restoring the original circuit
    circuit.set_parameters(original)

    return generator_eigenval * (forward - backward)

```

Now we have a `parameter_shift` function and we can use it for calculating the gradients of the expected value of $H$ on the final state with respect to $\mu$. In order to check the results, we compare them with the same variables evaluated using the `GradientTape()` module of `tensorflow`.

For doing this, we need to load `tensorflow` and to activate the appropriate `qibo`'s backend.


```python
# in order to see the difference with tf gradients
import tensorflow as tf
qibo.set_backend('tensorflow')
```

    [Qibo 0.1.8|INFO|2022-11-11 16:19:53]: Using tensorflow backend on /device:CPU:0


Now we can define the hamiltonian (in this case we use a Pauli Z as observable) and a parametrized circuit.


```python
# defining an observable
def hamiltonian(nqubits = 1):
    m0 = (1/nqubits)*hamiltonians.Z(nqubits).matrix
    ham = hamiltonians.Hamiltonian(nqubits, m0)
    return ham

# defining a dummy circuit
def circuit(nqubits = 1):
    c = Circuit(nqubits = 1)
    c.add(gates.RY(q = 0, theta = 0))
    c.add(gates.RX(q = 0, theta = 0))
    c.add(gates.M(0))
    return c
```


```python
# drawing the circuit
c = circuit(1)
c.draw()
```




    'q0: ─RY─RX─M─'



This is the momento to write a function which returns the `tensorflow` values of the gradients. 


```python
# using GradientTape to benchmark
def gradient_tape(params):
    params = tf.Variable(params)
    
    with tf.GradientTape() as tape:
        c = circuit(nqubits = 1)
        c.set_parameters(params)
        h = hamiltonian()
        expected_value = h.expectation(c.execute().state()) 
    
    grads = tape.gradient(expected_value, [params])
    return grads
```

In order to check the difference, we randomly generate some parameters and we impose them as variational parameters of the circuit.


```python
# some parameters
test_params = np.random.randn(2)
c.set_parameters(test_params)
```

Here we are!

Now we can calculate the gradients using the two methods.


```python

test_hamiltonian = hamiltonian()

# running the psr with respect to the two parameters
grad_0 = parameter_shift(circuit = c, hamiltonian = test_hamiltonian, parameter_index = 0, generator_eigenval = 0.5)
grad_1 = parameter_shift(circuit = c, hamiltonian = test_hamiltonian, parameter_index = 1, generator_eigenval = 0.5)

tf_grads = gradient_tape(test_params)

print('Test gradient with respect params[0] with PSR: ', grad_0.numpy())
print('Test gradient with respect params[0] with tf:  ', tf_grads[0][0].numpy())
print('Test gradient with respect params[0] with PSR: ', grad_1.numpy())
print('Test gradient with respect params[0] with tf:  ', tf_grads[0][1].numpy())
```

    Test gradient with respect params[0] with PSR:  -0.18504202639565628
    Test gradient with respect params[0] with tf:   -0.1850420263956563
    Test gradient with respect params[0] with PSR:  0.09410349638804433
    Test gradient with respect params[0] with tf:   0.09410349638804441


As you can see, the values are identical!
