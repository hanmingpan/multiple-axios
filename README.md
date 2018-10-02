# multiple-axios

在axios的基础上，增加小程序的请求方法。

## Features

- base axios@0.19.0-beta.1
- api方法与axios一致
- 支持浏览器，node，微信小程序
- 目前仅增加微信小程序request
- 暂未加入上传，下载功能

## case

适合一套代码生成多端复用的场景，例如`mpvue`,`taro`

## install

Using npm:

```bash
$ npm install multiple-axios
```

## Example

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

## 微信小程序不支持的选项

* `timeout`
* `withCredentials`
* `auth`
* `xsrfCookieName`
* `xsrfHeaderName`
* `onUploadProgress`
* `onDownloadProgress`
* `maxContentLength`
* `maxRedirects`
* `httpAgent`
* `httpsAgent`
* `proxy`


## more

未来还会增加支付宝，百度等小程序，真正实现一库多用。

## License

MIT
