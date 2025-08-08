import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'class-methods-use-this': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
    },
    extends: ['js/recommended'],
  },
]);
