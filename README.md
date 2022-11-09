This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is an experimental repo, created to familiarize with `nextjs`, `javascript` and `react`.

## How to run the site in developement mode

First, you need to clone this repo locally. For doing this, enter in the location in which you want the Qibo site folder and digit: 

```bash
git clone https://github.com/qibogang/qibogang.github.io.git
```

Second, the Qibo site needs the documentation pages to be built locally. 
In order to do that, you must enter the `qibo/doc` (and the same must be done also for Qibocal and Qibocal) folder and to run:

```bash
make html
```

This command will build the `index.html` file representing the qibo documentation.
Note that, for doing this, you need to be into an environment in which you have installed `sphinx` properly.
If you install the packages using `pip` it is important to add the flag which activate the documentation packages.
You can do this running the following line into the `qibo` (or `qibolab/cal`) folder:

```bash
pip install .[docs]
```

Otherwise, if you install the packages with `poetry`, you will be able to run `make html` without any problem.

Here we are!
As final step you have to install yarn and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` (we talk about `index.js` as an example). The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Repo's structure

Into this repo you will find some folders:

- `pages` contains the `*.js` files corresponding to the pages of the Qibo site.
- `public` contains the public material needed by the site divided into `packages` and `images`. In `packages` you will find the three target packages: `qibo`, `qibolab` and `qibocal`. It is into these folders that you must go in order to compile the documentation. In `images` you will find all the images used into the site and divided between `home` and `tutorials` according to their use.
- `components` contains some `*.js` files corresponding to the site's components, such that footer, navbar, tutorial layout and so on.
- `tutorials` contains some markdowns corresponding to the tutorials presented to the user. Each tutorial is saved into a proper `.md` file.
- `styles` contains two `*.css` files in which we wrote some styling instructions for the site building.

## Required packages to compile it in dev mode

Please check the "dependencies" section in `package.json` file to be sure that you
have all the yarn extensions in order to run the developer mode.
