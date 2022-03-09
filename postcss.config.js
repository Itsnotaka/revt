const { join } = require('path');

module.exports = {
	plugins: {
		// join the path so that the compile uses the same path as the source
		tailwindcss: { config: join(__dirname, 'tailwind.config.js') },
		autoprefixer: {},
	},
};
