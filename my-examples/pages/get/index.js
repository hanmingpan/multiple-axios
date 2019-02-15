import axios from '../../lib/axios'
import config from '../../config'

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
});
