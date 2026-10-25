const prettier = require('eslint-config-prettier');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ['eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js'],
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
  prettier,
];
