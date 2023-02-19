<script lang="ts">
	import ImageCarousel from '$lib/components/image_carousel.svelte';
	// Tour Bus Carousel images
	import taxis from '$lib/assets/images/taxis.jpg';
	import van from '$lib/assets/images/van.webp';

	let taxiCarouselItems: string[] = [taxis];

	let packageTaxiCarouselItems: string[] = [van];
</script>

<h1 class="font-semibold text-2xl">Taxi</h1>

<section class="mt-4" id="person">
	<h2 class="font-semibold">Persontaxi</h2>
	<p>
		Vi har taxier som dekker de fleste behov.<br />Rullestoltransport, firehjulstrekk og
		helelektrisk bil er noen av tilbudene våre.<br />Taxiene våre kan ta opp til 8 passasjerer.
	</p>

	<ImageCarousel carouselItems={taxiCarouselItems} />
</section>

<section class="mt-8" id="package">
	<h2 class="font-semibold">Pakketaxi</h2>
	<p>Vi har tilbud om pakketaxi. Både småpakker og volumkrevende gods kan transporteres.</p>

	<ImageCarousel carouselItems={packageTaxiCarouselItems} />
</section>
