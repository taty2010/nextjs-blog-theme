const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "88b15q",
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
