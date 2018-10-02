const axios = require('../lib/axios.js')
const config = require('../config')

Page({
  data: {
    begin: false,
    cancel: false
  },
  onLoad() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    this.setData({
      begin: true
    })

    axios.get(config.host + '/cancel/server', {
      cancelToken: source.token
    }).then(res => {
    }).catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);

        this.setData({
          begin: false,
          cancel: true
        })
      }
    })

    setTimeout(function () {
      source.cancel('Operation canceled by the user.');
    }, 5000)
  }
})
