const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //baseUrl: "http://localhost:3000",
  viewportHeight: 1280,
  viewportWidth: 720,
  // Tiempo Max para comando en ms
  defaultCommandTimeout: 4000,
  // tIEMPO Max para cargar una pagina en ms
  pageLoadTimeout: 5000,

});
