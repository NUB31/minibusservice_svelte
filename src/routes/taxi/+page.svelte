<script lang="ts">
	import ImageCarousel from '$lib/components/image_carousel.svelte';
	// Tour Bus Carousel images
	import taxis from '$lib/assets/images/taxis.jpg';
	import van from '$lib/assets/images/van.webp';

	let taxiCarouselItems: string[] = [taxis];

	let packageTaxiCarouselItems: string[] = [van];
</script>

<h1 class="font-semibold text-xl md:text-2xl">Taxi</h1>

<section id="person" class="mt-4 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">Persontaxi</h2>
		<p class="md:text-lg">
			Vi har taxier som dekker de fleste behov.<br />Rullestoltransport, firehjulstrekk og
			helelektrisk bil er noen av tilbudene våre.<br />Taxiene våre kan ta opp til 8 passasjerer
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={taxiCarouselItems} />
	</div>
</section>

<section id="package" class="mt-12 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">Pakketaxi</h2>
		<p class="md:text-lg">
			Vi har tilbud om pakketaxi. Både småpakker og volumkrevende gods kan transporteres
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={packageTaxiCarouselItems} />
	</div>
</section>
