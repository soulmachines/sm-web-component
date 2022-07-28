describe('content cards', () => {
  const corpusCommands = {
    optionsCard: '47',
    imageCard: '46',
    externalLink: '48',
    internalLink: '48c',
    markdownCard: '49',
  };

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

  it('renders an image card and hides the card once the close button is clicked', () => {
    cy.sendTextMessage(corpusCommands.imageCard);
    cy.get('[data-sm-content=image]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('svg', 'Hide card').click();
    cy.get('[data-sm-content=image]').should('not.exist');
  });

  it('renders an external link card and hides the card once the close button is clicked', () => {
    cy.sendTextMessage(corpusCommands.externalLink);
    cy.get('[data-sm-content=externalLink]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('svg', 'Hide card').click();
    cy.get('[data-sm-content=externalLink]').should('not.exist');
  });

  it('renders an internal link card and hides the card once the close button is clicked', () => {
    cy.sendTextMessage(corpusCommands.internalLink);
    cy.get('[data-sm-content=internalLink]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('svg', 'Hide card').click();
    cy.get('[data-sm-content=internalLink]').should('not.exist');
  });

  it('renders a Markdown Card and hides the card once the close button is clicked', () => {
    cy.sendTextMessage(corpusCommands.markdownCard);
    cy.get('[data-sm-content=markdown]', { timeout: 6000 }).should('exist');
    cy.get('button').contains('svg', 'Hide card').click();
    cy.get('[data-sm-content=markdown]').should('not.exist');
  });

  it('renders a Markdown Card correctly', () => {
    cy.sendTextMessage(corpusCommands.markdownCard);
    cy.get('h1').contains('Structured Text').should('exist');
    cy.get('h2').contains('Subheadings').should('exist');
    cy.get('p').contains('Each subheading may have its own subheadings.').should('exist');
  });
});
