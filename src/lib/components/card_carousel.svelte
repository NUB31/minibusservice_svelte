<script lang="ts">
	import type { CardCarouselItem } from '$lib/types/CardCarouselItem';
	import Card from '$lib/components/card.svelte';
	import Button from '$lib/components/button.svelte';

	export let carouselItems: CardCarouselItem[];

	let index = 0;

	const nextCard = () => {
		index = (index + 1) % carouselItems.length;
	};

	const previousCard = () => {
		index = (index - 1 + carouselItems.length) % carouselItems.length;
	};
</script>

<div style={`--index: ${index}`} class="inline-flex w-full overflow-hidden mt-4 gap-5">
	{#each carouselItems as card}
		<div class="flex shrink-0 w-full sm:w-80 transition-transform carousel ">
			<Card {card} />
		</div>
	{/each}
</div>

<div class="flex justify-between mt-2 md:text-lg">
	<Button on:click={previousCard} width={96}>Previous</Button>
	<Button on:click={nextCard} width={96}>Next</Button>
</div>

<style>
	.carousel {
		transform: translateX(calc((-100% - 20px) * var(--index)));
	}
</style>
