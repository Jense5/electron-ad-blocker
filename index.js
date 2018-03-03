const { initialize, containsAds, client } = require('contains-ads');

initialize();

module.exports.adBlocker = client;
module.exports.blockWindowAds = (browserWindow, opts) => {

  const options = Object.assign({}, {
    verbose: false,
    logger: console,
    onRequest: undefined,
  }, opts);

  browserWindow.webContents.session.webRequest.onBeforeRequest(['*://*./*'], (details, cb) => {
    const shouldBeBlocked = containsAds(details.url);

    if (shouldBeBlocked && options.verbose)
      options.logger.log('ADBLOCK blocked: ' + details.url);

    if (options.onRequest) {
      options.onRequest(details, cb, shouldBeBlocked);
    } else if (shouldBeBlocked) {
      cb({ cancel: true });
    } else {
      cb({ cancel: false });
    }
  });
};
