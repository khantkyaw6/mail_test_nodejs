const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'yourmail@gmail.com',
		pass: 'googleapppassword',
	},
});

const mailOptions = {
	from: 'yourmail@gmail.com',
	to: 'sendmailto@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'This is easy',
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});

// bnmg jjkn hwsf lwsc
