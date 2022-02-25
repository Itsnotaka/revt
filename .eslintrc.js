module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'xo-typescript', 'xo-react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/function-component-definition': 'off',
		// Prettier handles these
		'@typescript-eslint/comma-dangle': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/no-unescaped-entities': 'off',
		'no-mixed-operators': 'off',
		'operator-linebreak': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'quote-props': 'off',
		'@typescript-eslint/quotes': 'off',
		'react/jsx-curly-newline': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/object-curly-spacing': 'off',

		// Bruh
		'@typescript-eslint/ban-types': 'off',
		'object-curly-spacing': 'off',
	},
};