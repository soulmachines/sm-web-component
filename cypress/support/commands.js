//This command launches a scene
Cypress.Commands.add('launch_scene', () => {
  cy.get('app-profile-picture').should('be.visible').click();
  cy.wait(15000);
});

//This command Disconnects from a scene
Cypress.Commands.add('disconnect_scene', () => {
  cy.get('app-icon[name=close]').should('be.visible').click();
  cy.wait(500);
  cy.get('app-profile-picture').should('be.visible');
});

//This command mutes the scene by click on the mute button
Cypress.Commands.add('mute_scene', () => {
  cy.get('button[class=mic-button]').should('be.visible').click();
});

//This command unmutes the scene by clicking the mute button
Cypress.Commands.add('unmute_scene', () => {
  cy.get('sm-widget > div > div > button.mic-button.off').should('be.visible').click();
});

//This command closes the greeting message container
Cypress.Commands.add('close_greeting', () => {
  cy.get('div[class=greeting-container]').should('be.visible');
  cy.get('app-greeting > div > button').should('be.visible').click();
  cy.get('div[class=greeting-container]').should('not.exist');
});
