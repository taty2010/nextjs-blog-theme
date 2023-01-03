const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "88b15q",
  e2e: {
    baseUrl: 'http://localhost:8888',
    supportFile: false,
  },
});
