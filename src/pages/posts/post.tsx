import { useRef } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import cn from 'classnames'
import Link from 'next/link'
import { Div, Text } from 'atomize';
import Layout from '@/layout/Layout'
import { useWindowOffset, useWindowDimensions } from '@/@hooks'

import styles from '@/styles/post.module.scss';

export const getServerSideProps: GetServerSideProps = async (context) => {
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

type ListResult = {
  data: any[],
  total: number,
  pageSize: number
}

export default function FirstPost({ list }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const { width } = useWindowDimensions()
  const { top, bottom } = useWindowOffset()
  const postTitle = useRef()
  const isFixedTitle = (top as number) > 80

  return (
    <Layout title="全部文章">
      <Div>
        <Div h="3rem">
          <Text
            shadow={isFixedTitle ? '2' : ''}
            tag="h1"
            h="3rem"
            textSize="display1"
            ref={postTitle}
            className={cn({
              [styles.postTitle]: true,
              [styles.top]: isFixedTitle
            })}>
            <Text tag="section">Current Scroll Top {top} / Bottom {bottom} & Page Width {width}</Text>
          </Text>
        </Div>
        <Div textSize="subheader">
          <Link href="/">
            <a className="foo" rel="noopener noreferrer">
              Hello World
            </a>
          </Link>
        </Div>
      </Div>
    </Layout>
  )
}
