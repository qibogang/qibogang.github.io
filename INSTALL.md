## Installation instructions

In order to run the site in developement mode you need some packages to be installed.

#### We use `yarn v1` as dependence

You can install it following the
[official instructions](https://yarnpkg.com/getting-started/install).
With the following lines we suggest an installation procedure.

##### Installing `node` and `npm`

We developed the site using `yarn` as dependence.

In order to build this site on this way the first thing to do is to install `nodejs` and
`npm`. Before doing this, let's check if you have them already installed on your device.

 ```bash
node -v
 ```

Note that we need to use a `node` version equal to or greater than 13.
We suggest to follow the official instructions via package manager that can be
found [here](https://nodejs.org/en/download/package-manager/). 

Typically `npm` (Node Package Manager) is included with with `nodejs` installation.
You can check this by typing `npm -v`. It can be useful to update its version 
as explained in [the official `npm` documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

After having installed `node` and its package manager, we can proceed with `yarn`.


##### Installing `yarn`

For a proper `yarn` installation follow the official instructions [here](https://yarnpkg.com/getting-started/install)
and pay attention to which version of Node.js you are using.

###### Required packages to compile it in dev mode

Please check the "dependencies" section in `package.json` file to be sure that you
have all the yarn extensions in order to run the developer mode.