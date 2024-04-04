import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'trg6th',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
