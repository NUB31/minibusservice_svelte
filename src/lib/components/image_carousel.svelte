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

<div class="mt-2 border-2 border-light-contrast rounded-md">
	<img class="w-full max-h-52 object-cover" src={carouselItems[index]} alt="" />
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
