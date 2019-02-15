/**
 * @file index.js
 * @author tyxp
 */
var axios = require('../../lib/axios.js')

Page({
  data: {
    user: {},
    orgs: []
  },
  onLoad() {
    axios.all([
      axios.get('https://api.github.com/users/mzabriskie'),
      axios.get('https://api.github.com/users/mzabriskie/orgs')
    ]).then(axios.spread((user, orgs) => {
      this.setData({
        user: user.data,
        orgs: orgs.data
      })
    })).catch(err => {
      console.log(err)
    })
  }
})
