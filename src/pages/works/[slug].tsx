import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
export default function Work() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="max-w-lg w-full flex flex-col mx-auto px-4">
        <section className="mt-6">
          <div className="flex items-center">
            <Link
              href="/works"
              className="h-full text-teal-500 hover:underline transition-colors duration-300 hover:text-teal-500/80"
            >
              Works
            </Link>
            <span className="flex items-center justify-center px-2">
              <CaretRight size={12} weight="fill" />
            </span>

            <h3 className="inline-block font-bold text-lg">
              Bookfinder
              <span className="text-xs p-0.5 rounded-sm bg-zinc-600 self-start ml-2">
                2016
              </span>
            </h3>
          </div>

          <p className="text-zinc-300 indent-4 leading-relaxed mt-2 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            laboriosam distinctio dolorum consequatur totam possimus quisquam
            nemo quos quidem asperiores.
          </p>

          <ul className="flex flex-col p-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="uppercase font-bold text-indigo-500 rounded-sm text-xs bg-indigo-500/30 p-1">
                website
              </span>
              <Link
                href="bookfinder-nu.vercel.app"
                target="_blank"
                className="text-teal-500 transition-colors duration-300 hover:text-teal-500/80 hover:underline"
              >
                bookfinder-nu.vercel.app
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <span className="uppercase font-bold text-indigo-500 rounded-sm text-xs bg-indigo-500/30 p-1">
                platform
              </span>
              Windows/macOS/Linux/Android/IOS
            </li>

            <li className="flex items-center gap-2">
              <span className="uppercase font-bold text-indigo-500 rounded-sm text-xs bg-indigo-500/30 p-1">
                stack
              </span>
              Next.Js | Tailwind | GraphQL | NextAuth
            </li>
          </ul>

          <div className="flex flex-col gap-6 items-center justify-center mt-6">
            <img
              src="https://images.unsplash.com/photo-1591951425600-d09958978584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2ODMzOTQxODY&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="w-full h-full object-contain transition-all duration-300 hover:scale-105 hover:rotate-1"
            />

            <img
              src="https://images.unsplash.com/photo-1591951425600-d09958978584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2ODMzOTQxODY&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="w-full h-full object-contain transition-all duration-300 hover:scale-105 hover:rotate-1"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
