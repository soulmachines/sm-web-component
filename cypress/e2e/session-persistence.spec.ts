describe('scene', { testIsolation: false }, () => {
  const clearStorageVisitPage = () => {
    cy.window().then((win) => {
      // Clear session storage to start fresh
      win.sessionStorage.clear();

      cy.visit('/session-persistence.html');
    });
  };

  describe('disconnecting and then reconnecting', () => {
    before(() => {
      clearStorageVisitPage();

      cy.launchScene();
      cy.disconnectScene();
      cy.launchScene();
    });

    it('renders a mute video button', () => {
      cy.get('title').contains('Mute video').should('exist');
    });

    it('renders a enable microphone button', () => {
      cy.get('title').contains('Enable microphone').should('exist');
    });

    it('renders a enable camera button', () => {
      cy.get('title').contains('Enable camera').should('exist');
    });
  });

  describe('reconnecting when microphone and camera has been turned on', () => {
    before(() => {
      clearStorageVisitPage();

      cy.launchScene();

      cy.get('title').contains('Enable microphone').should('exist').click({ force: true });
      cy.get('title').contains('Enable camera').should('exist').click({ force: true });

      // Browser needs a slight delay to save data in session storage
      // Wait for UI to update before refreshing the page
      cy.get('title').contains('Disable camera').should('exist');
      cy.get('title').contains('Disable microphone').should('exist');

      cy.disconnectScene();
      cy.launchScene();
    });

    it('renders a mute video button', () => {
      cy.get('title').contains('Mute video').should('exist');
    });

    it('renders a enable microphone button', () => {
      cy.get('title').contains('Enable microphone').should('exist');
    });

    it('renders a enable camera button', () => {
      cy.get('title').contains('Enable camera').should('exist');
    });
  });

  describe('autoconnecting', () => {
    before(() => {
      clearStorageVisitPage();

      cy.launchScene();

      cy.reloadPageAndWaitUntilConnected();
    });

    it('does not render a connect button', () => {
      cy.get('[data-sm-cy=connectButton]').should('not.exist');
    });

    it('does not render a profile picture', () => {
      cy.get('[data-sm-cy=profileImage]').should('not.exist');
    });

    it('renders a mute video button', () => {
      cy.get('title').contains('Mute video').should('exist');
    });

    it('renders a enable camera button', () => {
      cy.get('title').contains('Enable camera').should('exist');
    });

    it('renders a enable microphone button', () => {
      cy.get('title').contains('Enable microphone').should('exist');
    });
  });

  describe('autoconnecting when camera, mic and mute have been clicked', () => {
    before(() => {
      clearStorageVisitPage();

      cy.launchScene();

      cy.get('title').contains('Enable camera').click({ force: true });
      cy.get('title').contains('Enable microphone').click({ force: true });
      cy.get('title').contains('Mute video').click({ force: true });

      // Browser needs a slight delay to save data in session storage
      // Wait for UI to update before refreshing the page
      cy.get('title').contains('Disable camera').should('exist');
      cy.get('title').contains('Disable microphone').should('exist');
      cy.get('title').contains('Unmute video').should('exist');

      cy.reloadPageAndWaitUntilConnected();
    });

    it('does not render a connect button', () => {
      cy.get('[data-sm-cy=connectButton]').should('not.exist');
    });

    it('does not render a profile picture', () => {
      cy.get('[data-sm-cy=profileImage]').should('not.exist');
    });

    it('renders a unmute video button', () => {
      cy.get('title').contains('Unmute video').should('exist');
    });

    it('renders a disable camera button', () => {
      cy.get('title').contains('Disable camera').should('exist');
    });

    it('renders a disable microphone button', () => {
      cy.get('title').contains('Disable microphone').should('exist');
    });
  });
});
