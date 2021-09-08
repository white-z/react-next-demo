import Link from 'next/link'
import {Div} from 'atomize'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <Layout title="Home">
      <Div>
        <Link href="/posts/post">POST</Link>
      </Div>
      <Div>
        <Link href="/posts/123">POST 123</Link>
      </Div>
      <Div>
        <Link href="/posts/111">POST 111</Link>
      </Div>
    </Layout>
  )
}
