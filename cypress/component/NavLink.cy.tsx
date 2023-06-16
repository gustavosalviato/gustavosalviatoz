import { NavLink } from '@/components/NavLink'
import * as NextRouter from 'next/router'
describe('NavLink component', () => {
  beforeEach(() => {
    cy.stub(NextRouter, 'useRouter').returns({ pathname: '/' })
    cy.mount(<NavLink />)
  })
  it('should be able to render NavLink', () => {
    cy.get('[data-cy="nav-bar"]').as('navbar')
    cy.get('@navbar').should('exist')
    cy.get('@navbar').should('be.visible')
  })

  it('should be able to render links properly', () => {
    cy.get('[data-cy="nav-bar"] > :nth-child(1)').should('have.text', 'Home')
    cy.get('[data-cy="nav-bar"] > :nth-child(2)').should('have.text', 'Works')
    cy.get('[data-cy="nav-bar"] > :nth-child(3)').should('have.text', 'Source')
  })
})
