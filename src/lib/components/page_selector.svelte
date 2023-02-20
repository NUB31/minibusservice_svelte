<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/button.svelte';

	export let maxItems: number;

	let pageParam = $page.url.searchParams.get('page');
	let currentPage = 1;
	if (pageParam) {
		let pageParamAsNumber = Number(pageParam);
		if (pageParamAsNumber) {
			currentPage = pageParamAsNumber;
		}
	}
</script>

<section class="flex justify-center mt-8 gap-5">
	{#if currentPage > 1}
		<a
			on:click={() =>
				setTimeout(() => {
					currentPage = currentPage - 1;
				}, 10)}
			href={`?page=${currentPage - 1}`}
		>
			<Button width={120}>Previous</Button>
		</a>
	{/if}
	{#if (currentPage + 1) * 10 - 10 < maxItems}
		<a
			on:click={() =>
				setTimeout(() => {
					currentPage = currentPage + 1;
				}, 10)}
			href={`?page=${currentPage + 1}`}
		>
			<Button width={120}>Next</Button>
		</a>
	{/if}
</section>
