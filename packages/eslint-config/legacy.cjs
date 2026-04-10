/**
 * @goecosystemdh/eslint-config/legacy
 *
 * Legacy .eslintrc-compatible config for ESLint 7/8.
 * For ESLint 9+, prefer the flat config (default export).
 *
 * Usage:
 *   // .eslintrc.js
 *   module.exports = {
 *     extends: ['@goecosystemdh/eslint-config/legacy']
 *   };
 */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Quality — warnings, not errors
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

    // Async/await
    'require-await': 'warn',
    'no-return-await': 'warn',

    // Code smell
    'no-duplicate-imports': 'warn',
    'no-useless-catch': 'warn',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'vendor/',
    '*.min.js',
  ],
};
