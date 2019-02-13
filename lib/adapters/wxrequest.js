// wx.request
var buildURL = require('./../helpers/buildURL');
var settle = require('./../core/settle');
var createError = require('./../core/createError');
var utils = require('./../utils');

module.exports = function wxrequestAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestType = 'request';
    var finalUrl = buildURL(config.url, config.params, config.paramsSerializer);
    var request = {
      url: finalUrl,
      data: config.data,
      header: config.headers,
      method: config.method.toUpperCase(),
      dataType: config.dataType || 'json',
      responseType: config.responseType || 'text',
    };

    if (config.uploadFile) {
      var name = config.uploadFile;
      requestType = 'uploadFile';
      request.name = name;

      if (utils.isJson(config.data)) {
        request.filePath = JSON.parse(config.data)[name];
        request.formData = JSON.parse(config.data);
      }
    }

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

    var task = wx[requestType](request);

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
