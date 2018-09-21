// wx.request
var buildURL = require('./../helpers/buildURL');

module.exports = function wxrequestAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var finalUrl = buildURL(config.url, config.params, config.paramsSerializer)
        var task = wx.request({
            url: finalUrl,
            data: config.data,
            header: config.headers,
            method: config.method.toUpperCase,
            // dataType: 'json',
            // responseType: 'text',
            success: function (res) {
                var response = {
                    config: config,
                    data: res.data,
                    headers: res.header,
                    // request: task,
                    status: res.statusCode,
                    // statusText: ''
                }

                if (res.statusCode < 400) {
                    resolve(response)
                } else {
                    reject(response)
                }
            },
            fail: function (err) {
                reject(err)
            },
            complete: function () {

            }
        })
    })
}
