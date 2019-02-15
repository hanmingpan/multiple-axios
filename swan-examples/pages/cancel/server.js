var people = [
  {
    "name": "Matt Zabriskie",
    "github": "mzabriskie",
    "twitter": "mzabriskie",
    "avatar": "199035"
  }
];

module.exports = function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(people));
    res.end();
  }, 10 * 1000)
};
