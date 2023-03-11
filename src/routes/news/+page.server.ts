import { db } from '$lib/helpers/db';
import type { News } from '@prisma/client';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ url }: any) {
	let page: number | null = 1;
	let news: News[] | null = null;
	let count: number | null = null;

	try {
		let pageParam = url.searchParams.get('page');
		if (pageParam) {
			let pageParamAsNumber = Number(pageParam);
			if (!isNaN(pageParamAsNumber)) {
				page = pageParamAsNumber;
			}
		}

		count = await db.news.count();
		news = await db.news.findMany({
			where: {
				active: true
			},
			skip: 10 * (page - 1),
			take: 10,
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
		news,
		newsCount: count
	};
}
