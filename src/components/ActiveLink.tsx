import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { clsx } from 'clsx'
import { GithubLogo } from 'phosphor-react'

interface ActiveLinkProps extends LinkProps {
  title: string
  href: string
  target?: '_blank' | '_self'
  icon?: boolean
}

export function ActiveLink({
  href,
  title,
  target = '_self',
  icon = false,
  ...props
}: ActiveLinkProps) {
  const router = useRouter()

  const active = router.pathname === href

  return (
    <div className="flex items-center gap-1">
      {icon && <GithubLogo size={16} weight="fill" className="text-zinc-900" />}
      <Link
        href={href}
        target={target}
        {...props}
        className={clsx(
          'p-1 h-full flex items-center justify-center hover:underline transition-colors duration-300',
          {
            'text-teal-500 font-bold hover:text-teal-600': active,
            'hover:text-zinc-300': !active,
          },
        )}
      >
        {title}
      </Link>
    </div>
  )
}
