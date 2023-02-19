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
	import Card from '$lib/components/card.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

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

<div class="flex gap-8">
	<div class="overflow-hidden">
		<section>
			<img
				src={header_image}
				class="border-2 border-light-contrast rounded-md"
				alt="Minibusses lined up in a row"
			/>

			<h1 class="font-semibold mt-4 text-xl md:text-2xl">
				Med komfort og sikkerhet i førersetet<br />Bli med på en trygg og behagelig tur
			</h1>

			<p class="opacity-70 font-medium mt-2 md:text-lg">
				Minibusservice Stene AS driver personbefordring med taxi, minibuss og busser.<br />Vi har
				lang erfaring og finner gode løsninger for kundene våre. <br />Kontraktskjøring for
				helseforetak, busselskap og kommune utgjør størsteparten av oppdragene våre, men vi tilbyr
				også turer for privatpersoner, bedrifter og turister.<br />Vi er godkjent lærebedrift og
				setter kunden og miljøet i fokus. Vi har både elektriske, hybride og dieselkjøretøy i flåten
			</p>
		</section>

		<section class="mt-12">
			<h1 class="font-semibold text-xl md:text-2xl">Our services</h1>
			<CardCarousel {carouselItems} />
		</section>

		<section class="mt-12">
			<h1 class="font-semibold text-xl md:text-2xl">Contact us</h1>
			<ContactForm />
		</section>
	</div>

	<section class="w-60 shrink-0">
		<div class="sticky top-24">
			<h2 class="text-lg md:text-xl font-semibold text-center">Nytt fra oss</h2>
			<div class="max-h-[calc(100vh-140px)] flex flex-col gap-4 overflow-y-scroll mt-4">
				{#each data.news as item}
					<Card
						card={{
							header: item.title,
							image: item.image,
							text: item.short_text,
							url: `/news/${item.slug}`
						}}
					/>
				{/each}
			</div>
		</div>
	</section>
</div>
