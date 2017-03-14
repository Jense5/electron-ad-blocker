
<h1 align="center">Electron Ad Blocker</h1>

<p align="center">
  <img src="https://image.flaticon.com/icons/svg/0/61.svg" width="150">
</p>

<h3 align="center" style="font-family:monospace">DEVELOPERS ONLY</h3>

### Default scripts

```sh
$ npm install           # Install dependencies 
$ npm run build         # Build the source
$ npm run build:watch   # Watch the build
$ npm run test          # Run the tests
$ npm run test:watch    # Watch the tests
$ npm run cover         # Run the tests with coverage
$ npm run cover:check   # Check if there is enough coverage
$ npm run cover:report  # Push coverage report to codecov
```

### Setup Automated Releases

```sh
# Install the tools
$ npm install -g semantic-release-cli
$ npm install --save commitizen cz-conventional-changelog
$ semantic-release-cli setup
```

```yml
# Add script to Travis (replaces prepublish) and enable on the website
# Also enable codecov for coverage
branches:
  only:
    - master
script:
  - npm run cover
  - npm run build
after_success:
  - npm run cover:report
```

```js
// Update package.json with bins
{
  "scripts": { "commit": "git-cz" },
  "czConfig": { "path": "node_modules/cz-conventional-changelog" }
}
```

```sh
# You can now commit with automated releases
$ git add .
$ npm run commit
```

<br />
<p align="center">
  <a href="https://js.org" target="_blank" title="JS.ORG | JavaScript Community">
  <img src="https://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
</p>
