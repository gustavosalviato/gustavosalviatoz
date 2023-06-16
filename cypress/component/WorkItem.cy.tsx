import { WorkItem } from '@/components/WorkItem'

describe('Work Item', () => {
  it('should render WorkItem component', () => {
    cy.mount(
      <WorkItem
        description="Lorem, ipsum dolor."
        slug="slug"
        title="Title"
        url="teste.url"
      />,
    )
    cy.get('[data-cy="work-item"]').should('be.visible')
    cy.get('[data-cy="work-item"]')
      .invoke('attr', 'href')
      .should('eq', '/works/slug')
  })

  it('check if the link is valid', () => {
    const slug = 'slug'
    cy.mount(
      <WorkItem
        description="Lorem, ipsum dolor."
        slug={slug}
        title="Title"
        url="teste.url"
      />,
    )

    cy.get('[data-cy="work-item"]')
      .invoke('attr', 'href')
      .then((href) => {
        cy.request(`http://localhost:3000/works/${slug}`)
          .its('status')
          .should('eq', 200)
      })
  })
})
