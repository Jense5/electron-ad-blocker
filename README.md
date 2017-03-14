
# Electron Ad Blocker

**Block all ads in a browserwindow.**  

```sh
$ npm install --save electron-ad-blocker
```

```js
// import or use const blockWindowAds = require('electron-ad-blocker').default;
import blockWindowAds from 'electron-ad-blocker';
blockWindowAds(browserWindow);
// Now all ads are blocked in this window!
```

### Rebuild the from source

```sh
# This repo uses is-ad, which uses ad-block from the Brave browser.
# Because this is written in c++ and compiled for node v51, you might
# need to recompile it with electron rebuild after installation.
$ npm install --save electron-rebuild
$ ./node_modules/.bin/.electron-rebuild -f -w ad-block
```
