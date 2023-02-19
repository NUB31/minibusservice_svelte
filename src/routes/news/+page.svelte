<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1 class="font-semibold text-xl md:text-2xl">News from us</h1>
	<div class="mt-4">
		{#each data.news as item}
			<div class="w-96">
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
