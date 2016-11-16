var express = require('express');
var app = express();


// test response to ensure that the server is live
app.get('/', function(req, res){
	res.send('Server is live');
});

app.listen(8080);