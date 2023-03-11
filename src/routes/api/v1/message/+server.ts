import { json } from '@sveltejs/kit';
import type { APIResponse } from '$lib/types/APIResponse';
import { db } from '$lib/helpers/db';
import type { Message } from '@prisma/client';
import { sendEmail } from '$lib/helpers/email';
import { SECRET_EMAIL_ADDRESS } from '$env/static/private';

export async function POST({ request }) {
	let res: APIResponse = {
		data: null,
		message: null,
		status: 'error'
	};

	// ------------------------- Notes -------------------------
	// Error handling
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	if (!request.body) {
		res.message = 'Request does not have a body';
		return json(res, { status: 422 });
	}

	let body: { name: any; email: any; phone: any; message: any };

	// Set body variable to the request body
	try {
		// Will error out if JSON is invalid
		body = await request.json();
	} catch (error) {
		// Tell the user if JSON is invalid
		res.message = 'Invalid JSON in body';
		return json(res, { status: 400 });
	}

	// Checks if body contains a name, message and either a phone number or email address
	if (!body.name || !body.message || !body.email) {
		res.message =
			'Body must contain a name, message and an email address. You can also optionally include a phone number';
		return json(res, { status: 422 });
	}

	// ------------------------- Notes -------------------------
	// Insert message into database
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	let result: {
		email_sent: {
			user: boolean;
			owner: boolean;
		};
		database_response: Message | null;
	} = {
		email_sent: {
			user: false,
			owner: false
		},
		database_response: null
	};

	try {
		result.database_response = await db.message.create({
			data: {
				name: body.name,
				message: body.message,
				email: body.email,
				phone: body.phone ? body.phone.toString() : null
			}
		});
	} catch (error) {
		console.error(error);
		res.message = 'There was an error inserting the message to our database';
		return json(res, { status: 500 });
	}

	// ------------------------- Notes -------------------------
	// Send emails to minibusservice and user
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	try {
		// Send email to owner
		result.email_sent.owner = await sendEmail(
			SECRET_EMAIL_ADDRESS,
			'Ny melding fra nettsiden',
			`<ul><li>Navn: ${body.name}</li><li>Epost: ${body.email}</li>${
				body.phone ? `<li>Telefonnummer: ${body.phone}</li>` : ''
			}<li>Melding: ${body.message}</li></ul>`
		);
	} catch (error) {
		console.error(error);
		res.message = 'There was an error sending email to owner';
		return json(res, { status: 500 });
	}

	try {
		// Send email to user
		result.email_sent.user = await sendEmail(
			body.email,
			'Vi har motatt din melding :)',
			`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title></title><style type="text/css">@media only screen and (min-width: 620px) {.u-row {width: 600px !important;}.u-row .u-col {vertical-align: top;}.u-row .u-col-100 {width: 600px !important;}}@media (max-width: 620px) {.u-row-container {max-width: 100% !important;padding-left: 0px !important;padding-right: 0px !important;}.u-row .u-col {min-width: 320px !important;max-width: 100% !important;display: block !important;}.u-row {width: calc(100% - 40px) !important;}.u-col {width: 100% !important;}.u-col > div {margin: 0 auto;}}body {margin: 0;padding: 0;}table,tr,td {vertical-align: top;border-collapse: collapse;}p {margin: 0;}.ie-container table,.mso-container table {table-layout: fixed;}* {line-height: inherit;}a[x-apple-data-detectors='true'] {color: inherit !important;text-decoration: none !important;}table, td { color: #181818; } @media (max-width: 480px) { #u_content_image_4 .v-src-width { width: auto !important; } #u_content_image_4 .v-src-max-width { max-width: 57% !important; } #u_content_heading_3 .v-container-padding-padding { padding: 10px 20px !important; } #u_content_heading_3 .v-font-size { font-size: 28px !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 22px 26px !important; } }</style><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"></head><body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f6f6f6;color: #181818"><table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f6f6f6;width:100%" cellpadding="0" cellspacing="0"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><div class="u-row-container" style="padding: 0px;background-color: transparent"><div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;"><div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"><div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;"><div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]--><table id="u_content_image_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:'Montserrat',sans-serif;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px;padding-left: 0px;" align="center"><img align="center" border="0" src="https://minibusservice.no/src/lib/assets/logos/logo_full_dark.svg" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 300px;" width="300" class="v-src-width v-src-max-width"/></td></tr></table></td></tr></tbody></table></div></div></div></div></div><div class="u-row-container" style="padding: 0px;background-color: transparent"><div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"><div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;"><div style="background-color: #fffefe;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><table id="u_content_heading_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 55px;font-family:'Montserrat',sans-serif;" align="left"><h1 class="v-font-size" style="margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 33px;"><strong><br />Vi har motatt din melding!</strong></h1></td></tr></tbody></table><table id="u_content_text_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 50px;font-family:'Montserrat',sans-serif;" align="left"><div style="color: #444444; line-height: 170%; text-align: center; word-wrap: break-word;"><p style="font-size: 14px; line-height: 170%;">&nbsp;</p><p style="font-size: 14px; line-height: 170%;"><strong><span style="font-size: 16px; line-height: 27.2px;">Hei ${body.name}, dette er en bekreftelese p&aring; at meldingen din har blitt motatt. </span></strong></p><p style="font-size: 14px; line-height: 170%;">&nbsp;</p><p style="font-size: 14px; line-height: 170%; text-align: left;"><strong><span style="font-size: 16px; line-height: 27.2px;">Din melding:</span></strong></p><p style="font-size: 14px; line-height: 170%; text-align: left;"><span style="font-size: 16px; line-height: 27.2px;">${body.message}</span></p><p style="font-size: 14px; line-height: 170%; text-align: left;">&nbsp;</p><p style="font-size: 14px; line-height: 170%; text-align: left;"><strong><span style="font-size: 16px; line-height: 27.2px;">Forvent et svar innen 24 timer</span></strong></p><p style="font-size: 14px; line-height: 170%; text-align: left;">&nbsp;</p><p style="font-size: 14px; line-height: 170%; text-align: center;"><span style="font-size: 16px; line-height: 27.2px;">Denne meldingen ble sendt automatisk av </span><span style="font-size: 16px; line-height: 27.2px;">Minibusservice Stene AS</span></p></div></td></tr></tbody></table></div></div></div></div></div><div class="u-row-container" style="padding: 0px;background-color: transparent"><div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;"><div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;"><div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;"><div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:'Montserrat',sans-serif;" align="left"><div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;"><p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong>Minibusservice Stene AS</strong></span></p></div></td></tr></tbody></table><table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left"><div style="color: #b0b1b4; line-height: 180%; text-align: center; word-wrap: break-word;"><p style="font-size: 14px; line-height: 180%;">Soln&oslash;rdalsvegen 40, 6240 &Oslash;rskog</p><p style="font-size: 14px; line-height: 180%;">45 25 61 61</p></div></td></tr></tbody></table><table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left"><table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="82%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #9495a7;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"><span>&#160;</span></td></tr></tbody></table></td></tr></tbody></table><table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 13px;font-family:'Montserrat',sans-serif;" align="left"><div style="color: #b0b1b4; line-height: 180%; text-align: center; word-wrap: break-word;"><p style="font-size: 14px; line-height: 180%;">&copy; 2015 - 2022 All Rights Reserved</p></div></td></tr></tbody></table></div></div></div></div></div></td></tr></tbody></table></body></html>`
		);
	} catch (error) {
		console.error(error);
		res.message = 'There was an error sending email to user';
		return json(res, { status: 500 });
	}

	// If everything was successfull, respond with a success message
	res.data = result;
	res.status = 'success';
	res.message = 'Message has been sent successfully!';
	return json(res, { status: 201 });
}
