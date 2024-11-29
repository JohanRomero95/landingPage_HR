/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			xxs: { max: "399px" },
			xs: { max: "634px" },
			xxl: { min: "1440px" },
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
