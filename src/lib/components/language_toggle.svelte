<script lang="ts">
	import noFlagIcon from '$lib/assets/icons/no_flag.svg';
	import usFlagIcon from '$lib/assets/icons/us_flag.svg';

	import { language } from '$lib/stores/language';
	import Toggle from './toggle.svelte';
</script>

<Toggle
	checked={$language != 'no'}
	leftIcon={noFlagIcon}
	rightIcon={usFlagIcon}
	on:change={() => {
		$language == 'no' ? ($language = 'en') : ($language = 'no');
	}}
/>
