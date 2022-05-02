//This command launches a scene
Cypress.Commands.add('launchScene', () => {
  cy.get('app-profile-picture').should('be.visible').click();
  cy.wait(25000);
});

//This command Disconnects from a scene
Cypress.Commands.add('disconnectScene', () => {
  cy.get('app-icon[name=close]').should('be.visible').click();
  cy.wait(500);
  cy.get('app-profile-picture').should('be.visible');
});

//This command mutes the scene by click on the mute button
Cypress.Commands.add('muteScene', () => {
  cy.get('.mic-button').should('be.visible').click();
});

//This command unmutes the scene by clicking the mute button
Cypress.Commands.add('unmuteScene', () => {
  cy.get('sm-widget .mic-button.off').should('be.visible').click();
});

//This command closes the greeting message container
Cypress.Commands.add('closeGreeting', () => {
  cy.get('div[class=greeting-container]', { timeout: 10000 }).should('be.visible');
  cy.get('app-greeting button').should('be.visible').click()
  cy.get('.greeting-container').should('not.exist');
});
