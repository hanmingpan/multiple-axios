/**
 * @file index.js
 * @author tyxp
 */
var axios = require('../../lib/axios.js')
var config = require('../../config')

Page({
  data: {
    people: []
  },
  onLoad() {
    axios.get(config.host + '/get/server')
      .then(res => {
        this.setData({
          people: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
})
