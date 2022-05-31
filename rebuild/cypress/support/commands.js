//This command launches a scene
// Wait up to a minute when launching a scene as the first connection takes time
Cypress.Commands.add('launchScene', (timeout = 20000) => {
  cy.get('img').should('be.visible').click();
  cy.get('title').contains('Loading...').should('exist');
  cy.get('title').contains('Loading...', { timeout }).should('not.exist');
  cy.get('title').contains('Close video').should('exist');
});

//This command Disconnects from a scene
Cypress.Commands.add('disconnectScene', () => {
  cy.get('title').contains('Close video').should('exist').click({ force: true });
  cy.get('img').should('be.visible').should('exist');
});

//This command mutes the scene by click on the mute button
Cypress.Commands.add('muteScene', () => {
  cy.get('title').contains('Disable microphone').should('exist').click({ force: true });
  cy.get('title').contains('Enable microphone').should('exist');
});

//This command unmutes the scene by clicking the mute button
Cypress.Commands.add('unmuteScene', () => {
  cy.get('title').contains('Enable microphone').should('exist').click({ force: true });
  cy.get('title').contains('Disable microphone').should('exist');
});

//This command turns on the camera
Cypress.Commands.add('cameraOn', () => {
  cy.get('.camera-button').should('be.visible').click();
  cy.contains('cameraOff').should('not.exist');
  cy.contains('camera').should('exist');
});

Cypress.Commands.add('cameraOff', () => {
  cy.get('sm-widget .camera-button').should('be.visible').click();
  cy.contains('cameraOn').should('not.exist');
  cy.contains('camera').should('exist');
});

//This command closes the greeting message container
Cypress.Commands.add('closeGreeting', () => {
  cy.get('app-greeting button').should('be.visible').click();
  cy.get('.greeting-container').should('not.be.visible');
});
