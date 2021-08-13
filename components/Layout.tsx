import Head from 'next/head'
import { Div } from 'atomize'
import ThemeToogle from '@/components/ThemeToggle'

import styles from './Layout.module.scss'

export const WEBSITE_TITLE = 'My APP'
/**
 * 
 * @param children Slot content
 * @param title [Browser Title]
 * @param className [Wrapper Class Name]
 * @returns 
 */
type Props = {
  children: any
  title?: string
  className?: string
}

export default function Layout({ children, title, className }: Props) {

  return (
    <Div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title + ' | ' + WEBSITE_TITLE}</title>            
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            WEBSITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title + ' | ' + WEBSITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        HEADER
        <ThemeToogle></ThemeToogle>
      </header>

      <main className={`${styles.main} ${className || ''}`}>{children}</main>
      <footer className={styles.footer}>FOOTER</footer>
    </Div>
  )
}
