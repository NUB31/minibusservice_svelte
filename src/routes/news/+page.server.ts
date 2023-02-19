import { PrismaClient, type News } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

/** @type {import('./$types').PageLoad} */

export async function load() {
	let news: News[] | null = null;

	try {
		news = await prisma.news.findMany({
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

	if (news.length == 0) {
		throw error(501, 'No news have been created yet.<br>Please come back later');
	}

	return {
		news
	};
}
