import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createLanguageSelector() {
	let defaultValue = 'no';
	if (browser) {
		let savedValue = localStorage.getItem('language');

		if (savedValue) {
			defaultValue = JSON.parse(savedValue);
		}
	}

	const { subscribe, update } = writable(defaultValue);

	return {
		subscribe,
		set: (language: string) => {
			update(() => language);
			if (browser) {
				localStorage.setItem('language', JSON.stringify(language));
			}
		}
	};
}

export const language = createLanguageSelector();
