describe('work page tests', () => { 
    beforeEach(() => {
        cy.visit('/work')
    })
    it('workpage loads correctly', () => {
        cy.location('pathname').should('equal', '/work')
        cy.contains(/my work/i)
        cy.contains(/A selection of projects I have worked/i)
        cy.get('[data-test="projects-wrapper"]').should('exist')
        cy.get('[data-test="projects-wrapper"]').children().should('have.length.at.least', 1)
    });
 })