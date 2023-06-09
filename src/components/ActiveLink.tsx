import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { clsx } from 'clsx'
import { GithubLogo } from 'phosphor-react'

interface ActiveLinkProps extends LinkProps {
  title: string
  href: string
  target?: '_blank' | '_self'
  icon?: boolean
  id?: string
}

export function ActiveLink({
  href,
  title,
  target = '_self',
  icon = false,
  id,
  ...props
}: ActiveLinkProps) {
  const router = useRouter()

  const active = router.pathname === href

  return (
    <div className="flex items-center gap-1">
      {icon && (
        <GithubLogo
          size={16}
          weight="fill"
          className="text-zinc-900"
          data-cy="active-link-icon"
        />
      )}
      <Link
        data-cy="active-link"
        href={href}
        id={id}
        target={target}
        {...props}
        className={clsx(
          'p-1 h-full flex items-center justify-center hover:underline transition-colors duration-300',
          {
            'text-teal-500 font-bold hover:text-teal-600': active,
          },
        )}
      >
        {title}
      </Link>
    </div>
  )
}
