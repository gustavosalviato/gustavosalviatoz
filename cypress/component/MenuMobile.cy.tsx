import { MenuMobile } from '@/components/MenuMobile'
import * as DropDownMenu from '@radix-ui/react-dropdown-menu'
import { List } from 'phosphor-react'

describe('Menu mobile', () => {
  beforeEach(() => {
    cy.mount(
      <DropDownMenu.Root>
        <DropDownMenu.Trigger asChild data-cy="trigger-menu">
          <button className="md:hidden flex items-center justify-center h-10 w-10 rounded-md dark:bg-zinc-700 border dark:border-zinc-500 transition-colors duration-300 dark:hover:brightness-90 relative bg-zinc-300">
            <List size={16} className="dark:text-zinc-900" weight="bold" />
          </button>
        </DropDownMenu.Trigger>
        <MenuMobile />
      </DropDownMenu.Root>,
    )
  })

  it('should render menu mobile correctly', () => {
    cy.get('[data-cy="menu-mobile"]').should('not.exist')
  })

  it('should be able to see menu mobile when click on trigger', () => {
    cy.get('[data-cy="trigger-menu"]').should('be.visible').click()
    cy.get('[data-cy="menu-mobile"]').should('be.visible')
  })
})
