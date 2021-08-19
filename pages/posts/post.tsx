import { useRef } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import Link from 'next/link'
import { Div, Text, Input } from 'atomize';
import Layout from '@/components/Layout'
import { useWindowOffset, useWindowDimensions } from '@/@hooks'

import styles from '@/styles/post.module.scss';

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await new Promise((resolve, reject) => {
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
  const postTitle = useRef();

  const toggle = {
    isFixedTitle: (top as number) > 80
  }

  return (
    <Layout title={posts.name}>
      <Div>
        <Div>
          <Text
            shadow={ toggle.isFixedTitle ? '2' : '' }
            tag="h1"
            textSize="display1"
            ref={postTitle}
            className={cn({
              [styles.postTitle]: true,
              [styles.top]: toggle.isFixedTitle
            })}>
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
        <Div>
          <Input bg="themeBg" textColor="themeColor" placeholder="Search" />
        </Div>
      </Div>
    </Layout>
  )
}
