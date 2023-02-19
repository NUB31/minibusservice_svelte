<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	let clear: NodeJS.Timer;
	function refreshData() {
		invalidateAll();
	}
</script>

<section>
	<h1 class="font-semibold text-xl md:text-2xl">News from us</h1>
	<div class="mt-4 flex flex-wrap gap-5">
		{#each data.ticketGroups as ticketGroup}
			<div class="grow">
				{ticketGroup.name}
			</div>
		{/each}
	</div>
</section>
