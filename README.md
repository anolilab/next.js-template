<h1 align="center">Template for the Next.js project</h1>

<p align="center">
  <a href="https://nextjs.org/" title="Next.js">Next.js</a><br/>
  <a href="https://preactjs.com/" title="Preact">Preact</a><br/>
  <a href="https://www.typescriptlang.org/" title="TypeScript">TypeScript</a><br/>
  SEO<br/>
  RSS generation<br/>
  <a href="https://github.com/lukeed/rosetta" title="rosetta i18n">Rosetta I18n</a><br/>
  <a href="https://github.com/callstack/linaria" title="linaria">linaria - Zero-runtime CSS in JS library</a><br/>
  <a href="https://github.com/anolilab/favicons-manifest" title="PWA assets generator">PWA assets generator</a> (soon)<br/>
  <a href="https://github.com/evanw/esbuild" title="An extremely fast JavaScript bundler and minifier">An extremely fast JavaScript bundler and minifier</a>
</p>

## 🏁 Getting Started

To get started, simply use this repository as github template, click the `Use this template` button or clone the repository and run `yarn`

#### Do this only if you clone this repository

```
# Clone the repo
git clone https://github.com/anolilab/next.js-template.git
```

```
# Move into the new directory
cd next.js-template/

# Use nvm (https://github.com/nvm-sh/nvm)
nvm use (if you missing the node version use "nvm install")

# Install npm packages
yarn

# Start up the next.js dev server, browse to http://localhost:3000/
yarn run dev
```

## ✨ Features

<details>
<summary>Images with Next/Images 🚀</summary>
<br />
<ul>
  <li>Feature and inline images</li>
  <li>Auto-optimized images</li>
  <li>No content shifts due to consistent placeholders</li>
</ul>
</details>
<details>
<summary>Advanced Routing</summary>
<br />
<ul>
  <li>Auto-detects custom paths</li>
  <li>Configurable collections</li>
</ul>
</details>
<details>
<summary>Developer friendly</summary>
<br />
<ul>
  <li>MIT licenced</li>
  <li>Truly open-source</li>
  <li>Easy to contribute</li>
  <li>Made typesafe with TypeScript</li>
</ul>
</details>
<details>
<summary>NextJS Features</summary>
<br />
<ul>
  <li>Incremental Regeneration</li>
  <li>Support for Preview</li>
</ul>
</details>

## 🌀 NextJS image optimizations

You must add all domains that you use for in-sourcing images in the `anolilab.config.cjs` file, for example:

```javascript
module.exports = {
    // ...
    images: {
        domains: ["images.unsplash.com", "static.gotsby.org"],
    },
    // ...
};
```

Note that image optimization does not work with Netlify. Therefore, image optimization is automatically turned off when deploying to Netlify.

## CLI Commands

-   `yarn`: Installs dependencies
-   `yarn run dev`: Run a development, HMR server
-   `yarn run start`: Run a production-like server
-   `yarn run build`: Production-ready build
-   `yarn run lint`: Pass TypeScript files using eslint
-   `yarn run lint:css`: Pass TypeScript files using eslint
-   `yarn run lint`: Pass TypeScript files using eslint
-   `yarn run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🧐 Disclaimer

This project is not affiliated with [NextJS](https://nextjs.org/).

# Copyright & License

Copyright (c) 2020 - 2021 anolilab - Released under the [MIT license](LICENSE).
