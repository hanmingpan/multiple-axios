# multiple-axios

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)
[![build status](https://img.shields.io/travis/axios/axios.svg?style=flat-square)](https://travis-ci.org/axios/axios)
[![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/axios)

多端通用的请求库，在axios的基础上，支持小程序的请求。

## Features

- base axios@0.19.0
- 支持浏览器，node，微信小程序，百度智能小程序
- api方法与axios一致
- 小程序暂不支持上传，下载功能

## Case

- 适合小程序各种框架，`wepy`，`mpvue`，`taro`

## Usage

Install multiple-axios.js using npm:

```bash
$ npm install multiple-axios
```

Performing a `GET` request

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

## Document

[API](https://github.com/hanmingpan/multiple-axios/blob/master/README-AXIOS.md)


## Support
|         | browser |   node  |   微信   |   百度  |
| ------- | ------- | ------- | ------- | ------- |
| upload | ✔ | ✔ | ✘ | ✘ |
| download | ✔ | ✔ | ✘ | ✘ |
| timeout | ✔ | ✔ | ✘ | ✘ |
| dataType | ✘ | ✘ | ✔ | ✔ |
| responseType | ✘ | ✘ | ✔ | ✔ |
| withCredentials | ✔ | ✔ | ✘ | ✘ |
| auth | ✔ | ✔ | ✘ | ✘ |
| xsrfCookieName | ✔ | ✔ | ✘ | ✘ |
| xsrfHeaderName | ✔ | ✔ | ✘ | ✘ |
| onUploadProgress | ✔ | ✔ | ✘ | ✘ |
| onDownloadProgress | ✔ | ✔ | ✘ | ✘ |
| maxContentLength | ✔ | ✔ | ✘ | ✘ |
| maxRedirects | ✔ | ✔ | ✘ | ✘ |
| httpAgent | ✔ | ✔ | ✘ | ✘ |
| httpsAgent | ✔ | ✔ | ✘ | ✘ |
| proxy | ✔ | ✔ | ✘ | ✘ |

## More

- 由于支付宝暂不支持请求本地服务，期待支持
- 快应用调研中

## License

MIT
