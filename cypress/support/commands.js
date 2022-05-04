//This command launches a scene
Cypress.Commands.add('launchScene', (timeout = 25000) => {
  cy.get('app-profile-picture').should('be.visible').click();
  cy.get('.close-button', { timeout }).should('be.visible');
});

//This command Disconnects from a scene
Cypress.Commands.add('disconnectScene', () => {
  cy.get('.close-button').should('be.visible').click();
  cy.wait(500);
  cy.get('app-profile-picture').should('be.visible');
});

//This command mutes the scene by click on the mute button
Cypress.Commands.add('muteScene', () => {
  cy.get('sm-widget .mic-button').should('be.visible').click();
  cy.contains('micOn').should('not.exist');
});

//This command unmutes the scene by clicking the mute button
Cypress.Commands.add('unmuteScene', () => {
  cy.get('sm-widget .mic-button.inactive').should('be.visible').click();
  cy.contains('micOff').should('not.exist');
});

//This command turns on the camera
Cypress.Commands.add('cameraOn', () => {
  cy.get('.camera-button').should('be.visible').click();
  cy.contains('cameraOff').should('not.exist');
});

Cypress.Commands.add('cameraOff', () => {
  cy.get('sm-widget .camera-button').should('be.visible').click();
  cy.contains('cameraOn').should('not.exist');
});

//This command closes the greeting message container
Cypress.Commands.add('closeGreeting', () => {
  cy.get('div[class=greeting-container]', { timeout: 10000 }).should('be.visible');
  cy.get('app-greeting button').should('be.visible').click();
  cy.get('.greeting-container').should('not.exist');
});
