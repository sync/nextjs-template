context('Index Integrations', () => {
  beforeEach(() => {
    cy.openPage();
  });

  it('can display a welcome message', () => {
    cy.contains('HELLO');
  });
});
