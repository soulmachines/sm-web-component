describe('scene', () => {
  const setVisibilityState = (state: string) => {
    cy.document().then((document) => {
      cy.stub(document, 'visibilityState').value(state);
    });
  };

  before(() => {
    cy.visit('/');
  });

  describe('connecting', () => {
    before(() => {
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

    it('pauses the video when the tab loses focus and plays it when it gets focus', () => {
      setVisibilityState('hidden');
      cy.document().trigger('visibilitychange');
      cy.get('video').its('0.paused').should('equal', true);

      setVisibilityState('visible');
      cy.document().trigger('visibilitychange');
      cy.get('video').its('0.paused').should('equal', false);
    });

    it('renders a disconnect scene button', () => {
      cy.disconnectScene();
    });
  });

  describe('reconnecting', () => {
    it('can reconnect once disconnected', () => {
      cy.launchScene();
      cy.disconnectScene();
      cy.launchScene();
    });
  });
});
