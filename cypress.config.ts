import { defineConfig } from 'cypress';

export default defineConfig({
  retries: 2,
  video: false,
  projectId: 'uabajg',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config);
    },
    baseUrl: 'http://localhost:5050',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
