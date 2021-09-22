import { useRouter } from 'next/router'
import Head from 'next/head'
import { Div } from 'atomize'
import { motion } from 'framer-motion'
import ThemeToogle from '@/components/Functions/ThemeToggle'

import styles from './Layout.module.scss'
import utilStyle from '@/styles/utils.module.scss'

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
  const router = useRouter()
  const PAGE_TITLE = title ? title + ' | ' : ''
  return (
    <Div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no" />
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
        <title>{PAGE_TITLE + WEBSITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a className={utilStyle.skipLink} href="#main">Skip to Content</a>
      <header className={styles.header} id="header">
        HEADER
        <ThemeToogle></ThemeToogle>
      </header>

      <motion.main
        id="main"
        key={router.asPath}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={`${styles.main} ${className || ''}`}>
        {children}
      </motion.main>
      <footer className={styles.footer}>FOOTER</footer>
    </Div>
  )
}
