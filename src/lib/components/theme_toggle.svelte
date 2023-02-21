<script lang="ts">
	import sunIcon from '$lib/assets/icons/sun.svg';
	import moonIcon from '$lib/assets/icons/moon.svg';
	import { darkTheme } from '$lib/stores/theme';
	import Toggle from './toggle.svelte';
</script>

<Toggle
	invertColor={true}
	checked={$darkTheme}
	leftIcon={sunIcon}
	rightIcon={moonIcon}
	on:change={() => {
		$darkTheme = $darkTheme = !$darkTheme;
	}}
/>
