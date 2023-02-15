module.exports = {
	// Typescript
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						ignoreRestSiblings: true,
						argsIgnorePattern: '_+'
					}
				],

				camelcase: 'off',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow'
					},
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase']
					},
					{
						selector: 'typeLike',
						format: ['PascalCase']
					},
					{
						selector: 'memberLike',
						format: null
					},
					{
						// have to leave this for now as this rule
						// doesn't separate regular parameters from
						// destructured parameters
						selector: 'parameter',
						format: null
					}
				],

				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'error',
					{
						functions: false,
						classes: false,
						variables: true,
						enums: false,
						typedefs: false
					}
				],

				'@typescript-eslint/ban-ts-comment': [
					'error',
					{
						'ts-expect-error': 'allow-with-description',
						'ts-ignore': true,
						'ts-nocheck': true,
						'ts-check': false,
						minimumDescriptionLength: 3
					}
				],

				'@typescript-eslint/consistent-type-imports': [
					'warn',
					{
						prefer: 'type-imports',
						disallowTypeAnnotations: false
					}
				]
			}
		},
		{
			files: ['*.d.ts'],
			rules: {
				'import/order': 'off',
				'import/no-duplicates': 'off',
				'import/export': 'off'
			}
		}
	]
}
