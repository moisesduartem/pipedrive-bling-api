/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: '**/__tests__/coverage',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
  ],
};
