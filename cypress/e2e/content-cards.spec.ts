import corpusCommands from '../support/corpusCommands';

describe('content cards', () => {
  before(() => {
    cy.visit('/');
    cy.launchScene();
  });

  it('renders an options card and hides the card once its interacted with', () => {
    cy.sendTextMessage(corpusCommands.optionsCard);
    cy.get('[data-sm-content=options]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('Tell me a joke').should('exist').click();
    cy.get('[data-sm-content=options]').should('not.exist');
  });

  it('renders an image card', () => {
    cy.sendTextMessage(corpusCommands.imageCard);
    cy.get('[data-sm-content=image]', { timeout: 6000 }).should('exist');
  });

  it('renders an external link card', () => {
    cy.sendTextMessage(corpusCommands.externalLink);
    cy.get('[data-sm-content=externalLink]', { timeout: 6000 }).should('exist');
  });

  it('renders an internal link card', () => {
    cy.sendTextMessage(corpusCommands.internalLink);
    cy.get('[data-sm-content=internalLink]', { timeout: 6000 }).should('exist');
  });

  it('renders a Markdown Card', () => {
    cy.sendTextMessage(corpusCommands.markdownCard);
    cy.get('[data-sm-content=markdown]', { timeout: 6000 }).should('exist');
  });

  it('renders a Markdown Card', () => {
    cy.sendTextMessage(corpusCommands.markdownCard);
    cy.get('h1').contains('Structured Text').should('exist');
    cy.get('h2').contains('Subheadings').should('exist');
    cy.get('p').contains('Each subheading may have its own subheadings.').should('exist');
  });
});
