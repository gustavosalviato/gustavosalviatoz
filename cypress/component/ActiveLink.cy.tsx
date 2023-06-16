import { ActiveLink } from '@/components/ActiveLink'
import * as NextRouter from 'next/router'

describe('Active link', () => {
  beforeEach(() => {
    cy.stub(NextRouter, 'useRouter').returns({ pathname: '/' })
    cy.mount(<ActiveLink href="/works" title="Works" target="_blank" icon />)
  })
  it('should render active link', () => {
    cy.get('[data-cy="active-link"]').should('have.text', 'Works')
    cy.get('[data-cy="active-link"]').should('have.attr', 'target')
    cy.get('[data-cy="active-link-icon"]').should('exist')
  })

  it('check if link is valid', () => {
    cy.get('[data-cy="active-link"]')
      .invoke('attr', 'href')
      .should('eq', '/works')

    cy.get('[data-cy="active-link"]')
      .invoke('attr', 'href')
      .then((href) => {
        cy.request(`http://localhost:3000/works`)
          .its('status')
          .should('eq', 200)
      })
  })
})
