const axios = require('../lib/axios.js')
const config = require('../config')

Page({
  data: {
    message: ''
  },
  upload() {
    var self = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths

        const options = {
          url: config.host + '/upload/server',
          uploadFile: 'file',
          data: {
            'title': 'wx-upload',
            'file': tempFilePaths[0]
          },
          method: 'post'
        }
        axios(options)
          .then(res => {
            self.setData({
              message: 'upload success'
            })
          })
          .catch(err => {
            console.error(err)
            self.setData({
              message: 'upload error'
            })
          })
      }
    })
  },
})
