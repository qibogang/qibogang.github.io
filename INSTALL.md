## Installation instructions

In order to run the site in developement mode you need some packages to be installed.

#### We use `yarn` as dependence

You can install it following the
[official instructions](https://yarnpkg.com/getting-started/install).
With the following lines we suggest an installation procedure.

##### Installing `node` and `npm`

We developed the site using `yarn` as dependence.

In order to build this site on this way the first to do is to install `nodejs` and
`npm`. Before doing this check if you have them already installed on your device.

 ```bash
node -v
npm -v
 ```

If not, one possibility is to install it using the Advanced Packaging Tool `apt` 
if you use an Ubuntu distribution. We suggest to follow the official instructions 
[here](https://nodejs.dev/en/download/). If you need to add the PPA of `nodejs` 
to your system you can use `curl` and select the desider node version 
[here](https://github.com/nodesource/distributions#deb) and then proceed with `apt`.

##### Installing `yarn`

At this point, we suggest to install `yarn` globally:

```bash
sudo npm install -g yarn
```

###### Required packages to compile it in dev mode

Please check the "dependencies" section in `package.json` file to be sure that you
have all the yarn extensions in order to run the developer mode.