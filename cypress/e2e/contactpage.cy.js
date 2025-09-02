/// <reference types="Cypress" />

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
    it("form can't be submitted if invalid", () => {
        //===== 1 or more fields not filled in =====
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        //===== 1 field invalid (test 1 invalid field at a time) =====
        //Invalid name
        cy.get('[data-test="name-input"]').clear().type(' ')
        cy.get('[data-test="email-input"]').clear().type('a.valid@email.com')
        cy.get('[data-test="subject-input"]').clear().type('a valid subject')
        cy.get('[data-test="message-textarea"]').clear().type('a valid message input')
        cy.get('[data-test="captcha-checkbox"]').check()
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        //Invalid email
        cy.get('[data-test="name-input"]').clear().type('a valid name')
        cy.get('[data-test="email-input"]').clear().type('an.invalidemail.com')
        cy.get('[data-test="subject-input"]').clear().type('a valid subject')
        cy.get('[data-test="message-textarea"]').clear().type('a valid message input')
        cy.get('[data-test="captcha-checkbox"]').check()
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        //Invalid subject
        cy.get('[data-test="name-input"]').clear().type('a valid name')
        cy.get('[data-test="email-input"]').clear().type('a.valid@email.com')
        cy.get('[data-test="subject-input"]').clear().type(' ')
        cy.get('[data-test="message-textarea"]').clear().type('a valid message input')
        cy.get('[data-test="captcha-checkbox"]').check()
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        //Invalid message
        cy.get('[data-test="name-input"]').clear().type('a valid name')
        cy.get('[data-test="email-input"]').clear().type('a.valid@email.com')
        cy.get('[data-test="subject-input"]').clear().type('a valid subject')
        cy.get('[data-test="message-textarea"]').clear()
        cy.get('[data-test="captcha-checkbox"]').check()
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        //Invalid captcha
        cy.get('[data-test="name-input"]').clear().type('a valid name')
        cy.get('[data-test="email-input"]').clear().type('a.valid@email.com')
        cy.get('[data-test="subject-input"]').clear().type('a valid subject')
        cy.get('[data-test="message-textarea"]').clear().type('a valid message input')
        cy.get('[data-test="captcha-checkbox"]').uncheck()
        cy.get('[data-test="submit-btn"]').should('be.disabled')
    });
    it('form can be submitted correctly if valid', () => {
        cy.get('[data-test="submit-btn"]').should('be.disabled')

        cy.get('[data-test="name-input"]').clear().type('a valid name')
        cy.get('[data-test="email-input"]').clear().type('a.valid@email.com')
        cy.get('[data-test="subject-input"]').clear().type('a valid subject')
        cy.get('[data-test="message-textarea"]').clear().type('a valid message input')
        cy.get('[data-test="captcha-checkbox"]').check()

        cy.get('[data-test="submit-btn"]').should('not.be.disabled').click().then(() => {
            cy.get('[data-test="popup-message"]').contains(/message sent/i)
        })

    });
 })