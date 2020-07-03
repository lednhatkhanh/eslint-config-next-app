'use strict';

const path = require('path');

module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/eslint-plugin-next/recommended',
    'plugin:jest/all',
  ],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: [process.cwd()],
      },
    },
  },

  plugins: ['@next/eslint-plugin-next'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'off',
      {
        allowSingleExtends: true,
      },
    ],
    '@next/next/no-html-link-for-pages': ['error', path.resolve(process.cwd(), './src/pages')],
  },
};
