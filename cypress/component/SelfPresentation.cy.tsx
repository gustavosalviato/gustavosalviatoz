import { SelfPresentation } from '@/components/SelfPresentation'

describe('SelfPresentation', () => {
  it('should be able to render SelfPresentation component', () => {
    cy.mount(<SelfPresentation />)

    cy.get('h2').should('be.visible').and('have.text', 'Gustavo Salviato')

    cy.get('p')
      .should('have.visible')
      .and('contain.text', 'front-end javascript developer')
  })
})
