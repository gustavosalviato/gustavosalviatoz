import { AnimateSection } from '@/components/AnimateSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { ListSocialMedia } from '@/components/ListSocialMedia'
import { SelfPresentation } from '@/components/SelfPresentation'
import { Layout } from '@/components/layouts/Layout'
import Link from 'next/link'

import { CaretRight } from 'phosphor-react'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex flex-col w-screen h-screen overflow-x-auto">
        <Header />

        <main className="max-w-lg w-full flex flex-col mx-auto">
          <section>
            <div className="rounded-md dark:bg-zinc-700 bg-light-150 p-3 mt-6 text-center">
              Hey you, I'm front-end developer at Brazil!
            </div>

            <article className="mt-12">
              <SelfPresentation />

              <AnimateSection delay={0.1}>
                <Heading title="Work" />

                <p className="mt-2 dark:text-zinc-300 leading-relaxed indent-4">
                  Since he was a little boy, Gustavo has always been fond of
                  technology and its power to transform lives and solve
                  problems.
                </p>
              </AnimateSection>

              <AnimateSection delay={0.2}>
                <Heading title="Bio" />

                <div className="flex mt-2">
                  <span className="font-bold mr-3">2001</span>
                  Born in Cianorte, Brazil
                </div>

                <div className="flex">
                  <span className="font-bold mr-3">2021</span>
                  Software technical support
                </div>

                <div className="flex">
                  <span className="font-bold mr-3">2022</span>
                  Completed the college of systems analysis and development
                </div>

                <div className="flex">
                  <span className="font-bold mr-3">2023 to present</span>
                  Working on Meu IOT
                </div>
              </AnimateSection>

              <AnimateSection delay={0.3}>
                <Heading title="I ♥" />

                <p className="dark:text-zinc-300 mt-2">
                  Music, Photography, Running, Counter Strike
                </p>
              </AnimateSection>

              <AnimateSection delay={0.3}>
                <Heading title="On the web" />

                <ListSocialMedia />
              </AnimateSection>
            </article>

            <Link
              href="/works"
              className="flex items-center justify-center gap-2 bg-teal-500 text-zinc-800 rounded-md text-lg font-semibold px-4 h-12 hover:brightness-90 transition-all duration-300 mx-auto my-3 w-fit"
            >
              My portfolio <CaretRight size={20} />
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </Layout>
  )
}
