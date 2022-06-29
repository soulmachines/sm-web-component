describe('content cards', () => {
  const corpusCommands = {
    optionsCard: '47',
  };

  before(() => {
    cy.visit('/');
    cy.launchScene();
  });

  it('renders an options content block and the hides options block once its interacted with', () => {
    cy.sendTextMessage(corpusCommands.optionsCard);
    cy.get('[data-sm-content=options]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('Tell me a joke').should('exist').click();
    cy.get('[data-sm-content=options]').should('not.exist');
  });
});
