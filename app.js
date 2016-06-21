var express = require('express');
var app = express();
app.use(express.static(__dirname + '/node_modules/@dosomething/forge/dist'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
