describe('contact page tests', () => { 
    beforeEach(() => {
        cy.visit('/contact')
    })
    it('workpage loads correctly', () => {
        cy.location('pathname').should('equal', '/contact')
        cy.contains(/contact me/i)
        cy.contains(/enter your contact details and a message, and I will get back to you/i)
        cy.get('[data-test="contact-form"]').should('exist')
    });
 })