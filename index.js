/* eslint-disable sort-keys-fix/sort-keys-fix */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'sort-destructure-keys',
    'jsx-a11y'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'warn',
    // Typescript es-lint handles this
    'no-unused-vars': 'off',

    /**
     * React
     */
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
      },
    ],

    /**
     * Typescript
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'warn',

    /**
     * Sorting
     */
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
        reservedFirst: true,
        shorthandLast: true,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
    '@typescript-eslint/member-ordering': 'warn',

    /**
     * jsx-a11y Acessibility rules - Recommended rules but warn instead of error
     */
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',

    /**
     * Misc rules
     */
    'eqeqeq': ["error", "always"]
  },
}
