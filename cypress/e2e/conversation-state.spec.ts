import { corpusCommands } from './content-cards.spec';

// TODO: verify tests run once sdk implements it
describe('conversation state', () => {
  before(() => {
    cy.visit('/');
    cy.launchScene();
  });

  it('renders an idle icon by default', () => {
    cy.get('span').contains('Digital Person Waiting').should('exist');
  });

  describe('when a message is sent to the digital person', () => {
    beforeEach(() => {
      cy.sendTextMessage(corpusCommands.optionsCard);
    });

    it('renders a user speaking icon, followed by dp processing icon, then dp speaking icon before ending on dp waiting', () => {
      cy.get('span').contains('User Speaking').should('exist');
      cy.get('span').contains('User Speaking').should('not.exist');

      cy.get('title').contains('Digital Person Processing').should('exist');
      cy.get('title').contains('Digital Person Processing').should('not.exist');

      cy.get('span').contains('Digital Person Speaking').should('exist');
      cy.get('span').contains('Digital Person Speaking').should('not.exist');

      cy.get('span').contains('Digital Person Waiting').should('exist');
    });
  });
});
