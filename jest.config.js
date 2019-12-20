module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/__tests__/stubs/"
  ],
  moduleNameMapper: {
    "^.*\\.scss$": "<rootDir>/__tests__/stubs/SCSSStub.js"
  }
};
