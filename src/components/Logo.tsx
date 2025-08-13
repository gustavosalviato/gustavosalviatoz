import { GitBranch } from 'phosphor-react'

export function Logo() {
  return (
    <span
      className="flex items-center justify-center gap-1 text-lg font-bold pointer tracking-tighter"
      data-cy="logo"
    >
      <GitBranch size={24} />
      Gustavo Henrique
    </span>
  )
}
