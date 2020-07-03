'use strict';

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@next/eslint-plugin-next/recommended',
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

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/strict',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        '@next/eslint-plugin-next/recommended',
        'plugin:jest/all',
      ],

      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },

      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
      },
    },
  ],
};
