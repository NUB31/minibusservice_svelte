<script lang="ts">
	import ImageCarousel from '$lib/components/image_carousel.svelte';
	// Minibus Carousel images
	import threeBusses from '$lib/assets/images/three_busses.jpg';
	import twoBusses from '$lib/assets/images/two_busses.jpg';
	import fiveBusses from '$lib/assets/images/five_busses.jpg';
	import singleRampLeftClosed from '$lib/assets/images/single_ramp_left_closed.jpg';
	import threeRampsOpen from '$lib/assets/images/three_ramps_open.jpg';
	// Tour Bus Carousel images
	import twoTourBuses from '$lib/assets/images/two_tour_busses.jpg';
	import tourBusSide from '$lib/assets/images/tour_bus_side.jpg';
	import tourBusSideLogo from '$lib/assets/images/tour_bus_side_logo.jpg';

	let minibusCarouselItems: string[] = [
		threeBusses,
		twoBusses,
		fiveBusses,
		singleRampLeftClosed,
		threeRampsOpen
	];

	let tourBusCarouselItems: string[] = [twoTourBuses, tourBusSide, tourBusSideLogo];
</script>

<h1 class="font-semibold text-xl md:text-2xl">Buss</h1>

<section id="minibus" class="mt-4 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">Minibusser</h2>
		<p class="md:text-lg">
			Vi har idag fire minibusser, to Mercedes Sprinter og to Ford Transitt. Vi har også en
			fullelektrisk Mercedes EQV og en Mitsubishi Outlander.<br />Vi finner løsninger for grupper
			fra 5 - 32 passasjerer med støtte for inntil 3 rullestolbrukere samtidig
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={minibusCarouselItems} />
	</div>
</section>

<section id="tour" class="mt-12 md:flex justify-between gap-5">
	<div>
		<h2 class="font-semibold grow text-lg md:text-xl">Turbusser</h2>
		<p class="md:text-lg">
			Vi er medeiger i Storfjord Turbuss AS som har tre turbusser.<br />Storfjord Turbuss AS ble
			etablert i 2018, og vi utfører turkjøring og lager pakkeløsninger etter dine ønsker og behov.<br
			/>Vår målsetning er å alltid være det naturlige førstevalget av transportør
		</p>
	</div>
	<div class="md:w-96">
		<ImageCarousel carouselItems={tourBusCarouselItems} />
	</div>
</section>
