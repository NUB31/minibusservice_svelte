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
</script>

<header class="sticky top-0 z-50 flex flex-row p-4 shadow-lg bg-white text-light-contrast h-16">
	<a href="/" class="w-5/12">
		<img src={logoFull} alt="Minibusservice Logo" />
	</a>
	<div class="flex justify-end sm:justify-between items-center grow">
		<ul class="hidden sm:flex flex-row grow gap-3">
			<li>Home</li>
			<li>About</li>
			<li>Sightseeing</li>
		</ul>
		<button on:click={toggleMenuOpen}>
			<img
				src={menuOpen ? closeIcon : menuIcon}
				alt={menuOpen ? 'Close side menu' : 'Open side menu'}
				class="w-8"
			/>
		</button>
	</div>
</header>
<nav
	class={`bg-white w-56 h-full transition-transform fixed top-16 right-0 bottom-14 z-40 shadow-lg px-4 py-8 ${
		menuOpen ? 'translate-x-0' : 'translate-x-56'
	}`}
>
	<ul class="text-xl font-medium flex flex-col gap-2">
		<li>
			<a
				class={`${$page.url.pathname == '/' && 'border-b-2'} border-b-0 border-light-accent`}
				href="/">Home</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/news') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="news">News</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/tickets') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="tickets">Tickets</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/bus') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="bus">Bus</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/taxi') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="taxi">Taxi</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/wheelchair') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="wheelchair">Wheelchair</a
			>
		</li>
		<li>
			<a
				class={`${
					$page.url.pathname.startsWith('/contact') && 'border-b-2'
				} border-b-0 border-light-accent`}
				href="contact">Contact us</a
			>
		</li>
	</ul>
</nav>

<!-- Main Content -->
<main class="p-4 pb-16 bg-light-background text-light-contrast z-0">
	<slot />
</main>

<footer class="bg-light-contrast text-light-background px-2 py-8">
	<div class="flex flex-row flex-wrap gap-8 justify-center text-center">
		<ul class="flex-1">
			<li><h6 class="font-semibold uppercase">Pages</h6></li>
			<li><a href="/">Home</a></li>
			<li><a href="/tickets">Tickets</a></li>
			<li><a href="/bus">Bus</a></li>
			<li><a href="/taxi">Taxi</a></li>
			<li><a href="/news">News</a></li>
			<li><a href="/wheelchair">Wheelchair</a></li>
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
			<li><a href="/">Home</a></li>
			<li><a href="/tickets">Tickets</a></li>
			<li><a href="/bus">Bus</a></li>
		</ul>
	</div>
	<div class="pt-8 text-center font-semibold">
		© 2015 - {new Date().getFullYear()} ${$page.url.origin} - All Rights Reserved.
	</div>
</footer>

<nav
	class="sticky bottom-0 sm:hidden flex flex-row h-14 justify-around items-center text-xs px-2 bg-light-background text-light-contrast shadow-t-lg z-50"
>
	<a
		href="/"
		class={`flex flex-col items-center decoration-light-accent transition-opacity ${
			$page.url.pathname == '/' ? 'opacity-100 underline' : 'opacity-50'
		}`}
	>
		<img src={homeIcon} alt="" class="h-6" />
		<span> Home </span>
	</a>
	<a
		href="/news"
		class={`flex flex-col items-center decoration-light-accent transition-opacity ${
			$page.url.pathname.startsWith('/news') ? 'opacity-100 underline' : 'opacity-50'
		}`}
	>
		<img src={newsIcon} alt="" class="h-6" />
		<span> News </span>
	</a>
	<a
		href="/contact"
		class="flex flex-col justify-center items-center bg-light-accent p-2 rounded-full"
	>
		<img src={contactIcon} alt="" class="h-6" />
	</a>
	<a
		href="/tickets"
		class={`flex flex-col items-center decoration-light-accent transition-opacity ${
			$page.url.pathname.startsWith('/tickets') ? 'opacity-100 underline' : 'opacity-50'
		}`}
	>
		<img src={ticketIcon} alt="" class="h-6" />
		<span> Tickets </span>
	</a>
	<a
		href="/bus"
		class={`flex flex-col items-center decoration-light-accent transition-opacity ${
			$page.url.pathname.startsWith('/bus') ? 'opacity-100 underline' : 'opacity-50'
		}`}
	>
		<img src={busIcon} alt="" class="h-6" />
		<span> Bus </span>
	</a>
</nav>
