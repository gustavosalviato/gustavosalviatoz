import { LinkedinLogo, InstagramLogo, GithubLogo } from 'phosphor-react'
import Link from 'next/link'
export function ListSocialMedia() {
  return (
    <ul data-cy="list-social-media">
      <li className="flex mt-2 items-center gap-2  w-fit rounded-md px-4 h-10 bg-transparent hover:bg-teal-200 transition-all duration-300">
        <LinkedinLogo size={18} weight="fill" className="text-teal-500" />
        <Link
          href="https://www.linkedin.com/in/gustavo-salviato-910048212/"
          target="_blank"
          className="font-bold text-teal-500"
          rel="noreferrer"
        >
          Linkedin
        </Link>
      </li>

      <li className="flex mt-2 items-center gap-2  w-fit rounded-md px-4 h-10 bg-transparent hover:bg-teal-200 transition-all duration-300">
        <GithubLogo size={18} weight="fill" className="text-teal-500" />
        <Link
          href="https://github.com/gustavosalviato"
          target="_blank"
          className="font-bold text-teal-500"
        >
          Github
        </Link>
      </li>

      <li className="flex mt-2 items-center gap-2  w-fit rounded-md px-4 h-10 bg-transparent hover:bg-teal-200 transition-all duration-300">
        <InstagramLogo size={18} weight="fill" className="text-teal-500" />
        <Link
          href="https://www.instagram.com/gusttavo.tsx/"
          target="_blank"
          className="font-bold text-teal-500"
        >
          Instagram
        </Link>
      </li>
    </ul>
  )
}
