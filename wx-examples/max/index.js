const axios = require('../lib/axios.js')
const config = require('../config')

Page({
  data: {
    max: new Array(20),
    successCount: 0
  },
  onLoad() {
    this.data.max.map(() => {
      axios.get(config.host + '/max/server')
        .then(res => {
          this.setData({
            successCount: this.data.successCount + 1
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
})
