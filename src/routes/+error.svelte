<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex flex-col items-center justify-center h-full">
	{#if $page.status}
		<h1 class="text-red-600 text-9xl font-semibold">{$page.status}</h1>
	{/if}
	{#if $page.error && $page.error.message}
		<h2 class="text-red-600 text-4xl font-semibold text-center">{@html $page.error.message}</h2>
	{/if}
</section>
