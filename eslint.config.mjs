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
      semi: ['error', 'always'],              // obriga ponto e vírgula
      quotes: ['error', 'single'],            // obriga aspas simples
      indent: ['error', 2],                   // indentação com 2 espaços
      'no-unused-vars': 'warn',               // avisa variáveis não usadas
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'], // vírgula no final em objetos/arrays multilinha
    },
    extends: ['js/recommended'],
  },
]);
