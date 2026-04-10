/**
 * @goecosystemdh/prettier-config
 *
 * Shared Prettier configuration for GoEcosystemDH.
 * Sensible defaults — minimally opinionated.
 */

export default {
  // Line width
  printWidth: 100,

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Semicolons
  semi: true,

  // Quotes
  singleQuote: true,
  quoteProps: 'as-needed',

  // Trailing commas
  trailingComma: 'all',

  // Brackets
  bracketSpacing: true,
  bracketSameLine: false,

  // Arrow functions
  arrowParens: 'always',

  // Line endings (Unix)
  endOfLine: 'lf',

  // Overrides per file type
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
        printWidth: 120,
      },
    },
  ],
};
