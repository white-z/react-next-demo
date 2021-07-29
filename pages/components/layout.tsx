/**
 * @Description:
 * @Author: zhenghao
 * @Date:   2021-07-22 11:06:12
 * @Email:  zhenghao@yiye.ai
 * @Last modified by:   zhenghao
 * @Last modified time: 2021-07-22 15:48:38
 */
import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'

const name:string = 'Name'
export const siteTitle:string = 'Site Title'

export default function Layout({ children, home }:any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/nextjs-logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/nextjs-logo.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
