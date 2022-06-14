Cypress.Commands.add('launchScene', (timeout: number = 40000) => {
  cy.get('[data-sm-cy=connectButton]').should('be.visible').click();
  cy.get('title').contains('Loading...').should('exist');
  cy.get('title').contains('Loading...', { timeout }).should('not.exist');
  cy.get('title').contains('Close video').should('exist');
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
  cy.get('sm-widget').then(($el) => {
    cy.log(`sending text message: ${message}`);
    const el: any = $el.get(0);
    el.sendTextMessage(message);
  });
});
