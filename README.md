
# Electron ad blocker

Blocks advertisements in an electron browser window.

### Build from source

Because this module contains native modules, it should build from source for the correct version of node of your electron distribution (and not the default one on your machine). If you know how to do this, you can skip this. [If not, I wrote a short tutorial for you](https://medium.com/@Jense5_/how-to-setup-electron-ad-blocker-c5d6ec8fb1d3).

### Getting Started

```sh
$ yarn add electron-ad-blocker
```

```js
const { BrowserWindow } = require('electron');
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');

const options = {
  verbose: true,
  logger: console,
};

const mainWindow = new BrowserWindow({ width: 800, height: 600 });
blockWindowAds(mainWindow, options);

// You can also blacklist other websites, since adBlocker is the
// client instance of the contains-ads module.
adBlocker.parse('||blacklistwebsite.com')
```

### Possible options

`logger` (`console`): A custom logger instance to use.  
`verbose` (`false`): Whether or not the ad blocker should log when he blocks a request.  
`onRequest` (`undefined`): Gets called like the original `onRequest` of a `BrowserWindow` instance.

```js
blockWindowAds(browserWindow, {
  verbose: true,
  logger: console,
  onRequest: (details, callback, shouldBeBlocked) => {
    // Execute your own onRequest function here...
  },
});
```
