describe('scene', () => {
  before(() => {
    cy.visit('/');
    cy.wait(200);
  });

  describe('when it is connected', () => {
    before(() => {
      cy.launchScene();
    });

    it('checks that the profile picture is not rendered', () => {
      cy.get('app-profile-picture').should('not.be.visible');
    });

    it('checks that the mute button is rendered', () => {
      cy.unmuteScene();
      cy.muteScene();
    });

    it('checks that the camera button is rendered', () => {
      cy.cameraOn();
      cy.cameraOff();
    });

    it('checks that the scene can be disconnected', () => {
      cy.disconnectScene();
      cy.get('app-profile-picture').should('be.visible');
    });
  });

  describe('when it is not connected', () => {
    it('checks if greeting is rendered and closes it', () => {
      cy.get('.greeting-container').should('be.visible');
      cy.closeGreeting();
    });

    it('does not render a camera button', () => {
      cy.get('sm-widget .camera-button.inactive').should('not.be.visible');
    });

    it('does not render a mute button', () => {
      cy.get('sm-widget .mic-button.inactive').should('not.be.visible');
    });

    it('checks that the profile picture is rendered', () => {
      cy.get('app-profile-picture').should('be.visible');
    });
  });
});
