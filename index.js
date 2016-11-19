var express = require('express');
var app = express();
var balajiProducts = require('./mock_balaji.json');
var leslieProducts = require('./mock_leslie.json');

// test response to ensure that the server is live
app.get('/', function(req, res){
	res.send('Server is live');
});

app.get('/search/:str', function(req,res) {
	retobjects = [];
	for (obj in balajiProducts['data']) {
		if (balajiProducts['data'][obj]['name'].toLowerCase().indexOf(req.params.str.toLowerCase()) > -1) {
			retobjects.push(balajiProducts['data'][obj]);
		}
	}

	for (obj in leslieProducts['data']) {
		if (leslieProducts['data'][obj]['name'].toLowerCase().indexOf(req.params.str.toLowerCase()) > -1) {
			retobjects.push(leslieProducts['data'][obj]);
		}
	}

	res.send(JSON.stringify(retobjects));
});

app.listen(8080);