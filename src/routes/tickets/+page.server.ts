import { PrismaClient, type Ticket_Group } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

/** @type {import('./$types').PageLoad} */

export async function load() {
	let ticketGroups: Ticket_Group[] | null = null;

	try {
		ticketGroups = await prisma.ticket_Group.findMany({
			where: {
				active: true
			},
			orderBy: { created_at: 'desc' },
			include: {
				Tickets: {
					where: {
						active: true
					}
				}
			}
		});
	} catch (err) {
		console.error(err);

		throw error(503, {
			message: 'Service Unavailable'
		});
	}

	if (ticketGroups.length == 0) {
		throw error(501, {
			message: 'No tickets have been created yet.<br>Please come back later'
		});
	}

	return {
		ticketGroups
	};
}
