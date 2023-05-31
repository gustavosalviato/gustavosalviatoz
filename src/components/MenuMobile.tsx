import * as DropDownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export function MenuMobile() {
  return (
    <DropDownMenu.Portal>
      <DropDownMenu.Content className="md:hidden rounded-md dark:bg-gray-700 p-2 w-56 absolute right-[-20px] top-2 bg-white group outline-none focus:outline-none">
        <div className="">
          <DropDownMenu.Item className="px-3 py-2">
            <Link href="/">About</Link>
          </DropDownMenu.Item>
          <DropDownMenu.Item className="px-3 py-2">
            <Link href="/works">Works</Link>
          </DropDownMenu.Item>
          <DropDownMenu.Item className="px-3 py-2">
            <a
              href="https://github.com/gustavosalviato"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          </DropDownMenu.Item>
        </div>
      </DropDownMenu.Content>
    </DropDownMenu.Portal>
  )
}
