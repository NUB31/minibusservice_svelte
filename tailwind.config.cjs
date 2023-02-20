/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'light-background': '#F6F6F6',
				'light-secondary-background': '#F9F9F9',
				'light-border': '#181818',
				'light-contrast': '#181818',
				'light-accent': '#FF1D25',
				'dark-background': '#181818',
				'dark-secondary-background': '#202020',
				'dark-border': '#333333',
				'dark-contrast': '#F6F6F6',
				'dark-accent': '#FF1D25'
			},
			boxShadow: {
				't-lg': '0px -4px 6px -1px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: []
};
