describe('general test', () => { 
    it('navigating to a nonexistant page shows the error page with a button to go to the homepage', () => {
        cy.visit('/randomnonexistantpage')
        cy.contains(/oops/i)
        cy.get('[data-test="homepage-btn"]').should('exist').click()
        cy.location('pathname').should('equal','/')
    });
    it('theme toggle works', () => {
        cy.visit('/')
        
        //Assert that the colours are in light mode
        cy.get('[data-test="background"]').should('have.css', 'background-color', 'rgb(250, 249, 245)')
        cy.get('[data-test="comment"]').should('have.css', 'color', 'rgb(77, 77, 77)')
        
        //Click the theme toggle button
        cy.get('[data-test="theme-toggle"]').click()

        //Assert that the colours are in dark mode
        cy.get('[data-test="background"]').should('have.css', 'background-color', 'rgb(26, 26, 26)')
        cy.get('[data-test="comment"]').should('have.css', 'color', 'rgb(217, 217, 217)')
    });
 })