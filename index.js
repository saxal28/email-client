var express = require('express')
var app = express()
const port = process.env.PORT || 3084;

var bodyParser = require('body-parser')
var emails = require("./emails/emails");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

// var MongoClient = require('mongodb').MongoClient
// var db;

// MongoClient.connect("mongodb://alan:gatorade2@ds161630.mlab.com:61630/brenda-website", (err, data) => {
// 	return db = data;
// })


app.get('/', function (req, res) {
	res.send('hello world')
})

app.get("/test-email", function(req, res) {
	console.log(req.body)
	emails.sendEmail()

	res.send("email sent" )
})

app.post("/email/contact", function(req, res) {

	emails.sendEmail(req.body)

	res.send("email sent")

})


app.listen(port, function() {
	console.log('Server Started on Port', port)
})