import { Header } from '@/components/Header'
import * as NextRouter from 'next/router'
describe('Header', () => {
  it('should render header', () => {
    cy.stub(NextRouter, 'useRouter').returns({ pathname: '/' })
    cy.mount(<Header />)
    cy.get('[data-cy="header"]').should('be.visible')
  })
})
