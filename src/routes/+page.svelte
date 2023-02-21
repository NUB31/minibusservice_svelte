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
	// Stores
	import { language } from '$lib/stores/language';
	// From +page.ts
	import type { PageData } from './$types';

	export let data: PageData;

	let carouselItems: CardCarouselItem[] = [];

	$: carouselItems = [
		{
			image: threeBusses,
			header: `${$language == 'en' ? 'Minibus transport' : 'Minibusstransport'}`,
			text: `${
				$language == 'en'
					? 'We got four minibusses in differing sizes'
					: 'Vi har 4 minibusser i ulike størelser'
			}`,
			url: '/bus#minibus'
		},
		{
			image: taxis,
			header: `${$language == 'en' ? 'Taxi transport' : 'Taxikjøring'}`,
			text: `${
				$language == 'en'
					? 'We drive taxis with a capacity of up to 8 people'
					: 'Vi kjører taxi med kapasitet opptil 8 perosner'
			}`,
			url: '/taxi#person'
		},
		{
			image: wheelchairRamps,
			header: `${$language == 'en' ? 'Wheelchair transport' : 'Rullestoltransport'}`,
			text: `${
				$language == 'en'
					? 'Four of our cars are wheelchair accessible with room for up to 3 wheelchairs'
					: 'Fire av våre biler er rullestoltilpasset med plass til inntil 3 rullestoler'
			}`,
			url: '/wheelchair'
		},
		{
			image: twoTourBusses,
			header: `${$language == 'en' ? 'Tour bus' : 'Turbuss'}`,
			text: `${
				$language == 'en'
					? 'We are co-owners of Storfjord Turbuss AS, which has three modern tour buses for up to 50 people'
					: 'Vi er medeier i Storfjord Turbuss AS, som har tre moderne turbusser for inntil 50 personer'
			}`,
			url: '/bus#tour'
		},
		{
			image: van,
			header: `${$language == 'en' ? 'Package delivery' : 'Pakketaxi'}`,
			text: `${
				$language == 'en'
					? 'We have offers for package transport. Both small parcels and bulky goods can be transported'
					: 'Vi har tilbud om pakketaxi. Både småpakker og volumkrevende gods kan transporteres'
			}`,
			url: '/taxi#package'
		}
	];
</script>

<div class="flex gap-8">
	<div class="overflow-hidden">
		<section>
			<img
				src={header_image}
				class="border-2 rounded-md border-light-border dark:border-dark-border"
				alt="Minibusses lined up in a row"
			/>

			<h1 class="font-semibold mt-4 text-xl md:text-2xl">
				{#if $language == 'en'}
					With comfort and safety in the driver's seat<br />Join us for a safe and comfortable trip
				{:else}
					Med komfort og sikkerhet i førersetet<br />Bli med på en trygg og behagelig tur
				{/if}
			</h1>
			<p class="opacity-70 font-medium mt-2 md:text-lg">
				{#if $language == 'en'}
					Minibusservice Stene AS operates passenger transport by taxi, minibus and buses.
					<br />We have extensive experience and find good solutions for our customers.
					<br />Contract driving for healthcare organisations, bus companies and municipalities make
					up the majority of our assignments, but we also offer trips for private individuals,
					companies and tourists.
					<br />We are an approved apprenticeship company and focus on the customer and the
					environment. We have both electric, hybrid and diesel vehicles in the fleet
				{:else}
					Minibusservice Stene AS driver personbefordring med taxi, minibuss og busser.
					<br />Vi har lang erfaring og finner gode løsninger for kundene våre.
					<br />Kontraktskjøring for helseforetak, busselskap og kommune utgjør størsteparten av
					oppdragene våre, men vi tilbyr også turer for privatpersoner, bedrifter og turister.
					<br />Vi er godkjent lærebedrift og setter kunden og miljøet i fokus. Vi har både
					elektriske, hybride og dieselkjøretøy i flåten
				{/if}
			</p>
		</section>

		<section class="mt-12">
			<h1 class="font-semibold text-xl md:text-2xl">
				{#if $language == 'en'}
					Our services
				{:else}
					Våre tenester
				{/if}
			</h1>

			<CardCarousel {carouselItems} />
		</section>

		<section class="mt-12">
			<h1 class="font-semibold text-xl md:text-2xl">
				{#if $language == 'en'}
					Contact us
				{:else}
					Kontakt oss
				{/if}
			</h1>
			<ContactForm />
		</section>
	</div>

	{#if data.news && data.news.length != 0}
		<section class="w-60 shrink-0 hidden lg:block">
			<div
				class="sticky top-24 rounded-md border-2 p-2 bg-light-secondary-background border-light-border dark:bg-dark-secondary-background dark:border-dark-border"
			>
				<h2 class="text-lg md:text-xl font-semibold text-center">
					{#if $language == 'en'}
						News
					{:else}
						Nytt fra oss
					{/if}
				</h2>
				<div class="max-h-[calc(100vh-190px)] flex flex-col gap-4 overflow-y-scroll mt-4">
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
	{/if}
</div>
