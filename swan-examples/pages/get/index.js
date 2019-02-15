/**
 * @file index.js
 * @author swan
 */
const app = getApp()
const axios = require('../../lib/axios.js')
const config = require('../../config')

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
