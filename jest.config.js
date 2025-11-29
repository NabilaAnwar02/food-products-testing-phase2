export default {

  transform: {},

  moduleFileExtensions: ["js", "mjs"],

  testMatch: [
    "**/tests/manual/**/*.test.js",
    "**/tests/ai/**/*.test.js"
  ],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/utils/.internal/"
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/utils/.internal/**" 
  ],

  verbose: true
};
