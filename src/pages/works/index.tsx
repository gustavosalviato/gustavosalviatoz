import { AnimateSection } from '@/components/AnimateSection'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { ListWorks } from './components/ListWorks'
import { Footer } from '@/components/Footer'

export default function Works() {
  const data = [
    {
      url: 'teste',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis repellat quam eligendi nobis? Ratione eaque sit dolore et culpa iste!',
      title: 'Pennywise',
    },
  ]
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-auto">
      <Header />

      <main className="max-w-lg w-full flex flex-col mx-auto">
        <section className="mt-6">
          <Heading title="Works" />

          <AnimateSection delay={0.2}>
            <ListWorks data={data} />
          </AnimateSection>
        </section>
      </main>
      <Footer />
    </div>
  )
}
