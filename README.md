# Qibo site instructions

This is the Qibo's website repository.
Here we describe its contents and show you how to run the site in developement mode, in order to collaborate with us.

### Repo's structure

Into this repo you will find some folders:

```bash
.
├── components
├── pages
│   ├── api
│   ├── docs
│   └── tutorials
├── public
│   └── images
├── styles
└── tutorials
```

In details:

- `pages` contains the `*.js` files corresponding to the pages of the Qibo site.
- `public` contains the public material needed by the site. In `images` you will find all the images used into the site and divided between `home`, `tutorials` and `backgrounds`, according to their use.
- `components` contains some `*.js` files corresponding to the site's components, such that footer, navbar, tutorial layout and so on.
- `tutorials` contains some markdowns corresponding to the tutorials presented to the user. Each tutorial is saved into a proper `.md` file.
- `styles` contains two `*.css` files in which we wrote some styling instructions for the site building.


### How to open the site in developement mode

First, you need to clone this repo locally. 


##### Follow `INSTALL.md` instructions now

The next step is to install some more packages. 
Please follow the [installation istructions](https://github.com/qibogang/qibogang.github.io/blob/master/INSTALL.md).


##### Run the site in developement mode!

Here we are! After all the dependences are ready, you can run the developement mode:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` (we talk about `index.js` as an example). The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### How to run the built site in user mode

For displaying the built site in your browser an host static HTTP server is needed. 
One possibility is to use the [`python` one](https://docs.python.org/3/library/http.server.html), but this option can be too poor in such cases, in which it may happen that some pages are not rendered properly. 

A solution to this is to use a more reliable HTTP server. For example, in this case Next 
provide us with the possibility to serve a production version of the site (but it must be built before!) using:

```bash
yarn build
yarn start
```

Also `npm, npx` can be used for using a command-line static HTTP server as you can read 
[here](https://www.npmjs.com/package/http-server).


