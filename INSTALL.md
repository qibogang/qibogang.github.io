## Installation instructions

In order to run the site in developement mode you need some packages to be installed.

#### Installing `sphinx` into a `virtualenv`

At first, you need to have `sphinx` properly working on your environment. It is needed
because the next step is to build the documentations locally. 

We suggest to install it into a `virtualenv` and for doing this we first need an environment.
Let's check if you have correctly installed `virtualenv` by running:

```bash
which virtualenv
```

If yes, you will read its path location on the terminal. If not, you can install it following
the [official instructions](https://virtualenv.pypa.io/en/latest/installation.html).

Now we create an environment that we will use for building the docs using the following command:

```bash
virtualenv my-sphinx-env
```

Let's activate the new environment:

```bash
source my-sphinx-env/bin/activate
```

Now you will read the name of your environment `(my-sphinx-env)` on the right side of the command line.
Here we are, now we can proceed with the installation of `sphinx`.

You can do this running following the 
[official `sphinx` instructions](https://smobsc.readthedocs.io/en/stable/usage/installation.html).
On Linux or MacOS run:

```bash
pip install -U sphinx
```

or on the Windows prompt:

```bash
pip install -U --pre sphinx
```

Now the environment is ready to build the documentations.

#### Building the docs

The Qibo site needs the documentations to be generated locally. 

###### Qibo docs

For building `qibo`'s documentation run:

```bash
cd public/packages/qibo/doc
make html
```

If all is right, you must now have a folder called `build`, into `qibo/doc`.

###### Qibolab docs

For building `qibolab`'s documentation come back to root into `qibogang.github.io` and run:

```bash
cd public/packages/qibolab/doc
make html
```

If all is right, you must now have a folder called `build`, into `qibolab/doc`.

###### Qibocal docs

For building `qibocal`'s documentation come back to root into `qibogang.github.io` and run:

```bash
cd public/packages/qibocal/doc
make html
```

If all is right, you must now have a folder called `build`, into `qibocal/doc`.


#### We use `yarn` as dependence

We developed the site using `yarn` as dependence. You can install it following the
[official instructions](https://yarnpkg.com/getting-started/install).

###### Required packages to compile it in dev mode

Please check the "dependencies" section in `package.json` file to be sure that you
have all the yarn extensions in order to run the developer mode.