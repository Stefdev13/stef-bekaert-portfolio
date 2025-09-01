describe('about page tests', () => { 
    beforeEach(() => {
        cy.visit('/about')
    })
    it('about page loads correctly', () => {
        cy.location('pathname').should('equal', '/about')
        cy.contains(/a bit about me/i)
        cy.contains(/I am an ambitious and driven professional with a passion for software development/i)
        cy.get('[data-test="header"]').should('exist')
        cy.get('[data-test="about-section"]').should('exist')
        cy.get('[data-test="skills-section"]').should('exist')
        cy.get('[data-test="education-section"]').should('exist')
    });
 })