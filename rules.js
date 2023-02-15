module.exports = {
	rules: {
		// Prettier
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

		// Imports
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
		],
		'import/newline-after-import': 'error',

		// Best practices
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'default-param-last': 'error'
	}
}
