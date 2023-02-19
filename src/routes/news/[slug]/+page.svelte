<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.news}
	<iframe
		width="100%"
		height="100%"
		title="news body"
		srcdoc={`<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap"rel="stylesheet"/>${data.news.html}<style>*{font-family:Inter,sans-serif;}h1,h2,h3,h4,h5,h6{font-family:Roboto Slab,serif;}</style>`}
	/>
{/if}
