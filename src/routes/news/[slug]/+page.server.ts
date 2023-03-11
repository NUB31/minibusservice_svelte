import { db } from '$lib/helpers/db';
import type { News } from '@prisma/client';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let news: News | null = null;

	try {
		news = await db.news.findUnique({
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
