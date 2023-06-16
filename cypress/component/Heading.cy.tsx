import { Heading } from '@/components/Heading'

describe('Heading component', () => {
  it('should render heading', () => {
    cy.mount(<Heading title="Carrer" />)

    cy.get('[data-cy="heading"]')
      .should('be.visible')
      .and('have.text', 'Carrer')
  })
})
