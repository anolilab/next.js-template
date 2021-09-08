<h1 align="center">Template for your Next.js project</h1>

Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged.

---

<div align="center">
    <p>
        <sup>
            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>
        </sup>
    </p>
</div>

---

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default [Anolilab configuration](https://github.com/anolilab/javascript-style-guide))
- 🛠 Code Formatter with [Prettier](https://prettier.io) (default [Anolilab configuration](https://github.com/anolilab/javascript-style-guide))
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score
- [Rosetta I18n](https://github.com/lukeed/rosetta)

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

## 🏁 Getting Started

To get started, simply use this repository as GitHub template, click the `Use this template` button or clone the repository and run `yarn`

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

## Features

This template is prepared to add <a href="https://github.com/callstack/linaria" title="linaria">linaria</a><br/>
```bash
yarn add @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker
```
everything else is preconfigured for you.

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

## NextJS image optimizations

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
-   `yarn run test`: Run Jest and Enzyme

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Disclaimer

This project is not affiliated with [NextJS](https://nextjs.org/).

# Copyright & License

Copyright (c) 2020 - 2021 anolilab - Released under the [MIT license](LICENSE).
