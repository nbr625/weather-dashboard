module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/' // Add axios to be transformed
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy'
  }
};
