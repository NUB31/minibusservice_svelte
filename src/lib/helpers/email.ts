import nodemailer from 'nodemailer';
import { SECRET_EMAIL_ADDRESS, SECRET_EMAIL_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
		user: SECRET_EMAIL_ADDRESS,
		pass: SECRET_EMAIL_PASSWORD
	}
});

export async function sendEmail(to: string, title: string, html: string): Promise<boolean> {
	return new Promise((resolve: (value: boolean) => void) => {
		transporter.sendMail(
			{
				from: SECRET_EMAIL_ADDRESS,
				to: to,
				subject: title,
				html: html
			},
			(error, info) => {
				if (!error) {
					console.log(`Email sent to ${to}:\n` + info.response);
					resolve(true);
				} else {
					resolve(false);
				}
			}
		);
	});
}
