/// <reference types="Cypress" />

describe('Home page tests', () => { 
    beforeEach(() => {
        cy.visit('/')
    })
    it('Home page loads correctly', () => {
        cy.location('pathname').should('equal', '/')
        cy.contains(/hi, i'm stef/i)
        cy.contains(/I design and build/i)
        cy.get('[data-test="cta-btn"]').should('exist')
        cy.get('[data-test="header"]').should('exist')
    });
    it('Contact button navigates to contact page', () => {
        cy.visit('/')
        cy.get('[data-test="cta-btn"]').click()
        cy.location('pathname').should('equal', '/contact')
    });
 })