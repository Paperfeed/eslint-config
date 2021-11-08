module.exports = {
  plugins: [
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
  ],
  extends: [
    'prettier',
  ],
  rules: {
    'no-console': 'warn',

    /**
     * Sorting
     */
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],

    /**
     * Misc rules
     */
    'eqeqeq': ["error", "always"]
  },
}
