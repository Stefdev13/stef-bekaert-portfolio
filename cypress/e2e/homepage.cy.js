/// <reference types="Cypress" />

describe('homepage tests', () => { 
    it('Contact button navigates to contact page', () => {
        cy.visit('/')
        cy.get('[data-test="cta-btn"]').click()
        cy.location('pathname').should('equal', '/contact')
    });
 })