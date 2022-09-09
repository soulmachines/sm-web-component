// Temporary fix that solves "remoteJQuery is not a function"
// Thread here: https://github.com/cypress-io/cypress/issues/1502#issuecomment-832403402
// Remove once solution is released
Cypress.on('window:before:load', () => {
  /**
   * Thankfully, Cypress searches for "jQuery" property on the state
   *  variable (cy), if that's present, it takes the precedence
   *  over window.$
   *  https://github.com/cypress-io/cypress/blob/7.0-release/packages/driver/src/cy/jquery.js#L12
   */
  Cypress.cy.state('jQuery', Cypress.$);
});

Cypress.Commands.add('launchScene', (timeout: number = 100000) => {
  cy.get('[data-sm-cy=connectButton]').should('be.visible').click();
  cy.get('[role="progressbar"]').should('exist');
  cy.get('[role="progressbar"]', { timeout }).should('not.exist');
  cy.get('title').contains('Close video', { timeout }).should('exist');
});

Cypress.Commands.add('reloadPageAndWaitUntilConnected', (timeout: number = 100000) => {
  cy.get('[role="progressbar"]', { timeout }).should('not.exist');
  cy.get('title').contains('Close video', { timeout }).should('exist');
});

Cypress.Commands.add('disconnectScene', () => {
  cy.get('title').contains('Close video').should('exist').click({ force: true });
  cy.get('[data-sm-cy=connectButton]').should('be.visible').should('exist');
});

Cypress.Commands.add('disableMicrophone', () => {
  cy.get('title').contains('Disable microphone').should('exist').click({ force: true });
  cy.get('title').contains('Enable microphone').should('exist');
});

Cypress.Commands.add('enableMicrophone', () => {
  cy.get('title').contains('Enable microphone').should('exist').click({ force: true });
  cy.get('title').contains('Disable microphone').should('exist');
});

Cypress.Commands.add('enableCamera', () => {
  cy.get('title').contains('Enable camera').should('exist').click({ force: true });
  cy.get('title').contains('Enable camera').should('not.exist');
  cy.get('title').contains('Disable camera').should('exist');
});

Cypress.Commands.add('disableCamera', () => {
  cy.get('title').contains('Disable camera').should('exist').click({ force: true });
  cy.get('title').contains('Disable camera').should('not.exist');
  cy.get('title').contains('Enable camera').should('exist');
});

Cypress.Commands.add('closeGreeting', () => {
  cy.get('app-greeting button').should('be.visible').click();
  cy.get('.greeting-container').should('not.be.visible');
});

Cypress.Commands.add('sendTextMessage', (message: string) => {
  cy.get('#textMessage').type(message);
  cy.log(`sending text message: ${message}`);
  cy.get('#sendMessage').click();
  cy.get('#textMessage').clear();
});
