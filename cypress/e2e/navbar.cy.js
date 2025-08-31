describe('navbar tests', () => { 
    it('navbar can navigate to the home page', () => {
        cy.visit('/about')
        cy.get('[data-test="home-navlink"]').should("exist").click()
        cy.location('pathname').should('equal', '/')
    });
    it('navbar can navigate to the about page', () => {
        cy.visit('/')
        cy.get('[data-test="about-navlink"]').should("exist").click()
        cy.location('pathname').should('equal', '/about')
    });
    it('navbar can navigate to the work page', () => {
        cy.visit('/')
        cy.get('[data-test="work-navlink"]').should("exist").click()
        cy.location('pathname').should('equal', '/work')
    });
    it('navbar can navigate to the contact page', () => {
        cy.visit('/')
        cy.get('[data-test="contact-navlink"]').should("exist").click()
        cy.location('pathname').should('equal', '/contact')
    });
 })