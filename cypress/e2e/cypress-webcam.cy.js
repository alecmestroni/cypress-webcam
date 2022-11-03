/// <reference types="cypress" />

describe('webcam spec', // {
// 	baseUrl: 'https://mobilecapture-stage.infocert.it/home?companyId=Demo&dossierId=lGj1aw8XrNa4k6M74YDq'
// 		,
// },
() => {
	it('Visit MoCa', () => {
		cy.visit(
			'https://mobilecapture-stage.infocert.it/home?companyId=Demo&dossierId=lGj1aw8XrNa4k6M74YDq',
			{ failOnStatusCode: false }
		)
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
})
