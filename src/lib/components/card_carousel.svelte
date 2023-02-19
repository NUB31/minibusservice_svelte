<script lang="ts">
	import type { CardCarouselItem } from '$lib/types/CardCarouselItem';

	export let carouselItems: CardCarouselItem[];

	let index = 0;

	const nextImage = () => {
		index = (index + 1) % carouselItems.length;
	};

	const previousImage = () => {
		index = (index - 1 + carouselItems.length) % carouselItems.length;
	};
</script>

<div class="mt-2 border-2 border-light-contrast rounded-md">
	<img
		class="w-full max-h-52 object-cover border-b-2 border-light-contrast"
		src={carouselItems[index].image}
		alt=""
	/>
	<div class="p-4">
		<h3 class="font-semibold">
			{carouselItems[index].header}
		</h3>
		<p>
			{carouselItems[index].text}
		</p>
		<div class="mt-2">
			<a class="font-semibold" href={carouselItems[index].url}>Read more...</a>
		</div>
	</div>
</div>
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
