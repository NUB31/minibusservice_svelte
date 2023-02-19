<script lang="ts">
	import ImageCarousel from '$lib/components/image_carousel.svelte';
	// Tour Bus Carousel images
	import singleRampLeftClosed from '$lib/assets/images/single_ramp_left_closed.jpg';
	import singleRampRightClosed from '$lib/assets/images/single_ramp_right_closed.jpg';
	import threeRampsOpen from '$lib/assets/images/three_ramps_open.jpg';

	let rampCarouselItems: string[] = [singleRampLeftClosed, singleRampRightClosed, threeRampsOpen];
</script>

<h1 class="font-semibold text-2xl">Rullestol</h1>

<section class="mt-4">
	<h2 class="font-semibold">Sitter du i rullestol?</h2>
	<p>
		Vi har flere busser med rullestolstøtte, med kapasitet opp til 2 rullestoler per buss.
		<br />Total kapasitet er 5 rullestilbrukere fordelt på 3 busser
	</p>
	<ImageCarousel carouselItems={rampCarouselItems} />
</section>
