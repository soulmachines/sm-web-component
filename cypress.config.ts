import { defineConfig } from 'cypress';

export default defineConfig({
  retries: 2,
  projectId: 'uabajg',
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      // https://docs.cypress.io/app/references/configuration#setupNodeEvents
    },
    baseUrl: 'http://localhost:5050',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
