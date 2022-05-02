describe('Verify UI elements within the widget', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('launches a scene and disconnects validating UI elements', () => {
    cy.closeGreeting();
    cy.launchScene();
    cy.muteScene();
    //cy.unmuteScene();
    cy.disconnectScene();
  });
});
