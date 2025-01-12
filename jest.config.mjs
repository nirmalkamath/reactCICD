export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
       diagnostics: true, // Enable diagnostic logging
    },
  },
};
