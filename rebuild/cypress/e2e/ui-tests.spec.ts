describe('scene', () => {
  before(() => {
    cy.visit('/');
  });

  describe('when it is connected', () => {
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

    it('renders an options content block the hides options block once its interacted with', () => {
      cy.sendTextMessage('47');
      cy.get('[data-sm-content=options]', { timeout: 5000 }).should('exist');
      cy.get('button').contains('Tell me a joke').should('exist').click();
      cy.get('[data-sm-content=options]').should('not.exist');
    });

    it('renders a disconnect scene button', () => {
      cy.disconnectScene();
    });
  });

  describe('when it is not connected', () => {
    it('renders a greeting', () => {
      cy.get('[data-sm-cy=greetingText]').should('be.visible');
    });

    it('does not render a camera button', () => {
      cy.get('title').contains('Disable camera').should('not.exist');
      cy.get('title').contains('Enable camera').should('not.exist');
    });

    it('does not render a mute button', () => {
      cy.get('title').contains('Disable microphone').should('not.exist');
      cy.get('title').contains('Enable microphone').should('not.exist');
    });

    it('renderes a profile picture', () => {
      cy.get('[data-sm-cy=profileImage]').should('be.visible');
    });
  });

  describe('when an error occurs', () => {
    before(() => {
      cy.visit('/invalid-api-key.html');
      cy.get('[data-sm-cy=connectButton]').should('be.visible').click();
    });

    it('displays the error along with the error message', () => {
      cy.contains('Unable to connect. Invalid API key');
    });

    it('renders a retry button', () => {
      cy.contains('button', 'Retry');
    });

    it('does not render a video', () => {
      cy.get('video').should('not.exist');
    });

    it('does not render a greeting', () => {
      cy.get('[data-sm-cy=greetingText]').should('not.exist');
    });
  });
});
