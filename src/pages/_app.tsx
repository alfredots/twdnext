/* eslint-disable react/no-unknown-property */
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adventure Together</title>
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
