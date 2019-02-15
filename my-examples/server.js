var fs = require('fs');
var path = require('path');
var http = require('http');
var argv = require('minimist')(process.argv.slice(2));
var config = require('./config')
var server;
var dirs;

function listDirs(root) {
  var files = fs.readdirSync(root);
  var dirs = [];

  for (var i=0, l=files.length; i<l; i++) {
    var file = files[i];
    if (file[0] !== '.') {
      var stat = fs.statSync(path.join(root, file));
      if (stat.isDirectory()) {
        dirs.push(file);
      }
    }
  }

  return dirs;
}

function sendResponse(res, statusCode, body) {
  res.writeHead(statusCode);
  res.write(body);
  res.end();
}

function send200(res, body) {
  sendResponse(res, 200, body || '<h1>OK</h1>');
}

function send404(res, body) {
  sendResponse(res, 404, body || '<h1>Not Found</h1>');
}

dirs = listDirs(__dirname + '/pages');

server = http.createServer(function (req, res) {
  var url = req.url;

  // Process server request
  if (new RegExp('(' + dirs.join('|') + ')\/server').test(url)) {
    if (fs.existsSync(path.join(__dirname + '/pages', url + '.js'))) {
      require(path.join(__dirname + '/pages', url + '.js'))(req, res);
    } else {
      send404(res);
    }
  }
  else {
    send404(res);
  }
});

server.listen(argv.p || config.port);
