describe('scene', () => {
  before(() => {
    cy.visit('/');
  });

  describe('when it is connected', () => {
    before(() => {
      cy.launchScene();
    });

    it('checks that the profile picture is not rendered', () => {
      cy.get('img').should('not.exist');
    });

    it('checks that the mute button is rendered', () => {
      cy.muteScene();
      cy.unmuteScene();
    });

    // TODO: enable one camera buttons are enabled
    xit('checks that the camera button is rendered', () => {
      cy.cameraOn();
      cy.cameraOff();
    });

    it('checks that the scene can be disconnected', () => {
      cy.disconnectScene();
    });
  });

  describe('when it is not connected', () => {
    it('checks if greeting is rendered', () => {
      cy.get('sm-widget > div > p').should('be.visible');
    });

    // TODO: enable one camera buttons are enabled
    xit('does not render a camera button', () => {
      cy.get('sm-widget .camera-button.inactive').should('not.be.visible');
    });

    it('does not render a mute button', () => {
      cy.get('title').contains('Disable microphone').should('not.exist');
    });

    it('checks that the profile picture is rendered', () => {
      cy.get('img').should('be.visible');
    });
  });
});
