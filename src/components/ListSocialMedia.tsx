import {
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  GameController,
  Aperture,
} from 'phosphor-react'
import Link from 'next/link'
export function ListSocialMedia() {
  return (
    <div className="grid xl:grid-cols-3 gap-4">
      <div className="border p-4 border-zinc-700 rounded-md space-y-1 flex items-center justify-center gap-2 mt-2 dark:hover:bg-zinc-600 hover:bg-light-150">
        <LinkedinLogo size={18} weight="fill" />
        <Link
          href="https://www.linkedin.com/in/gustavo-salviato-910048212/"
          target="_blank"
          className="font-bold"
          rel="noreferrer"
        >
          Linkedin
        </Link>
      </div>

      <div className="border p-4 border-zinc-700 rounded-md space-y-1 flex items-center justify-center gap-2 mt-2 dark:hover:bg-zinc-600 hover:bg-light-150">
        <GithubLogo size={18} weight="fill" />
        <Link
          href="https://github.com/gustavosalviato"
          target="_blank"
          className="font-bold"
        >
          Github
        </Link>
      </div>

      <div className="border p-4 border-zinc-700 rounded-md space-y-1 flex items-center justify-center gap-2 mt-2 dark:hover:bg-zinc-600 hover:bg-light-150">
        <InstagramLogo size={18} weight="fill" />
        <Link
          href="https://www.instagram.com/gusttavo.tsx/"
          target="_blank"
          className="font-bold"
        >
          Instagram
        </Link>
      </div>

      <div className="border p-4 border-zinc-700 rounded-md space-y-1 flex items-center justify-center gap-2 mt-2 dark:hover:bg-zinc-600 hover:bg-light-150">
        <Aperture size={18} weight="fill" />
        <Link
          href="https://vsco.co/weusetobe/gallery"
          target="_blank"
          className="font-bold"
        >
          VSCO
        </Link>
      </div>

      <div className="border p-4 border-zinc-700 rounded-md space-y-1 flex items-center justify-center gap-2 mt-2 dark:hover:bg-zinc-600 hover:bg-light-150">
        <GameController size={18} weight="fill" />
        <Link
          href="https://vsco.co/weusetobe/gallery"
          target="_blank"
          className="font-bold"
        >
          Steam
        </Link>
      </div>
    </div>
  )
}
