var http = require('http');

var options = {
  host: 'hacker-olympics-london.herokuapp.com',
  port: 80,
  path: '/leaderboard.json',
  method: 'GET'
};

console.log("Server started");

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
  res.on('end', function() {
    console.log("That's all folks!");
  });
}).end();
