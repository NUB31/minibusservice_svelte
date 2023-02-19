<script lang="ts">
	// Header image
	import header_image from '$lib/assets/images/header_image.jpg';
	// Carousel images
	import threeBusses from '$lib/assets/images/three_busses.jpg';
	import taxis from '$lib/assets/images/taxis.jpg';
	import wheelchairRamps from '$lib/assets/images/three_ramps_open.jpg';
	import twoTourBusses from '$lib/assets/images/two_tour_busses.jpg';
	import van from '$lib/assets/images/van.webp';
	// Components
	import ContactForm from '$lib/components/contact_form.svelte';
	import CardCarousel from '$lib/components/card_carousel.svelte';
	import type { CardCarouselItem } from '$lib/types/CardCarouselItem';

	const carouselItems: CardCarouselItem[] = [
		{
			image: threeBusses,
			header: 'Minibusstransport',
			text: 'Vi har 4 minibusser i ulike størelser',
			url: '/bus#minibus'
		},
		{
			image: taxis,
			header: 'Taxikjøring',
			text: 'Vi kjører taxi med kapasitet opptil 8 perosner. Klikk her for mer info',
			url: '/taxi#person'
		},
		{
			image: wheelchairRamps,
			header: 'Rullestoltransport',
			text: 'Fire av våre biler er rullestoltilpasset med plass til inntil 3 rullestoler',
			url: '/wheelchair'
		},
		{
			image: twoTourBusses,
			header: 'Storbuss',
			text: 'Vi er medeier i Storfjord Turbuss AS, som har tre moderne turbusser for inntil 50 personer',
			url: '/bus#tour'
		},
		{
			image: van,
			header: 'Pakketaxi',
			text: 'Vi har tilbud om pakketaxi. Både småpakker og volumkrevende gods kan transporteres',
			url: '/taxi#package'
		}
	];
</script>

<section>
	<img src={header_image} alt="Minibusses lined up in a row" />

	<h1 class="font-semibold mt-4 text-2xl">
		Med komfort og sikkerhet i førersetet Bli med på en trygg og behagelig tur
	</h1>

	<p class="opacity-70 font-medium mt-2">
		Minibusservice Stene AS driver personbefordring med taxi, minibuss og busser.<br />Vi har lang
		erfaring og finner gode løsninger for kundene våre. <br />Kontraktskjøring for helseforetak,
		busselskap og kommune utgjør størsteparten av oppdragene våre, men vi tilbyr også turer for
		privatpersoner, bedrifter og turister.<br />Vi er godkjent lærebedrift og setter kunden og
		miljøet i fokus. Vi har både elektriske, hybride og dieselkjøretøy i flåten.
	</p>
</section>

<section>
	<h1 class="font-semibold mt-8 text-2xl ">Our services</h1>
	<CardCarousel {carouselItems} />
</section>

<section>
	<h1 class="font-semibold mt-8 text-2xl">Contact us</h1>
	<ContactForm />
</section>
