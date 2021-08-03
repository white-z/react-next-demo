import Head from 'next/head'
import Link from 'next/link'
import { Div, Text } from 'atomize';
import Layout, { TITLE } from '@/components/Layout'
import useWindowOffset from '@/@hooks/useWindowOffset'
import useWindowDimensions from '@/@hooks/useWindowDimensions'

export type Posts = {
  name: string
}

export default function FirstPost({ posts }: any) {
  const { width } = useWindowDimensions();
  const { top } = useWindowOffset();
  return (
    <Layout>
      <Head>
        <title>{TITLE} First Post {posts.name}</title>
      </Head>
      <Div style={{ height: '2000px' }}>
        <Text tag="h1" textSize="display1">First Post</Text>
        <Text textSize="subheader">
          <Link href="/">
            <a className="foo" rel="noopener noreferrer">
              Hello World
            </a>
          </Link>
        </Text>
        <Div>
          <Text tag="section">Current Scroll Top {top}</Text>
        </Div>
        <Div>
          <Text tag="section">Current Page Width {width}</Text>
        </Div>
      </Div>

    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  new XMLHttpRequest()
  const res = await fetch('http://localhost:4000/api/hello')
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}
