import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { Div, Text } from 'atomize';
import Layout from '@/layout/Layout'
import { motion } from 'framer-motion'
import {Spin, SpinName} from '@/components/Atoms'

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
  const [mounted, setMounted] = useState(false)
  const [totalLoaded, setTotalLoaded] = useState(false)
  const [text, setText] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setText(`params: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }. To learn more, take a look at the Dynamic Routing documentation.
      req: The HTTP IncomingMessage object.
      res: The HTTP response object.
      query: An object representing the query string.
      preview: preview is true if the page is in the preview mode and false otherwise. See the Preview Mode documentation.
      previewData: The preview data set by setPreviewData. See the Preview Mode documentation.
      resolvedUrl: A normalized version of the request URL that strips the _next/data prefix for client transitions and includes original query values.
      locale contains the active locale (if enabled).
      locales contains all supported locales (if enabled).
      defaultLocale contains the configured default locale (if enabled).`)
      setTotalLoaded(true)
    }, 2000)
    setMounted(true)
  }, [])

  const { id, total } = posts;
  return (
    <Layout>
      <Div style={{ height: '2000px' }}>
        <Div textSize="display1" d="flex">
        </Div>
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
        <Spin spinning={! totalLoaded} name={SpinName.Loading3}>
          <motion.div initial={{opacity: 0}} animate={{ opacity: totalLoaded ? 1 : 0}}>
            {text}
          </motion.div>
        </Spin>
      </Div>
      
    </Layout>
  )
}
