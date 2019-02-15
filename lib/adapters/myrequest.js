// my.httpRequest
var buildURL = require('./../helpers/buildURL');
var settle = require('./../core/settle');
var createError = require('./../core/createError');

module.exports = function myrequestAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestType = 'httpRequest';
    var finalUrl = buildURL(config.url, config.params, config.paramsSerializer);
    var request = {
      url: finalUrl,
      data: config.data,
      headers: config.headers,
      method: config.method.toUpperCase(),
      timeout: config.timeout,
      dataType: config.dataType || 'json',
      responseType: config.responseType || 'text',
    };

    request.success = function (response) {
      settle(resolve, reject, {
        data: response.data,
        status: response.statusCode,
        headers: response.header,
        config: config,
        request: request
      })
    };

    request.fail = function(error) {
      reject(createError(error.errMsg, config))
    };

    var task = my[requestType](request);

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!task) {
          return;
        }

        task.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }
  })
}
