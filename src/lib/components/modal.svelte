<script lang="ts">
	import { scale } from 'svelte/transition';

	export let visible: boolean;
	export let closableByUser: boolean;

	function toggleVisibility() {
		visible = !visible;
	}
</script>

{#if visible}
	<div
		on:click={(e) => {
			if (e.target === e.currentTarget && closableByUser) {
				toggleVisibility();
			}
		}}
		on:keypress={() => {}}
		transition:scale={{ duration: 200 }}
		class="fixed top-0 bottom-0 left-0 right-0 z-50"
	>
		<div
			class="fixed w-10/12 md:w-8/12 h-3/5 md:h-3/5 top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 rounded-md p-4 bg-light-secondary-background  border-light-border dark:bg-dark-secondary-background dark:border-dark-border"
		>
			<slot />
		</div>
	</div>
{/if}
