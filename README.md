<h1 align="center">Template for the Next.js project</h1>

<p align="center">
  <a href="https://nextjs.org/" title="Next.js">Next.js</a><br/>
  <a href="https://preactjs.com/" title="Preact">Preact</a><br/>
  <a href="https://www.typescriptlang.org/" title="TypeScript">TypeScript</a><br/>
  SEO<br/>
  RSS generation<br/>
  <a href="https://github.com/lukeed/rosetta" title="rosetta i18n">Rosetta I18n</a><br/>
  <a href="https://github.com/callstack/linaria" title="linaria">linaria - Zero-runtime CSS in JS library</a><br/>
  <a href="https://github.com/anolilab/favicons-manifest" title="PWA assets generator">PWA assets generator</a> (soon)
</p>

## Getting Started

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

## CLI Commands
*   `yarn`: Installs dependencies
*   `yarn run dev`: Run a development, HMR server
*   `yarn run start`: Run a production-like server
*   `yarn run build`: Production-ready build
*   `yarn run lint`: Pass TypeScript files using eslint
*   `yarn run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests
