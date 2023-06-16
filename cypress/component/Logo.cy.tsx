import { Logo } from '@/components/Logo'

describe('Logo componenet', () => {
  it('should render logo', () => {
    cy.mount(<Logo />)
    cy.get('span').should('contain.text', 'Gustavo Salviato')
  })
})
