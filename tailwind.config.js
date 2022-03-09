// set a global scope for content to prevent No utility classes error
const { join } = require('path');

module.exports = {
	content: [
		`${join(__dirname, 'app')}/**/*.{js,jsx,ts,tsx}`,
		`${join(__dirname, 'app')}/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
