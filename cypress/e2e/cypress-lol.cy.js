/// <reference types="cypress" />

describe('cypress-crash', () => {

	it('Intercept 1', () => {
		for (let i = 1; i <= 2; i++) {
			cy.fixture('img/test-replaced.jpg', 'base64').then(jpg => {
				let url = 'data:image/png;base64,' + jpg
				cy.log(url)
				cy.intercept({
					method: 'GET',
					url: url,
				}).as('imageRequest')
				cy.wait('@imageRequest', { timeout: 1000 }).then(({ response }) => {
					expect(response.statusCode).to.eq(200)
				})
				cy.get('slide', { timeout: 100000 }).should('have.length', i)
			})
		}

	})
	it('Intercept 2', () => {
		for (let i = 1; i <= 2; i++) {
			cy.fixture('img/base64-replaced.json').then(jpg => {
				let url = 'data:image/png;base64,' + jpg.base64
				cy.log(url)
				cy.intercept({
					method: 'GET',
					url: url,
				}).as('imageRequest')
				cy.wait('@imageRequest', { timeout: 1000 }).then(({ response }) => {
					expect(response.statusCode).to.eq(200)
				})
				
				cy.get('slide', { timeout: 100000 }).should('have.length', i)
			})
		}
	})
})
