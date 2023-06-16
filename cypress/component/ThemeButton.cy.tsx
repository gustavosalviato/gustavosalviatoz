import { ThemeButton } from '@/components/ThemeButton'
describe('Theme button', () => {
  beforeEach(() => {
    cy.mount(<ThemeButton />)
  })

  it('should render theme button correctly', () => {
    cy.get('[data-cy="theme-button"]').should('be.visible')
  })
})
