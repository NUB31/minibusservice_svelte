import { PrismaClient, type Ticket } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

/** @type {import('./$types').PageLoad} */

export async function load() {
	let tickets: Ticket[] | null = null;

	try {
		tickets = await prisma.ticket.findMany({
			where: {
				active: true
			},
			orderBy: { created_at: 'desc' }
		});
	} catch (err) {
		console.error(err);

		throw error(503, {
			message: 'Service Unavailable'
		});
	}

	if (tickets.length == 0) {
		throw error(501, {
			message: 'No tickets have been created yet.<br>Please come back later'
		});
	}

	return {
		tickets
	};
}
