var express = require('express')
var app = express()
const port = process.env.PORT || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	res.send({
		test: "this is a test"
	})
})

app.listen(port, function () {
	console.log('Example app listening on port 3000!', port)
})