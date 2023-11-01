const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  transform: {
    // in the case of the typescript - note the mjs
    '\\.(ts|tsx|mjs)?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
    // in the case that you're using javascript with babel - note the mjs
    '\\.(js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    './node_modules/(?!(ag-grid-react|ag-grid-enterprise|ag-grid-community)/)',
  ],
  setupFilesAfterEnv: ['jest-extended/all', './testing/setupTest.ts'],
};
