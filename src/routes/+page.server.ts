import { db } from '$lib/helpers/db';
import type { News } from '@prisma/client';

/** @type {import('./$types').PageLoad} */

export async function load() {
	let news: News[] | null = null;

	try {
		news = await db.news.findMany({
			where: {
				active: true
			},
			take: 7,
			orderBy: { created_at: 'desc' }
		});
	} catch (err) {
		console.error(err);
	}

	return {
		news
	};
}
