import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

interface LayoutProps {
  children: ReactNode
  title?: string
}

export function Layout({ children, title }: LayoutProps) {
  const pageTitle = `${title} - Gustavo Salviato`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      variants={variants}
      exit="exit"
      transition={{ duration: 0.4, type: 'eaeseInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <meta name="twitter:title" content={pageTitle} />
            <meta name="og:title" content={pageTitle} />
            <title>{pageTitle}</title>
          </Head>
        )}
        {children}
      </>
    </motion.article>
  )
}
