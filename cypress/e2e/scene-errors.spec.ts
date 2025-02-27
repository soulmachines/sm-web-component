describe('when a scene error occurs', { testIsolation: false }, () => {
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

  it('does not render a greeting', () => {
    cy.get('[data-sm-cy=greetingText]').should('not.exist');
  });
});
