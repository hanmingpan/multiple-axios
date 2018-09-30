var people = [
  {
    "name": "Matt Zabriskie",
    "github": "mzabriskie",
    "twitter": "mzabriskie",
    "avatar": "199035"
  }
];

module.exports = function (req, res) {
  var randomTime = Math.random() * 5000
  setTimeout(function () {
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(people));
    res.end();
  }, randomTime)
};
