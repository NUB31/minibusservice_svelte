<script>
	import ContactForm from '$lib/components/contact_form.svelte';
	import { language } from '$lib/stores/language';
</script>

<section>
	<h1 class="font-semibold text-xl md:text-2xl">
		{#if $language == 'en'}
			Contact us
		{:else}
			Kontakt oss
		{/if}
	</h1>
	<ContactForm />
</section>
