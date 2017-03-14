
# Electron Ad Blocker

**Block all ads in a browserwindow.**  

```sh
$ npm install --save electron-ad-blocker
```

```js
// import or use const { blockWindowAds, adBlocker } = require('electron-ad-blocker').default;
import { blockWindowAds, adBlocker } from 'electron-ad-blocker';
blockWindowAds(browserWindow);

// You can also provide options, like so:
blockWindowAds(browserWindow, {});
```

### Rebuild the from source

```sh
# This repo uses is-ad, which uses ad-block from the Brave browser.
# Because this is written in c++ and compiled for node v51, you might
# need to recompile it with electron rebuild after installation.
$ npm install --save electron-rebuild
$ ./node_modules/.bin/.electron-rebuild -f -w ad-block
```

### Possible options

##### Verbose

`Default: true`

Whether or not the Ad Blocker should log when he blocks a request.

##### Logger

``Default: console``

Optional logger that will be used. Uses the `.log` function as in `console.log()`. If you want to use
winston, make sure to wrap it: `{ logger: { log: (...params) => winston.info(...params) } }`.

##### onRequest

``Default: undefined``

Optional function that will be called instead of the callback. This is useful if you still want to
define your own onRequest function for the electron session. An extra parameter is added, which is
`shouldBeBlocked`.

#### Example

```js

blockWindowAds(browserWindow, {
  verbose: true,
  logger: console,
  onRequest: (details, callback, shouldBeBlocked) => {
    // Execute your own onRequest function here...
  },
});

```
