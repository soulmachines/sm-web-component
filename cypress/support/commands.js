// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('launch_scene', () => {
    cy.get('app-profile-picture')
    .should('be.visible')
    .click()
    cy.wait(15000)
});

Cypress.Commands.add('disconnect_scene', () => {
    cy.get('app-icon[name=close]')
    .should('be.visible')
    .click()
    cy.wait(500)
})

Cypress.Commands.add('mute_scene', () =>{
    cy.get('button[class=mic-button]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('unmute_scene', () =>{
    cy.get('sm-widget > div > div > button.mic-button.off')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('close_greeting', () =>{
    cy.get('div[class=greeting-container]')
    .should('be.visible')
    cy.get('app-greeting > div > button')
    .should('be.visible')
    .click()
    cy.get('div[class=greeting-container]')
    .should('not.exist')

})


