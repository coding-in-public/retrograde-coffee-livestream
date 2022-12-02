/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Space Mono", "sans-serif"]
			},
			colors: {
				"rg-gray": "#2e4542",
				"rg-light": "#E4F2E8",
			}
		},
	},
	plugins: [],
};
