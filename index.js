// @flow

import { initialize, isAd, client } from 'is-ad';

initialize();

const defaultOptions = {
  verbose: true,
  logger: console,
  onRequest: undefined,
};

export const adBlocker = client;

export const blockWindowAds = (browserWindow: any, userOptions: Object = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  browserWindow.webContents.session.webRequest.onBeforeRequest(['*://*./*'], (details, callback) => {
    const shouldBeBlocked = isAd(details.url);
    if (shouldBeBlocked && options.verbose) { options.logger.log(`ADBLOCK blocked: ${details.url}`); }
    if (options.onRequest) {
      options.onRequest(details, callback, shouldBeBlocked);
    } else if (shouldBeBlocked) {
      callback({ cancel: true });
    } else {
      callback({ cancel: false });
    }
  });
};
