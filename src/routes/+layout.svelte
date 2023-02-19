<script lang="ts">
	import '../app.css';
	import logoFull from '$lib/assets/logos/logo_full.svg';
	import homeIcon from '$lib/assets/icons/home_icon.svg';
	import newsIcon from '$lib/assets/icons/news_icon.svg';
	import contactIcon from '$lib/assets/icons/contact_icon.svg';
	import ticketIcon from '$lib/assets/icons/ticket_icon.svg';
	import busIcon from '$lib/assets/icons/bus_icon.svg';
	import menuIcon from '$lib/assets/icons/hamburger_icon.svg';
	import closeIcon from '$lib/assets/icons/close_icon.svg';

	import { page } from '$app/stores';

	let menuOpen = false;

	function toggleMenuOpen() {
		menuOpen = !menuOpen;
	}

	let pages = [
		{
			url: '/',
			text: 'Home',
			required: true,
			icon: homeIcon
		},
		{
			url: '/news',
			text: 'News',
			required: true,
			icon: newsIcon
		},
		{
			url: '/tickets',
			text: 'Tickets',
			required: true,
			icon: ticketIcon
		},
		{
			url: '/bus',
			text: 'Bus',
			required: true,
			icon: busIcon
		},
		{
			url: '/taxi',
			text: 'Taxi',
			required: false,
			icon: null
		},
		{
			url: '/wheelchair',
			text: 'Wheelchair',
			required: false,
			icon: null
		},
		{
			url: '/contact',
			text: 'Contact us',
			required: true,
			icon: contactIcon
		}
	];
</script>

<div class="flex flex-col min-h-screen">
	<header
		class="sticky top-0 z-50 shadow-lg bg-white text-light-contrast h-16 flex justify-center border-b-2 border-light-contrast"
	>
		<div class="max-w-7xl w-full flex flex-row p-4">
			<img src={logoFull} alt="Minibusservice Logo" />
			<div class="flex justify-end items-center grow">
				<ul
					class="hidden lg:flex flex-row grow gap-10 uppercase font-medium md:text-lg justify-end"
				>
					{#each pages.filter((page) => page.required) as link}
						<li>
							<a
								class={`${
									`/${$page.url.pathname.split('/')[1]}` == link.url && 'border-b-2'
								} border-b-0 border-light-accent`}
								href={link.url}>{link.text}</a
							>
						</li>
					{/each}
				</ul>
				<button class="ml-20" on:click={toggleMenuOpen}>
					<img
						src={menuOpen ? closeIcon : menuIcon}
						alt={menuOpen ? 'Close side menu' : 'Open side menu'}
						class="w-8"
					/>
				</button>
			</div>
		</div>
	</header>
	<nav
		class={`bg-white w-56 lg:w-96 h-full transition-transform fixed top-16 right-0 bottom-14 sm:bottom-0 z-40 shadow-lg px-4 py-8 border-l-2 border-light-contrast ${
			menuOpen ? 'translate-x-0' : 'translate-x-56 lg:translate-x-96'
		}`}
	>
		<ul class="text-lg lg:text-xl font-medium flex flex-col gap-2">
			{#each pages as link}
				<li>
					<a
						class={`${
							`/${$page.url.pathname.split('/')[1]}` == link.url && 'border-b-2'
						} border-b-0 border-light-accent`}
						href={link.url}>{link.text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Main Content -->
	<main class="p-4 pb-16 pt-8 bg-light-background text-light-contrast z-0 grow flex">
		<div class="mx-auto w-full max-w-7xl grow">
			<slot />
		</div>
	</main>

	<footer class="bg-light-contrast text-light-background px-2 py-8 flex flex-col items-center">
		<div class="flex flex-row flex-wrap gap-8 justify-center text-center md:text-lg">
			<ul class="flex-1">
				<li><h6 class="font-semibold uppercase">Pages</h6></li>
				{#each pages as link}
					<li><a href={link.url}>{link.text}</a></li>
				{/each}
			</ul>
			<ul class="flex-1">
				<li><h6 class="font-semibold uppercase">Help</h6></li>
				<li><a href="/contact">Contact us</a></li>
				<li><a href="/privacy">Privacy Policy</a></li>
				<li><a href="/sale-conditions">Conditions Of Sale</a></li>
				<li><a href="/settings">Settings</a></li>
			</ul>
			<ul class="flex-1">
				<li><h6 class="font-semibold uppercase">Minibusservice</h6></li>
				<li><a href="/about">About Us</a></li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/MinibusserviceSteneAS/"
						>Facebook</a
					>
				</li>
				<li><a href="mailto:minibusstur@hotmail.com">Email</a></li>
				<li><a href="tel:45256161">Phone</a></li>
			</ul>
			<ul class="flex-1">
				<li><h6 class="font-semibold uppercase">Contact us</h6></li>
				<li><a href="/contact">Contact page</a></li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/MinibusserviceSteneAS/"
						>Facebook</a
					>
				</li>
				<li><a href="mailto:minibusstur@hotmail.com">Email</a></li>
				<li><a href="tel:45256161">Phone</a></li>
			</ul>
		</div>
		<div class="mt-8 text-center font-semibold">Org nr: 816 230 942</div>
		<div class="mt-2 text-center font-semibold">
			© 2015 - {new Date().getFullYear()}
			{$page.url.origin} - All Rights Reserved.
		</div>
	</footer>

	<nav
		class="sticky bottom-0 sm:hidden flex flex-row h-14 justify-around items-center text-xs px-2 bg-light-background text-light-contrast shadow-t-lg z-50"
	>
		{#each pages.filter((link) => link.required) as link}
			<a
				href={link.url}
				class={`flex flex-col items-center decoration-light-accent transition-opacity ${
					`/${$page.url.pathname.split('/')[1]}` == link.url
						? 'opacity-100 underline'
						: 'opacity-50'
				}`}
			>
				<img src={link.icon} alt="" class="h-6" />
				<span> {link.text} </span>
			</a>
		{/each}
	</nav>
</div>
