<script lang="ts">
	import { language } from '$lib/stores/language';
	import type { CardCarouselItem } from '$lib/types/CardCarouselItem';

	export let card: CardCarouselItem;
</script>

<div
	class="flex shrink-0 flex-col border-2 w-full rounded-md transition-transform overflow-hidden border-light-border bg-light-secondary-background dark:border-dark-border dark:bg-dark-secondary-background"
>
	{#if card.image}
		<img
			class="w-full max-h-44 object-cover border-b-2 border-light-border dark:border-dark-border"
			src={card.image}
			alt=""
		/>
	{/if}
	<div class="p-4 flex flex-col grow">
		<h3 class="font-semibold">
			{card.header}
		</h3>
		<p class="whitespace-normal grow">
			{card.text}
		</p>
		<a
			class="font-semibold hi mt-2 transition-colors hover:text-light-accent dark:hover:text-dark-accent w-fit"
			href={card.url}
		>
			{#if $language == 'en'}
				Read more...
			{:else}
				Les mer...
			{/if}
		</a>
	</div>
</div>
