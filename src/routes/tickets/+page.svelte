<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import PageSelector from '$lib/components/page_selector.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function refreshData() {
		invalidateAll();
	}
</script>

<section>
	<h1 class="font-semibold text-xl md:text-2xl">News from us</h1>
	<div class="mt-4 flex flex-wrap gap-5">
		{#each data.ticketGroups as ticketGroup}
			<div class="grow">
				<pre>{JSON.stringify(ticketGroup, null, 4)}</pre>
			</div>
		{/each}
	</div>
</section>

<PageSelector maxItems={data.ticketGroupCount} />
