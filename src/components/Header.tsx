import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { List } from 'phosphor-react'
import { useTheme } from 'next-themes'
import { ThemeButton } from './ThemeButton'
import * as DropDownMenu from '@radix-ui/react-dropdown-menu'
import { MenuMobile } from './MenuMobile'
export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header
      className="w-full sticky top-[0px] z-[998] dark:bg-[rgba(39,39,42,0.4)] bg-light-50 backdrop-blur-md"
      data-cy="header"
    >
      <div className="max-w-lg w-full mx-auto h-14 p-2 flex justify-between">
        <div className="flex gap-6">
          <Logo />
          <NavLink />
        </div>

        <div className="flex items-center gap-2">
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <ThemeButton />
          </div>
          <DropDownMenu.Root>
            <DropDownMenu.Trigger asChild>
              <button className="md:hidden flex items-center justify-center h-10 w-10 rounded-md dark:bg-zinc-700 border dark:border-zinc-500 transition-colors duration-300 dark:hover:brightness-90 relative bg-zinc-300">
                <List size={16} className="dark:text-zinc-900" weight="bold" />
              </button>
            </DropDownMenu.Trigger>
            <MenuMobile />
          </DropDownMenu.Root>
        </div>
      </div>
    </header>
  )
}
