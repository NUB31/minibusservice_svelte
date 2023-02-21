<script lang="ts">
	import ImageCarousel from '$lib/components/image_carousel.svelte';
	// Tour Bus Carousel images
	import taxis from '$lib/assets/images/taxis.jpg';
	import van from '$lib/assets/images/van.webp';
	import { language } from '$lib/stores/language';

	let taxiCarouselItems: string[] = [taxis];

	let packageTaxiCarouselItems: string[] = [van];
</script>

<h1 class="font-semibold text-xl md:text-2xl">
	{#if $language == 'en'}
		Taxi
	{:else}
		Taxi
	{/if}
</h1>

<section id="person" class="mt-4 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">
			{#if $language == 'en'}
				Passenger taxi
			{:else}
				Persontaxi
			{/if}
		</h2>
		<p class="md:text-lg">
			{#if $language == 'en'}
				We have taxis that cover most needs.
				<br />Wheelchair transport, four-wheel drive and fully electric cars are some of our offers.
				<br />Our taxis can take up to 8 passengers
			{:else}
				Vi har taxier som dekker de fleste behov.
				<br />Rullestoltransport, firehjulstrekk og helelektrisk bil er noen av tilbudene våre.
				<br />Taxiene våre kan ta opp til 8 passasjerer
			{/if}
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={taxiCarouselItems} />
	</div>
</section>

<section id="package" class="mt-12 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">
			{#if $language == 'en'}
				Package delivery
			{:else}
				Pakketaxi
			{/if}
		</h2>
		<p class="md:text-lg">
			{#if $language == 'en'}
				We have offers for package delivery. Both small parcels and bulky goods can be transported
			{:else}
				Vi har tilbud om pakketaxi. Både småpakker og volumkrevende gods kan transporteres
			{/if}
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={packageTaxiCarouselItems} />
	</div>
</section>
