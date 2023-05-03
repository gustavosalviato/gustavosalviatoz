import { AnimateSection } from '@/components/AnimateSection'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { ListSocialMedia } from '@/components/ListSocialMedia'
import { SelfPresentation } from '@/components/SelfPresentation'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-auto">
      <Header />

      <main className="max-w-lg w-full flex flex-col mx-auto">
        <section>
          <div className="rounded-md bg-zinc-700 p-3 mt-6 text-center">
            Hey you, I'm full stack developer at Brazil!
          </div>

          <article className="mt-12">
            <SelfPresentation />

            <AnimateSection delay={0.1}>
              <Heading title="Work" />

              <p className="mt-2 text-zinc-300 leading-relaxed text-indent indent-4">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
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
                Working on Meu IOT Group
              </div>
            </AnimateSection>

            <AnimateSection delay={0.3}>
              <Heading title="I ♥" />

              <p className="text-zinc-300 mt-2">
                Music, Photography, Playing Ukulele, Counter Strike
              </p>
            </AnimateSection>

            <AnimateSection delay={0.3}>
              <Heading title="On the web" />

              <ListSocialMedia />
            </AnimateSection>
          </article>
        </section>
      </main>
    </div>
  )
}
