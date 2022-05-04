describe('When a scene is connected', () => {
  before(() => {
    cy.visit('/');
    cy.wait(200);
    cy.launchScene();
  });

  it('checks that the mute button is rendered', () => {
    cy.unmuteScene();
    cy.muteScene();
  });

  it('checks that the camera button is rendered', () => {
    cy.cameraOn();
    cy.cameraOff();
  });

  it('checks that the scene cane be disconnected', () => {
    cy.disconnectScene();
    cy.get('app-profile-picture').should('be.visible');
  });
});

describe('When scene is not connected', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('checks that greeting and profile picture are rendered', () => {
    cy.closeGreeting();
    cy.get('app-profile-picture').should('be.visible');
  });

  it('does not render a camera button', () => {
    cy.get('sm-widget .camera-button.inactive').should('not.be.visible');
  });

  it('does not render a mute button', () => {
    cy.get('sm-widget .mic-button.inactive').should('not.be.visible');
  });
});
