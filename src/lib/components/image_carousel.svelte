<script lang="ts">
	import Button from './button.svelte';

	export let carouselItems: string[];

	let index = 0;

	const nextImage = () => {
		index = (index + 1) % carouselItems.length;
	};

	const previousImage = () => {
		index = (index - 1 + carouselItems.length) % carouselItems.length;
	};
</script>

<div style={`--index: ${index}`} class="inline-flex w-full overflow-hidden mt-2 gap-5">
	{#each carouselItems as image}
		<div
			class="flex shrink-0 flex-col border-2 w-full sm:w-96 rounded-md carousel transition-transform overflow-hidden border-light-contrast dark:border-dark-contrast"
		>
			<img class="w-full object-cover" src={image} alt="" />
		</div>
	{/each}
</div>

{#if carouselItems.length > 1}
	<div class="flex justify-between mt-2">
		<Button on:click={previousImage} width={96}>Previous</Button>
		<Button on:click={nextImage} width={96}>Next</Button>
	</div>
{/if}

<style>
	.carousel {
		transform: translateX(calc((-100% - 20px) * var(--index)));
	}
</style>
