import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { Div, Text } from 'atomize';
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

type Post = {
  name: string,
  job: string,
  id: string,
  total: string[]
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { id: '123' } },
      { params: { id: '111' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'zhenghao',
        job: 'web front',
        id: params && params.id,
        total: ['123', '111']
      })
    })
  })
  // const posts: Post = await res.json();
  return {
    props: {
      posts: res as Post
    }
  }
}

export default function Post({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

  const { id, total } = posts;
  return (
    <Layout>
      <Div style={{ height: '2000px' }}>
        <Text tag="section">this post ID: {id}</Text>
        <Div>
          <Link href="/">
            HOME
          </Link>
        </Div>
        {
          total.map((el: string, i: number) => {
            return (
              <Div key={i}>
                <Link href={'/posts/' + el}>
                  {el}
                </Link>
              </Div>
            )
          })
        }
      </Div>

    </Layout>
  )
}
