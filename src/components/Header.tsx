import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { List } from 'phosphor-react'
import { useTheme } from 'next-themes'
import { ThemeButton } from './ThemeButton'
export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="w-full sticky top-[0px] z-[998] dark:bg-[rgba(39,39,42,0.4)] bg-light-50 backdrop-blur-md">
      <div className="max-w-lg w-full mx-auto h-14 p-2 flex justify-between">
        <div className="flex gap-6">
          <Logo />
          <NavLink />
        </div>

        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-2"
        >
          <ThemeButton />

          <button className="md:hidden flex items-center justify-center h-10 w-10 rounded-md bg-zinc-700 border border-zinc-500 transition-colors duration-300 hover:bg-zinc-600">
            <List size={16} className="text-zinc-900" weight="bold" />
          </button>
        </div>
      </div>
    </header>
  )
}
