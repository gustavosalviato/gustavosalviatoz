import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useGetWorkBySlugQuery } from '@/graphql/generated'
import { Layout } from '@/components/layouts/Layout'

export default function Work() {
  const { query } = useRouter()

  const slug = query?.slug
  const { data } = useGetWorkBySlugQuery({
    variables: {
      slug: slug as string,
    },
  })

  return (
    <Layout title={data?.work?.title}>
      <div className="h-screen w-screen flex flex-col overflow-x-hidden">
        <Header />

        <main className="max-w-lg w-full flex flex-col mx-auto px-4">
          <section className="mt-6">
            <div className="flex items-center">
              <Link
                href="/works"
                className="h-full dark:text-teal-500 text-red-600 hover:text-red-600/80 hover:underline transition-colors duration-300 dark:hover:text-teal-500/80"
              >
                Works
              </Link>
              <span className="flex items-center justify-center px-2">
                <CaretRight size={12} weight="fill" />
              </span>

              <h3 className="inline-block font-bold text-lg">
                {data?.work?.title}
                <span className="text-xs p-0.5 rounded-sm dark:bg-zinc-600 self-start ml-2 bg-light-50">
                  {`${new Date(data?.work?.createdAt)
                    .getFullYear()
                    .toString()} -`}
                </span>
              </h3>
            </div>

            <p className="dark:text-zinc-300 indent-4 leading-relaxed mt-2 text-justify">
              {data?.work?.description}
            </p>

            <ul className="flex flex-col p-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="uppercase font-bold text-indigo-500 rounded-sm text-xs bg-indigo-500/30 p-1">
                  website
                </span>
                <Link
                  href="https://bookfinder-nu.vercel.app/"
                  target="_blank"
                  className="dark:text-teal-500 dark:hover:text-teal-500/80 text-red-600 hover:text-red-600/80 transition-colors duration-300 hover:underline"
                >
                  {data?.work?.website}
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <span className="uppercase font-bold text-indigo-500 rounded-sm text-xs bg-indigo-500/30 p-1">
                  platform
                </span>
                {data?.work?.platform}
              </li>

              <li className="flex items-center gap-2">
                <span className="uppercase font-bold dark:text-indigo-500 dark:bg-indigo-500/30 rounded-sm text-xs  p-1">
                  stack
                </span>
                {data?.work?.stack}
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}
