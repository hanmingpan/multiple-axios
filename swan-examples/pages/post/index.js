/**
 * @file index.js
 * @author tyxp
 */
var axios = require('../../lib/axios.js')
var config = require('../../config')

Page({
  data: {
    inputText: '{"name": "mzabriskie"}',
    outputText: ''
  },
  bindinput(e) {
    this.setData({
      inputText: e.detail.value
    })
  },
  submit() {
    axios.post(config.host + '/post/server', JSON.parse(this.data.inputText))
      .then(res => {
        this.setData({
          outputText: JSON.stringify(res.data)
        })
      })
      .catch(err => {
        this.setData({
          outext: err.message
        })
      })
  }
})
