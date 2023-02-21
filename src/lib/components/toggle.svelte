<script lang="ts">
	export let checked: boolean;

	export let leftIcon: string;
	export let rightIcon: string;

	export let invertColor = false;
</script>

<div class="flex gap-1 items-center">
	<img src={leftIcon} class={`h-6 ${invertColor && 'dark:invert'}`} alt="" />
	<label class="relative inline-flex items-center cursor-pointer">
		<input on:change {checked} type="checkbox" value="" class="sr-only peer" />
		<div
			class="w-11 h-6 dark:peer-focus:ring-light-accent rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-accent transition-colors border-2 border-light-border after:border-light-border after:border-2 outline-2"
		/>
	</label>
	<img src={rightIcon} class={`h-6 ${invertColor && 'dark:invert'}`} alt="" />
</div>
