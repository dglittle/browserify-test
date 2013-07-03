
var _ = require('gl519')
_.run(function () {

	var express = require('express')
	var app = express()

	app.get('/', function (req, res) {
        res.sendfile('./index.html')
	})

	app.listen(5000, function() {
		console.log("go to localhost:5000")
	})
})
