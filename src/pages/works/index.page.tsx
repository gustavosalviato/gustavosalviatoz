import { AnimateSection } from '@/components/AnimateSection'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { ListWorks } from './components/ListWorks'
import { Footer } from '@/components/Footer'
import { useGetWorksQuery } from '@/graphql/generated'
import { Layout } from '@/components/layouts/Layout'

export default function Works() {
  const { data } = useGetWorksQuery()

  return (
    <Layout title="Works">
      <div className="flex flex-col h-screen w-screen overflow-x-auto">
        <Header />

        <main className="max-w-lg w-full flex flex-col mx-auto px-4">
          <section className="mt-6">
            <Heading title="Works" />

            <AnimateSection delay={0.2}>
              <ListWorks works={data} />
            </AnimateSection>
          </section>
        </main>
        <Footer />
      </div>
    </Layout>
  )
}
