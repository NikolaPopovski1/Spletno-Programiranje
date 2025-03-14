module.exports = {
    testEnvironment: 'node',
    testMatch: ["**/__tests__/*.test.js"],
    verbose: true,
    forceExit: true,
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
  };