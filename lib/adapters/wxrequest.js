// wx.request
var buildURL = require('./../helpers/buildURL');
var settle = require('./../core/settle');
var createError = require('./../core/createError');

module.exports = function wxrequestAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestType = 'request'
    var finalUrl = buildURL(config.url, config.params, config.paramsSerializer)
    var request = {
      url: finalUrl,
      data: config.data,
      header: config.headers,
      method: config.method.toUpperCase(),
      // dataType: 'json',
      // responseType: 'text',
    }

    request.success = function (response) {
      settle(resolve, reject, {
        data: response.data,
        status: response.statusCode,
        headers: response.header,
        config: config,
        request: request
      })
    }

    request.fail = function(error) {
      reject(createError(error.errMsg, config))
    }

    wx[requestType](request)
  })
}
