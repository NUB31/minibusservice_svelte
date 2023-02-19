<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1 class="font-semibold text-xl md:text-2xl">News from us</h1>
	<div class="mt-4 flex flex-wrap gap-5">
		{#each data.news as item}
			<div class="grow">
				<Card
					card={{
						header: item.title,
						image: item.image,
						text: item.short_text,
						url: `/news/${item.slug}`
					}}
				/>
			</div>
		{/each}
	</div>
</section>
