var express = require('express')
var app = express()
const port = process.env.PORT || 3084;

const isLocal = process.env.PORT ?  "http://www.happilyeverafterstl.com/" : 'http://localhost:3084'

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

app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', isLocal);

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});


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