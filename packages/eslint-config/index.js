/**
 * @goecosystemdh/eslint-config
 *
 * Shared ESLint flat config for GoEcosystemDH.
 * Minimally opinionated — warnings preferred over errors to avoid breaking legacy code.
 *
 * Usage:
 *   // eslint.config.js
 *   import goecosystemConfig from '@goecosystemdh/eslint-config';
 *   export default goecosystemConfig;
 *
 * For React/Angular projects, opt-in via sub-configs:
 *   import goecosystemConfig from '@goecosystemdh/eslint-config';
 *   import reactConfig from '@goecosystemdh/eslint-config/react';
 *   export default [...goecosystemConfig, ...reactConfig];
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // Base JS recommended
  js.configs.recommended,

  // TypeScript recommended
  ...tseslint.configs.recommended,

  // GoEcosystemDH overrides
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Quality — warnings, not errors (don't break legacy code)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'prefer-const': 'warn',
      'eqeqeq': ['warn', 'always', { null: 'ignore' }],
      'no-var': 'warn',
      'no-unreachable': 'warn',

      // TypeScript specific
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',

      // Async/await correctness
      'require-await': 'warn',
      'no-return-await': 'warn',

      // Code smell
      'no-duplicate-imports': 'warn',
      'no-useless-catch': 'warn',
    },
  },

  // Ignore common directories
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.next/**',
      '.nuxt/**',
      'vendor/**',
      '**/*.min.js',
      '**/*.min.css',
    ],
  },
];
