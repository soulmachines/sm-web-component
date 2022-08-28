import corpusCommands from '../support/corpusCommands';

describe('conversation state', () => {
  before(() => {
    cy.visit('/');
    cy.launchScene();
  });

  it('renders an idle icon by default', () => {
    cy.get('span').contains('Digital Person Waiting').should('exist');
  });

  describe('when a message is sent to the digital person', () => {
    it('renders a idle icon, followed by dp speaking icon before ending on dp waiting', () => {
      cy.get('span').contains('Digital Person Waiting').should('exist');

      cy.sendTextMessage(corpusCommands.optionsCard);
      cy.get('[data-sm-content=options]', { timeout: 6000 }).should('exist');

      cy.get('span').contains('Digital Person Speaking').should('exist');
      cy.get('span').contains('Digital Person Speaking').should('not.exist');

      cy.get('span').contains('Digital Person Waiting').should('exist');
    });
  });
});
