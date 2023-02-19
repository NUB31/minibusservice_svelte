import { PrismaClient, type News } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let news: News | null = null;

	try {
		news = await prisma.news.findUnique({
			where: { slug: params.slug }
		});
	} catch (err) {
		console.error(err);

		throw error(503, {
			message: 'Service Unavailable'
		});
	}

	if (!news) {
		throw error(404, {
			message: 'Not fond'
		});
	}

	return {
		news
	};
}
