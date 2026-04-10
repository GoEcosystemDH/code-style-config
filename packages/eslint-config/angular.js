/**
 * @goecosystemdh/eslint-config/angular
 *
 * Opt-in Angular-specific rules. Compose with the base config:
 *
 *   import base from '@goecosystemdh/eslint-config';
 *   import angular from '@goecosystemdh/eslint-config/angular';
 *   export default [...base, ...angular];
 *
 * NOTE: This requires installing @angular-eslint/eslint-plugin as a devDependency.
 */

export default [
  {
    files: ['**/*.ts'],
    rules: {
      // Angular best practices (warn only)
      // Requires: @angular-eslint/eslint-plugin
      // '@angular-eslint/component-class-suffix': 'warn',
      // '@angular-eslint/directive-class-suffix': 'warn',
      // '@angular-eslint/no-empty-lifecycle-method': 'warn',
      // '@angular-eslint/use-lifecycle-interface': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      // Requires: @angular-eslint/eslint-plugin-template
      // '@angular-eslint/template/banana-in-box': 'warn',
      // '@angular-eslint/template/no-negated-async': 'warn',
    },
  },
];
