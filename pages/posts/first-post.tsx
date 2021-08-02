import Head from 'next/head'
import Link from 'next/link'
import Layout, { TITLE } from '../../components/Layout'

 export default function FirstPost() {
   return (
     <Layout>
       <Head>
         <title>{TITLE} First Post</title>
       </Head>
       <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className="foo" rel="noopener noreferrer">
              Hello World
            </a>
          </Link>
        </h2>
     </Layout>
   )
 }
