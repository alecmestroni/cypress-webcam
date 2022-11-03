const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://iqp.eu-west-1.tsaws.infocert.it/',
		// baseUrl: 'https://test',
		// baseUrl: 'https://learn.cypress.io/',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
