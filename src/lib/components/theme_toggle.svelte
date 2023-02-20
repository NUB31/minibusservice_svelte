<script lang="ts">
	import sunIcon from '$lib/assets/icons/sun.svg';
	import moonIcon from '$lib/assets/icons/moon.svg';
	import { darkTheme } from '$lib/stores/theme';
</script>

<img src={sunIcon} class="h-7 dark:invert" alt="" />
<label class="relative inline-flex items-center cursor-pointer">
	<input
		checked={$darkTheme}
		on:change={(e) => {
			e.currentTarget.checked ? darkTheme.setDarkMode(true) : darkTheme.setDarkMode(false);
		}}
		type="checkbox"
		value=""
		class="sr-only peer"
	/>
	<div
		class="w-11 h-6 dark:peer-focus:ring-light-accent rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-accent transition-colors border-2 border-light-border after:border-light-border after:border-2 outline-2"
	/>
</label>
<img src={moonIcon} class="h-5 dark:invert" alt="" />
