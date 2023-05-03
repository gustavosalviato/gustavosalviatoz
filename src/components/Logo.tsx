import { GitBranch } from 'phosphor-react'

export function Logo() {
  return (
    <span className="flex items-center justify-center gap-1 text-lg font-bold pointer tracking-tighter">
      <GitBranch size={24} />
      Gustavo Salviato
    </span>
  )
}
