module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'standard',
		'plugin:prettier/recommended',
		'./rules.js',
		'./overrides.js'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'always',
				bracketSpacing: true,
				semi: false,
				endOfLine: 'auto'
			}
		],

		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'index']
				]
			}
		]
	},
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
		}
	}
}
