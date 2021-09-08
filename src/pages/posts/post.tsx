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
  const res = await fetch('http://localhost:4000/api/list')
  const list = await res.json();
  // const posts: Post = await res.json();
  return {
    props: {
      list: list.data
    }
  }
}

export default function FirstPost({ list }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { width } = useWindowDimensions();
  const { top } = useWindowOffset();
  const postTitle = useRef();

  const toggle = {
    isFixedTitle: (top as number) > 80
  }

  return (
    <Layout title="全部文章">
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
            <Text tag="section">Current Scroll Top {top} & Page Width {width}</Text>
          </Text>
        </Div>
        <Text textSize="subheader">
          <Link href="/">
            <a className="foo" rel="noopener noreferrer">
              Hello World
            </a>
          </Link>
        </Text>
        <Div className={styles.list}>
          {
            list.map((el: any) => {
              return <Div className={styles.listItem} key={el.id}>{el.name}</Div>
            })
          }
        </Div>
      </Div>
    </Layout>
  )
}
