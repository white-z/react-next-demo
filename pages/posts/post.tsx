import { ElementRef, useEffect, useRef, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { Div, Text } from 'atomize';
import Layout, { TITLE } from '@/components/Layout'
import useWindowOffset from '@/@hooks/useWindowOffset'
import useWindowDimensions from '@/@hooks/useWindowDimensions'

import styles from '@/styles/post.module.scss';

type Post = {
  [key: string]: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res: Post = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'zhenghao',
        job: 'web front'
      })
    })
  })
  // const posts: Post = await res.json();
  return {
    props: {
      posts: res
    }
  }
}

export default function FirstPost({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { width } = useWindowDimensions();
  const { top } = useWindowOffset();
  const [mounted, setMounted] = useState(false)
  const postTitle = useRef();

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <Layout title={posts.name}>
      <Div style={{ height: '2000px' }}>
        <Div h="48px">
          <Text
            tag="h1"
            textSize="display1"
            ref={postTitle}
            className={`${styles.postTitle} ${mounted && (top && top > 80) ? styles.top : ''}`}>
            First Post
          </Text>
        </Div>
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
        <Div>
          <Text tag="section">My name {posts.name} {posts.job}</Text>
        </Div>
      </Div>

    </Layout>
  )
}
