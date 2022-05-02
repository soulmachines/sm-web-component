//This command launches a scene
Cypress.Commands.add('launch_scene', () => {
  cy.get('app-profile-picture').should('be.visible').click();
  cy.wait(25000);
});

//This command Disconnects from a scene
Cypress.Commands.add('disconnect_scene', () => {
  cy.get('app-icon[name=close]').should('be.visible').click();
  cy.wait(500);
  cy.get('app-profile-picture').should('be.visible');
});

//This command mutes the scene by click on the mute button
Cypress.Commands.add('mute_scene', () => {
  cy.get('.mic-button').should('be.visible').click();
});

//This command unmutes the scene by clicking the mute button
Cypress.Commands.add('unmute_scene', () => {
  cy.get('sm-widget .mic-button.off').should('be.visible').click();
});

//This command closes the greeting message container
Cypress.Commands.add('close_greeting', () => {
  cy.get('div[class=greeting-container]', { timeout: 10000 }).should('be.visible');
  cy.get('app-greeting > div > button').should('be.visible').click();
  cy.get('div[class=greeting-container]').should('not.exist');
});
