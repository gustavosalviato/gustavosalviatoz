import { AnimateSection } from '@/components/AnimateSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { ListSocialMedia } from '@/components/ListSocialMedia'
import { SelfPresentation } from '@/components/SelfPresentation'
import { Timeline } from '@/components/Timeline'
import { Layout } from '@/components/layouts/Layout'

export default function Home() {
  return (
    <main>
      <Layout title="Home">
        <div className="flex flex-col w-screen h-screen overflow-x-auto">
          <Header />

          <main className="max-w-2xl w-full flex flex-col mx-auto px-4">
            <section>
              <div className="rounded-md dark:bg-zinc-700 bg-light-150 p-3 mt-6 text-center">
                Olá, sou desenvolvedor Full Stack.
              </div>

              <article className="mt-12">
                <SelfPresentation />

                <AnimateSection delay={0.1}>
                  <Heading title="Sobre Mim" />

                  <p className="mt-2 dark:text-zinc-300 leading-relaxed indent-4">
                    Desde pequeno, sempre fui fascinado pela tecnologia e seu
                    poder de transformar vidas e resolver problemas. Essa paixão
                    me levou a me especializar no ecossistema JavaScript, onde
                    posso combinar criatividade com lógica para criar soluções
                    digitais impactantes.
                  </p>
                </AnimateSection>

                <AnimateSection delay={0.2}>
                  <Heading title="Minha Jornada" />

                  <Timeline />
                </AnimateSection>

                <AnimateSection delay={0.3}>
                  <Heading title="Hobbies" />

                  <div className="grid xl:grid-cols-2 gap-4 mt-2">
                    <div className="border p-4 border-zinc-700 rounded-md space-y-1 dark:hover:bg-zinc-600 hover:bg-light-150">
                      <strong className="text-lg">Hip Hop</strong>

                      <p className="text-sm">
                        Música que inspira a criatividade e o cotidiano.
                      </p>
                    </div>

                    <div className="border p-4 border-zinc-700 rounded-md space-y-1 dark:hover:bg-zinc-600 hover:bg-light-150">
                      <strong className="text-lg">Fotografia</strong>

                      <p className="text-sm">Capturar momentos únicos.</p>
                    </div>

                    <div className="border p-4 border-zinc-700 rounded-md space-y-1 dark:hover:bg-zinc-600 hover:bg-light-150">
                      <strong className="text-lg">Exercícios</strong>

                      <p className="text-sm">Manter corpo e mente saudáveis.</p>
                    </div>

                    <div className="border p-4 border-zinc-700 rounded-md space-y-1 dark:hover:bg-zinc-600 hover:bg-light-150">
                      <strong className="text-lg">Jogos</strong>

                      <p className="text-sm">Diversão e estratégia.</p>
                    </div>
                  </div>
                </AnimateSection>

                <AnimateSection delay={0.3}>
                  <Heading title="Conecte-se Comigo" />

                  <ListSocialMedia />
                </AnimateSection>
              </article>
            </section>
          </main>

          <Footer />
        </div>
      </Layout>
    </main>
  )
}
