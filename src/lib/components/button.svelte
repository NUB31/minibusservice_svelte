<script lang="ts">
	export let width: number | null = null;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button
	on:click
	style={`width: ${width ? width + 'px' : '100%'}`}
	{type}
	{disabled}
	class={`
	${
		disabled
			? 'opacity-50'
			: 'hover:bg-light-accent dark:hover:bg-dark-accent dark:hover:text-dark-background dark:hover:border-dark-background'
	} p-2 border-2 border-light-contrast mt-2 rounded-md transition-colors bg-light-secondary-background dark:bg-dark-secondary-background dark:text-dark-contrast dark:border-dark-contrast`}
>
	<slot />
</button>
