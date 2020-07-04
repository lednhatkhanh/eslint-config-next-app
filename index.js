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

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
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
    // react
    'react/prop-types': 'off',

    // next
    '@next/next/no-html-link-for-pages': ['error', path.resolve(process.cwd(), './src/pages')],

    // @typescript-eslint
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],

    // jsx-a11y
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'error',

    // import
    'import/no-unresolved': 'off',
  },
};
