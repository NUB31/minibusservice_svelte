<script lang="ts">
	import '../app.css';
	import logoFull from '$lib/assets/logos/logo_full.svg';
	import logoFullDark from '$lib/assets/logos/logo_full_dark.svg';
	import homeIcon from '$lib/assets/icons/home_icon.svg';
	import newsIcon from '$lib/assets/icons/news_icon.svg';
	import contactIcon from '$lib/assets/icons/contact_icon.svg';
	import ticketIcon from '$lib/assets/icons/ticket_icon.svg';
	import busIcon from '$lib/assets/icons/bus_icon.svg';

	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/theme_toggle.svelte';
	import { darkTheme } from '$lib/stores/theme';
	import LanguageToggle from '$lib/components/language_toggle.svelte';
	import { language } from '$lib/stores/language';

	let menuOpen = false;

	// Initialize pages variable
	let pages: (
		| {
				url: string;
				text: string;
				required: boolean;
				icon: string;
		  }
		| {
				url: string;
				text: string;
				required: boolean;
				icon: null;
		  }
	)[] = [];

	$: pages = [
		{
			url: '/',
			text: `${$language == 'en' ? 'Home' : 'Hjem'}`,
			required: true,
			icon: homeIcon
		},
		{
			url: '/news',
			text: `${$language == 'en' ? 'News' : 'Nyheter'}`,
			required: true,
			icon: newsIcon
		},
		{
			url: '/tickets',
			text: `${$language == 'en' ? 'Tickets' : 'Biletter'}`,
			required: true,
			icon: ticketIcon
		},
		{
			url: '/bus',
			text: `${$language == 'en' ? 'Bus' : 'Buss'}`,
			required: true,
			icon: busIcon
		},
		{
			url: '/taxi',
			text: `${$language == 'en' ? 'Taxi' : 'Taxi'}`,
			required: false,
			icon: null
		},
		{
			url: '/wheelchair',
			text: `${$language == 'en' ? 'Wheelchair' : 'Rullestol'}`,
			required: false,
			icon: null
		},
		{
			url: '/contact',
			text: `${$language == 'en' ? 'Contact us' : 'Ta kontakt'}`,
			required: true,
			icon: contactIcon
		}
	];
</script>

<div class="flex flex-col min-h-screen text-light-contrast dark:text-dark-contrast">
	<header
		class="sticky top-0 z-50 shadow-lg h-16 flex justify-center border-b-2 bg-light-secondary-background border-light-border dark:bg-dark-secondary-background dark:border-dark-border"
	>
		<div class="max-w-7xl w-full flex flex-row p-4 justify-between">
			<a class="grow" href="/">
				<img class="h-full" src={$darkTheme ? logoFullDark : logoFull} alt="Minibusservice Logo" />
			</a>
			<ul class="hidden lg:flex flex-row gap-10 uppercase font-medium md:text-lg justify-end">
				{#each pages.filter((page) => page.required) as link}
					<li>
						<a
							class={`${
								`/${$page.url.pathname.split('/')[1]}` == link.url && 'border-b-2'
							} border-b-0 transition-colors border-light-accent dark:border-dark-accent hover:text-light-accent dark:hover:text-dark-accent`}
							href={link.url}>{link.text}</a
						>
					</li>
				{/each}
			</ul>
			<div class="h-full aspect-square ml-10 flex justify-center items-center py-1">
				<input
					bind:checked={menuOpen}
					type="checkbox"
					class="toggler z-10 h-full aspect-square shrink-0 cursor-pointer opacity-0"
					aria-label="Open and close sidebar menu"
				/>
				<div class="hamburger h-full shrink-0 aspect-square translate-y-1/2 -translate-x-full">
					<div
						class={`bg-light-contrast dark:bg-dark-contrast relative h-0.5 transition-all rounded-full after:rounded-full before:rounded-full before:bg-light-contrast after:bg-light-contrast before:dark:bg-dark-contrast after:dark:bg-dark-contrast before:absolute after:absolute before:-top-[10px] before:w-full after:w-full before:h-0.5 after:h-0.5 before:transition-all after:transition-all after:top-[10px] ${
							menuOpen
								? 'before:top-0 after:top-0  before:rotate-45 after:-rotate-45 bg-transparent'
								: ''
						}`}
					/>
				</div>
			</div>
		</div>
	</header>
	<nav
		class={`flex flex-col w-56 lg:w-96 transition-transform fixed top-16 bottom-14 sm:bottom-0 right-0 z-40 shadow-lg px-4 py-8 border-l-2 border-light-border bg-light-secondary-background dark:bg-dark-secondary-background dark:border-dark-border ${
			menuOpen ? 'translate-x-0' : 'translate-x-56 lg:translate-x-96'
		}`}
	>
		<ul class="text-lg lg:text-xl font-medium flex flex-col gap-2 grow">
			{#each pages as link}
				<li>
					<a
						class={`${
							`/${$page.url.pathname.split('/')[1]}` == link.url && 'border-b-2'
						} border-b-0 transition-colors border-light-accent dark:border-dark-accent hover:text-light-accent dark:hover:text-dark-accent`}
						href={link.url}>{link.text}</a
					>
				</li>
			{/each}
		</ul>
		<div class="flex flex-col items-center gap-3 w-fit">
			<ThemeToggle />
			<LanguageToggle />
		</div>
	</nav>

	<!-- Main Content -->
	<main class="p-4 pb-16 pt-8 z-0 grow flex bg-light-background dark:bg-dark-background">
		<div class="mx-auto w-full max-w-7xl grow">
			<slot />
		</div>
	</main>

	<footer
		class="px-2 py-8 flex flex-col items-center border-t-2 text-light-background bg-light-contrast border-light-border dark:bg-dark-secondary-background dark:border-dark-border dark:text-dark-contrast"
	>
		<div class="flex flex-row flex-wrap gap-8 justify-center text-center md:text-lg">
			<ul class="flex-1">
				<li>
					<h6 class="font-semibold uppercase">
						{#if $language == 'en'}
							Pages
						{:else}
							Sider
						{/if}
					</h6>
				</li>
				{#each pages as link}
					<li><a href={link.url}>{link.text}</a></li>
				{/each}
			</ul>
			<ul class="flex-1">
				<li>
					<h6 class="font-semibold uppercase">
						{#if $language == 'en'}
							Help
						{:else}
							Hjelp
						{/if}
					</h6>
				</li>
				<li>
					<a href="/contact">
						{#if $language == 'en'}
							Contact us
						{:else}
							Kontakt oss
						{/if}
					</a>
				</li>
				<li>
					<a href="/privacy">
						{#if $language == 'en'}
							Privacy Policy
						{:else}
							Personvernerklæring
						{/if}
					</a>
				</li>
				<li>
					<a href="/sale-conditions">
						{#if $language == 'en'}
							Conditions Of Sale
						{:else}
							Salgsbetingelser
						{/if}
					</a>
				</li>
				<li>
					<a href="/settings">
						{#if $language == 'en'}
							Settings
						{:else}
							Instillinger
						{/if}
					</a>
				</li>
			</ul>
			<ul class="flex-1">
				<li>
					<h6 class="font-semibold uppercase">
						{#if $language == 'en'}
							Minibusservice
						{:else}
							Minibusservice
						{/if}
					</h6>
				</li>
				<li>
					<a href="/about">
						{#if $language == 'en'}
							About
						{:else}
							Om oss
						{/if}
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/MinibusserviceSteneAS/"
					>
						{#if $language == 'en'}
							Facebook
						{:else}
							Facebook
						{/if}
					</a>
				</li>
				<li>
					<a href="mailto:minibusstur@hotmail.com">
						{#if $language == 'en'}
							Email
						{:else}
							E-post
						{/if}
					</a>
				</li>
				<li>
					<a href="tel:45256161">
						{#if $language == 'en'}
							Phone
						{:else}
							Telefon
						{/if}
					</a>
				</li>
			</ul>
			<ul class="flex-1">
				<li>
					<h6 class="font-semibold uppercase">
						{#if $language == 'en'}
							Contact us
						{:else}
							Ta kontakt
						{/if}
					</h6>
				</li>
				<li>
					<a href="/contact">
						{#if $language == 'en'}
							Contact page
						{:else}
							Kontaktside
						{/if}
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/MinibusserviceSteneAS/"
					>
						{#if $language == 'en'}
							Facebook
						{:else}
							Facebook
						{/if}
					</a>
				</li>
				<li>
					<a href="mailto:minibusstur@hotmail.com">
						{#if $language == 'en'}
							Email
						{:else}
							E-post
						{/if}
					</a>
				</li>
				<li>
					<a href="tel:45256161">
						{#if $language == 'en'}
							Phone
						{:else}
							Telefon
						{/if}
					</a>
				</li>
			</ul>
		</div>
		<div class="mt-8 text-center font-semibold">Org nr: 816 230 942</div>
		<div class="mt-2 text-center font-semibold">
			© 2015 - {new Date().getFullYear()}
			{$page.url.origin} - All Rights Reserved.
		</div>
	</footer>

	<nav
		class="sticky bottom-0 sm:hidden flex flex-row h-14 justify-around items-center text-xs px-2 shadow-t-lg z-50 border-t-2 border-light-border bg-light-background dark:bg-dark-secondary-background dark:border-dark-border"
	>
		{#each pages.filter((link) => link.required) as link}
			<a
				href={link.url}
				class={`flex flex-col items-center decoration-light-accent transition-opacity  ${
					`/${$page.url.pathname.split('/')[1]}` == link.url
						? 'opacity-100 underline'
						: 'opacity-50'
				}`}
			>
				<img src={link.icon} alt="" class="h-6 dark:invert" />
				<span class="dark:text-dark-contrast"> {link.text} </span>
			</a>
		{/each}
	</nav>
</div>
