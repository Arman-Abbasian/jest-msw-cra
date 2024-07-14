// module.exports = {
//     collectCoverage: true,
//     collectCoverageFrom: ['src/**/*.{js,jsx}'],
//     coverageDirectory: 'coverage',
//     testEnvironment: 'jsdom',
//     transform: {
//         '^.+\\.jsx?$': 'babel-jest', // Example: using Babel
//       }
// }

module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
