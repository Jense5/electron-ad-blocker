// @flow

import { initialize, isAd } from 'is-ad';

initialize();

const defaultOptions = {
  verbose: true,
  logger: console,
};

export default (browserWindow: any, userOptions: Object = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  browserWindow.webContents.session.webRequest.onBeforeRequest(['*://*./*'], (details, callback) => {
    const shouldBeBlocked = isAd(details.url);
    if (shouldBeBlocked) {
      if (options.verbose) { options.logger.log(`ADBLOCK blocked: ${details.url}`); }
      callback({ cancel: true });
    } else {
      callback({ cancel: false });
    }
  });
};
