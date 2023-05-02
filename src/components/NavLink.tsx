import { ActiveLink } from './ActiveLink'

export function NavLink() {
  return (
    <nav className="flex gap-2 max-md:hidden">
      <ActiveLink href="/" title="Home" />
      <ActiveLink href="/works" title="Works" />
      <ActiveLink href="" title="Source" target="_blank" icon />
    </nav>
  )
}
