module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Example: using Babel
      },
      jest: {
        transformIgnorePatterns: ["/node_modules/(?!@fullcalendar)"]
      }
}