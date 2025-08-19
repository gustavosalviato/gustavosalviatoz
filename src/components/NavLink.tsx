import { ActiveLink } from './ActiveLink'

export function NavLink() {
  return (
    <nav className="flex gap-2 max-md:hidden" data-cy="nav-bar">
      <ActiveLink href="/" title="Sobre" data-cy="home" />
      <ActiveLink href="/works" title="Projetos" data-cy="works" />
      <ActiveLink href="/setup" title="Setup" />
      <ActiveLink
        href="https://github.com/gustavosalviato/gustavosalviatoz"
        title="Fonte"
        target="_blank"
        icon
        data-cy="source"
      />
    </nav>
  )
}
