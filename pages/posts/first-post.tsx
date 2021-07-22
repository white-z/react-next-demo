/**
 * @Description:
 * @Author: zhenghao
 * @Date:   2021-07-22 10:24:29
 * @Email:  zhenghao@yiye.ai
 * @Last modified by:   zhenghao
 * @Last modified time: 2021-07-22 12:04:28
 */
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

 export default function FirstPost() {
   return (
     <Layout>
       <Head>
         <title>First Post</title>
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
