import { Header } from '@/components/Header'
import { SelfPresentation } from '@/components/SelfPresentation'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />

      <main className="max-w-lg w-full flex flex-col mx-auto">
        <section>
          <div className="rounded-md bg-zinc-700 p-3 mt-6">
            Hey you, I'm full stack developer at Brazil!
          </div>

          <article className="mt-12">
            <SelfPresentation />
          </article>
        </section>
      </main>
    </div>
  )
}
