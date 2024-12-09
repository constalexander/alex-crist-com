import { getGreeting } from '../support/app.po';

describe('portfolio-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load the homepage', () => {
    cy.url().should('include', '/');
    cy.get('body').should('be.visible');
  });
});
