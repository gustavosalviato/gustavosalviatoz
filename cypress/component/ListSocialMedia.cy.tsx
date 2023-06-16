import { ListSocialMedia } from '@/components/ListSocialMedia'

describe('ListSocialMedia', () => {
  beforeEach(() => {
    cy.mount(<ListSocialMedia />)
  })
  it('should render list social media', () => {
    cy.get('[data-cy="list-social-media"]').should('be.visible')
  })

  it('check if component link all social medias correctly', () => {
    cy.get('[data-cy="list-social-media"] > :nth-child(1)').should(
      'have.text',
      'Linkedin',
    )

    cy.get('[data-cy="list-social-media"] > :nth-child(2)').should(
      'have.text',
      'Github',
    )

    cy.get('[data-cy="list-social-media"] > :nth-child(3)').should(
      'have.text',
      'Instagram',
    )
  })
})
