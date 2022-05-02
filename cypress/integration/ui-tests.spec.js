describe('Verify UI elements within the widget', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('validates elements when scene is not running', () => {
    cy.closeGreeting();
    cy.get('app-profile-picture').should('be.visible');
  });

  it('validates elements when scene is connected', () => {
    cy.launchScene();
    cy.muteScene();
    //cy.unmuteScene();  Commented because the framework was build before the camera icon was added. after the fist merge a locator for the cam icon needs to be added and this one updated
  });

  it('validates elements when scene is disconnected', () => {
    cy.launchScene();
    cy.disconnectScene();
    cy.get('app-profile-picture').should('be.visible');
  });
});
