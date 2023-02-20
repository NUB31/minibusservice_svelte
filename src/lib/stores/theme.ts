import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeToggler() {
	let defaultValue = false;
	if (browser) {
		let savedValue = localStorage.getItem('dark_theme');

		if (savedValue) {
			defaultValue = JSON.parse(savedValue);
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			defaultValue = true;
		}

		if (defaultValue) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	const { subscribe, set, update } = writable(defaultValue);

	return {
		subscribe,
		setDarkMode: (value: boolean) => {
			update(() => value);
			if (browser) {
				if (value) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}

				localStorage.setItem('dark_theme', JSON.stringify(value));
			}
		}
	};
}

export const darkTheme = createThemeToggler();
