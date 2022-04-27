describe('Verify UI elements within the widget', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('launches a scene and disconnects validating UI elements', () => {
    //cy.close_greeting();
    cy.launch_scene();
    cy.mute_scene();
    cy.unmute_scene();
    cy.disconnect_scene();
  });
});
