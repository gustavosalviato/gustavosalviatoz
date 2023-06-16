import { Footer } from '@/components/Footer'

describe('Footer component', () => {
  it('should render footer', () => {
    cy.mount(<Footer />)

    cy.get('footer').should('contain.text', 'All Rights Reserved')
  })
})
