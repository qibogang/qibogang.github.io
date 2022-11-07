---
title: 'Re-uploading Classifier'
cover_image: 'images/posts/vqclassifier.png'
excerpt: 'Using a variational quantum circuit for tackling classification problems'
---

# Data reuploading for a universal quantum classifier

## What this example does?

This example provides a variational algorithm for classifying classical data using only one qubit. There are two main ideas in this work. The general idea is to create a single-qubit circuit where several different unitary gates are aplied.

1. Re-uploading: create a single-qubit circuit where several different unitary gates are applied. The exact gate depends on the point to classify and on a set of parameters found by learning the classes of a training set.
2. Separating classes: the Bloch sphere has plenty of room on its surface, thus it is possible to define a set of target states representing different labels. These states are chosen in such a way that they are maximally orthogonal among them.

