# multiple-axios

在axios的基础上，增加小程序的请求方法

## Features

- base axios@0.19.0-beta.1
- add adapters/wxrequest.js
- api方法一致

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

### 不支持的选项

注：由于小程序的请求功能有限, 所以不支持以下选项.

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


## License

MIT
