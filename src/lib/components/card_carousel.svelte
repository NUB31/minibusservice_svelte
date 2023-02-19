<script lang="ts">
	import type { CardCarouselItem } from '$lib/types/CardCarouselItem';
	import Card from '$lib/components/card.svelte';

	export let carouselItems: CardCarouselItem[];

	let index = 0;

	const nextImage = () => {
		index = (index + 1) % carouselItems.length;
	};

	const previousImage = () => {
		index = (index - 1 + carouselItems.length) % carouselItems.length;
	};
</script>

<div style={`--index: ${index}`} class="inline-flex w-full overflow-hidden mt-4 gap-5">
	{#each carouselItems as card}
		<div class="flex shrink-0 sm:w-80 transition-transform carousel ">
			<Card {card} />
		</div>
	{/each}
</div>

<div class="flex justify-between mt-2 md:text-lg">
	<button
		class="p-2 border-2 border-light-contrast mt-2 w-24 rounded-md transition-colors bg-white hover:bg-light-secondary-background"
		on:click={previousImage}>Previous</button
	>
	<button
		class="p-2 border-2 border-light-contrast mt-2 w-24 rounded-md transition-colors bg-white hover:bg-light-secondary-background"
		on:click={nextImage}>Next</button
	>
</div>

<style>
	.carousel {
		transform: translateX(calc((-100% - 20px) * var(--index)));
	}
</style>
