import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // bind to the event we care about
      // on('<event>', (arg1, arg2) => {
        // plugin stuff here
      // })
    },
    baseUrl: 'https://www.saucedemo.com/'
  },
})