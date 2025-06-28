const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: ['**/?(*.)+(spec|test).ts'], // ✅ Match only .ts test files
  testPathIgnorePatterns: ['/dist/', '/build/', '/node_modules/'],
};
