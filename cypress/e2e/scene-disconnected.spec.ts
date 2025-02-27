describe('scene disconnected', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');
  });

  it('renders a greeting', () => {
    cy.get('[data-sm-cy=greetingText]').should('be.visible');
  });

  it('does not render a camera button', () => {
    cy.get('title').contains('Disable camera').should('not.exist');
    cy.get('title').contains('Enable camera').should('not.exist');
  });

  it('does not render a microphone button', () => {
    cy.get('title').contains('Disable microphone').should('not.exist');
    cy.get('title').contains('Enable microphone').should('not.exist');
  });

  it('renderes a profile picture', () => {
    cy.get('[data-sm-cy=profileImage]').should('be.visible');
  });
});
