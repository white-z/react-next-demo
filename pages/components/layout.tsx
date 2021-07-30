import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Div } from 'atomize'
import useWindowOffset from '../../@hook/useWindowOffset'

import styles from './Layout.module.scss'

const TITLE = 'My APP'
export const SUB_TITLE = 'Layout'

export default function Layout({ children }: any) {
  console.log(useWindowOffset());
  return (
    <Div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SUB_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>HEADER</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>FOOTER</footer>
    </Div>
  )
}
