/* eslint-disable no-undef */

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to see header elements', () => {
    cy.get('[data-cy="logo"]')
      .should('be.visible')
      .and('have.text', 'Gustavo Salviato')

    cy.get('[data-cy="home"]').should('be.visible').and('have.text', 'Home')
    cy.get('[data-cy="works"]').should('be.visible').and('have.text', 'Works')
    cy.get('[data-cy="source"]').should('be.visible').and('have.text', 'Source')
    cy.get('[data-cy="nav-bar"]').should('be.visible')
    cy.get('[data-cy="theme-button"]').should('be.visible')
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="header"]').screenshot()
  })
})
