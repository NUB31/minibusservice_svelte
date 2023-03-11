import { db } from '$lib/helpers/db';
import type { Ticket_Group } from '@prisma/client';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ url }: any) {
	let page: number | null = 1;
	let ticketGroups: Ticket_Group[] | null = null;
	let count: number | null = null;

	try {
		let pageParam = url.searchParams.get('page');
		if (pageParam) {
			let pageParamAsNumber = Number(pageParam);
			if (!isNaN(pageParamAsNumber)) {
				page = pageParamAsNumber;
			}
		}

		count = await db.ticket_Group.count();
		ticketGroups = await db.ticket_Group.findMany({
			where: {
				active: true
			},
			orderBy: { created_at: 'desc' },
			skip: 10 * (page - 1),
			take: 10,
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
		ticketGroups,
		ticketGroupCount: count
	};
}
