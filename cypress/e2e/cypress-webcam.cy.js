/// <reference types="cypress" />

describe(
	'webcam spec',
	{
		baseUrl:
			'https://mobilecapture-test.infocert.it/home?companyId=Demo&dossierId=q3jGE4mr86P1Jv9RXagY',
	},
	() => {
		it('Visit MoCa', () => {
			cy.visit('/', { failOnStatusCode: false })
		})

		it('Take Photos', () => {
			cy.get('ion-button[data-cy="take-photo"]').each(el => {
				cy.wrap(el).click()
				cy.wait(500)
				cy.get('pwa-camera-modal-instance.hydrated')
					.shadow()
					.find('pwa-camera.hydrated')
					.shadow()
					.find('div.close')
					.click()
			})
		})
	}
)
