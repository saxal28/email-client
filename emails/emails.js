var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'saxal28@gmail.com',
		pass: 'Avenger2'
	}
});

module.exports = {
	sendEmail: function(req) {

		const {from, to, subject, text} = req

		var mailOptions = {
			from: "Kevin",
			to,
			subject,
			text,
		};

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				return console.log(error);
			}
			console.log('Message %s sent: %s', info.messageId, info.response);
		});
	}
}