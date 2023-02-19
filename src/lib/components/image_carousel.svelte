<script lang="ts">
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
			class="flex shrink-0 flex-col border-2 w-full sm:w-96 border-light-contrast rounded-md carousel transition-transform overflow-hidden"
		>
			<img class="w-full object-cover" src={image} alt="" />
		</div>
	{/each}
</div>

{#if carouselItems.length > 1}
	<div class="flex justify-between mt-2">
		<button
			class="p-2 border-2 border-light-contrast mt-2 w-24 rounded-md transition-colors bg-white hover:bg-light-secondary-background"
			on:click={previousImage}>Previous</button
		>
		<button
			class="p-2 border-2 border-light-contrast mt-2 w-24 rounded-md transition-colors bg-white hover:bg-light-secondary-background"
			on:click={nextImage}>Next</button
		>
	</div>
{/if}

<style>
	.carousel {
		transform: translateX(calc((-100% - 20px) * var(--index)));
	}
</style>
