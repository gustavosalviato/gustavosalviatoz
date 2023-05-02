import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { SunDim, List } from 'phosphor-react'
export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-lg mx-auto h-14 p-2 flex justify-between">
        <div className="flex gap-6">
          <Logo />
          <NavLink />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-300 transition-colors duration-300 hover:bg-amber-500">
            <SunDim size={16} className="text-zinc-900" weight="bold" />
          </button>

          <button className="min-[768px]:hidden flex items-center justify-center h-10 w-10 rounded-md bg-zinc-700 border border-zinc-500 transition-colors duration-300 hover:bg-zinc-600">
            <List size={16} className="text-zinc-900" weight="bold" />
          </button>
        </div>
      </div>
    </header>
  )
}
