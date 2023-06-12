import { ActiveLink } from './ActiveLink'

export function NavLink() {
  return (
    <nav className="flex gap-2 max-md:hidden" data-cy="nav-bar">
      <ActiveLink href="/" title="Home" data-cy="home" />
      <ActiveLink href="/works" title="Works" data-cy="works" />
      <ActiveLink
        href="https://github.com/gustavosalviato/gustavosalviatoz"
        title="Source"
        target="_blank"
        icon
        data-cy="source"
      />
    </nav>
  )
}
