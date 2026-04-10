/**
 * @goecosystemdh/eslint-config/react
 *
 * Opt-in React-specific rules. Compose with the base config:
 *
 *   import base from '@goecosystemdh/eslint-config';
 *   import react from '@goecosystemdh/eslint-config/react';
 *   export default [...base, ...react];
 *
 * NOTE: This requires installing eslint-plugin-react and eslint-plugin-react-hooks
 * as devDependencies in your repo.
 */

export default [
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // React hooks — important correctness rules
      // Requires: eslint-plugin-react-hooks
      // 'react-hooks/rules-of-hooks': 'error',
      // 'react-hooks/exhaustive-deps': 'warn',

      // React best practices (warn only)
      // 'react/jsx-key': 'warn',
      // 'react/no-direct-mutation-state': 'warn',
      // 'react/no-array-index-key': 'warn',
    },
  },
];
