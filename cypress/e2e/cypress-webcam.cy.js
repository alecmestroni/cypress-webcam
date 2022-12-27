/// <reference types="cypress" />

describe('webcam spec', { testIsolation: false }, () => {
	beforeEach(() => {
		cy.on('window:load', win => {
			win.parent.document
				.querySelector('.aut-iframe') // this selector is rather empirical
				.setAttribute('allow', 'camera;microphone')
		})
	})
	it('Visit GOOGLE', () => {
		cy.visit('www.google.com', { failOnStatusCode: false })
	})
	it('Visit MoCa', () => {
		cy.visit(
			'https://mobilecapture-stage.infocert.it/home?companyId=Demo&dossierId=gQ612yX7kx5drOpmwWZx',
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
