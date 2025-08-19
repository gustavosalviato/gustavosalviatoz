import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Footer } from '@/components/Footer'
import { Layout } from '@/components/layouts/Layout'
import { AnimateSection } from '@/components/AnimateSection'

export default function Setup() {
  const hardwareItems = [
    {
      name: 'AMD Ryzen 5700X',
      categories: ['CPU', '8 cores, 16 threads'],
    },
    {
      name: 'TUF Gaming B550-PLUS',
      categories: ['Placa Mãe', 'Socket AM4, DDR4, PCIe 4.0'],
    },
    {
      name: 'AMD Radeon RX 7600 Gigabyte',
      categories: ['GPU', 'GDDR6', '8GB'],
    },
    {
      name: 'Memória DDR4 XPG GAMMIX D35',
      categories: ['4x8GB', '3200MHz'],
    },
    {
      name: 'DeepCool AK400',
      categories: ['Air Cooler', '120mm'],
    },
    {
      name: 'Kingston NV2 1TB',
      categories: ['SSD', 'Leit. 3500 MBs', 'Grav. 2100 MBs'],
    },
    {
      name: 'Mancer CV100 Preto',
      categories: ['Gabinete', 'Mid-Tower'],
    },
    {
      name: 'Aigo AR12PRO',
      categories: ['Ventoinha', 'ARGB', '120mm'],
    },
  ]

  const peripheralsItems = [
    {
      name: 'AULA WIN 68 HE MAX',
      categories: ['Teclado', 'Magnético', '8K Polling Rate'],
    },
    {
      name: 'ATK VXE R1',
      categories: ['Mouse', 'PAW 3395'],
    },
    {
      name: 'EXCO Esports Gaming',
      categories: ['Mouse Pad', 'X-Soft'],
    },
    {
      name: 'KZ-ZSN PRO 2',
      categories: ['Fone', 'Intra-auricular'],
    },
    {
      name: 'ASRock Phantom Gaming  PG27FF1A',
      categories: ['Monitor', '27 Pol', ' Full HD', '165HZ'],
    },
    {
      name: 'Machenike G5 PRO',
      categories: ['Gamepad', 'Hall Effect'],
    },
    {
      name: 'Talon Games eSports',
      categories: ['Manguito', 'L Size'],
    },
    {
      name: 'Dr. Office Work Pro Cinza',
      categories: ['Cadeira'],
    },
  ]

  return (
    <Layout title="Setup">
      <div className="flex flex-col h-screen w-screen overflow-x-auto">
        <Header />

        <main className="max-w-2xl w-full flex flex-col mx-auto px-4">
          <AnimateSection delay={0.1}>
            <Heading title="Hardware" />

            <div className="grid xl:grid-cols-2  gap-4 mt-2">
              {hardwareItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="p-4 dark:border-zinc-700 border border-zinc-800 dark:bg-zinc-900 bg-zinc-300 rounded-md space-y-3"
                  >
                    <h3 className="text-sm font-semibold">{item.name}</h3>

                    <div className="flex items-center gap-2">
                      {item.categories.map((category, i) => {
                        return (
                          <span
                            key={i}
                            className="font-medium rounded-sm text-xs bg-indigo-500 py-1 px-2"
                          >
                            {category}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateSection>

          <AnimateSection delay={0.1}>
            <Heading title="Periféricos" />

            <div className="grid xl:grid-cols-2  gap-4 mt-2">
              {peripheralsItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="p-4 dark:border-zinc-700 border border-zinc-800 dark:bg-zinc-900 bg-zinc-300 rounded-md space-y-3"
                  >
                    <h3 className="text-sm font-semibold">{item.name}</h3>

                    <div className="flex items-center gap-2">
                      {item.categories.map((category, i) => {
                        return (
                          <span
                            key={i}
                            className="font-medium rounded-sm text-xs bg-indigo-500 py-1 px-2"
                          >
                            {category}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateSection>
        </main>
        <Footer />
      </div>
    </Layout>
  )
}
