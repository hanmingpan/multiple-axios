module.exports = function(req, res) {
  var chunks = [];
  var size = 0;
  req.on('data', function(chunk) {
    chunks.push(chunk);
    size += chunk.length;
  });
  req.on('end', function() {
    var buffer = Buffer.concat(chunks, size);
    console.log('upload', buffer.toString());
  });
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify({ message: 'ok' }));
  res.end();
};
