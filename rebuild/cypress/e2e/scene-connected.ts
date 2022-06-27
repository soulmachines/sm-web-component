describe('scene', () => {
  before(() => {
    cy.visit('/');
    cy.launchScene();
  });

  it('does not render a profile picture', () => {
    cy.get('[data-sm-cy=profileImage]').should('not.exist');
  });

  it('renders a enable microphone button and then renders a disable microphone button once clicked', () => {
    cy.enableMicrophone();
    cy.disableMicrophone();
  });

  it('renders a enable camera button and then renders a disable camera button once clicked', () => {
    cy.enableCamera();
    cy.disableCamera();
  });

  it('renders a mute button and then renders a unmute video button once clicked', () => {
    cy.get('title').contains('Unmute video').should('not.exist');
    cy.get('title').contains('Mute video').should('exist').click({ force: true });
    cy.get('title').contains('Mute video').should('not.exist');
    cy.get('title').contains('Unmute video').should('exist');
  });

  it('renders a disconnect scene button', () => {
    cy.disconnectScene();
  });
});
