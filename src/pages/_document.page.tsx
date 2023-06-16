import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <body className="dark:bg-zinc-800 dark:text-zinc-200 bg-light-100 text-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
