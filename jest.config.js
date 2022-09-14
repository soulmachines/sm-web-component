module.exports = {
  preset: 'ts-jest',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['cypress'],

  //   // A map from regular expressions to paths to transformers
  //   transform: {
  //     '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  //   },

  //   moduleNameMapper: {
  //     '^react$': 'preact/compat',
  //     '^react-dom/test-utils$': 'preact/test-utils',
  //     '^react-dom$': 'preact/compat',
  //     '^react/jsx-runtime$': 'preact/jsx-runtime',
  //   },

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
};
