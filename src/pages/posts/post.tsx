import { useRef, useState, useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import cn from 'classnames'
import Link from 'next/link'
import { Div, Text, Switch, Label, Anchor, Modal, Button, Input } from 'atomize';
import Layout from '@/layout/Layout'
import { Table, TableRow } from '@/components/Molecules'
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
  const [tableLoading, setTableLoading] = useState(false)
  const [tableData, setTableData] = useState<any>([])
  const [pagination, setPagination] = useState({
    total: 0,
    currentPage: 1
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentOpenModal, setCurrentOpenModal] = useState<TableRow>({})
  const postTitle = useRef()
  const isFixedTitle = (top as number) > 80

  useEffect(() => {
    fetch('http://localhost:4000/api/list').then(async (res) => {
      const result: ListResult = await res.json();
      setTableData(result.data)
      setPagination({
        ...pagination,
        total: result.total
      })
    })
  })

  const onOpenModal = (el: TableRow) => {
    setCurrentOpenModal(el)
    setIsOpenModal(true)
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  const setCurrentAddress = (val:string) => {
    setCurrentOpenModal({...currentOpenModal, address: val})
  }

  const onSave = () => {
    setTableData(tableData.map((el: TableRow) => {
      if(el.id === currentOpenModal.id) {
        el = currentOpenModal
      } 
      return el
    }))
    onCloseModal()
  }

  const onDelete = (row: TableRow) => {
    setTableData(tableData.filter((el: TableRow) => el.id !== row.id))
  }

  const onPageChange = (page: number, type: string) => {
    
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 300
    },
    {
      title: '操作',
      dataIndex: 'methods',
      width: 300,
      render(el: TableRow) {
        return (
          <>
            <Button
              onClick={() => onOpenModal(el)}
              d="inline-flex"
              bg="none"
              textColor="info700"
              m={{ r: "1rem" }}
            >
              View Address
            </Button>
            <Button
              onClick={() => onDelete(el)}
              d="inline-flex"
              bg="none"
              textColor="danger600"
              border="1px solid"
              borderColor="transparent"
              hoverBorderColor="danger600"
            >
              Delete
            </Button>
          </>
        )
      }
    }
  ]

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
          <Label onClick={() => setTableLoading(!tableLoading)}>
            <Switch
              checked={tableLoading}
            />
          </Label>
        </Div>
        <Table 
          className={styles.table} 
          dataSource={tableData} 
          columns={columns} 
          rowKey="id" 
          bordered 
          loading={tableLoading}
          pagination={{total: tableData.length, onChange: onPageChange}}
        >
          <div className="some">thing</div>
          <div className="some999">thing999</div>
        </Table>
        <Modal isOpen={isOpenModal} onClose={onCloseModal} align="center" rounded="md" bg="themeBg" textColor="themeColor">
          <Div d="flex">
            {`ID: ${currentOpenModal.id}`}
          </Div>
          <Div d="flex">
            {`Name: ${currentOpenModal.name}`}
          </Div>
          <Div d="flex">
            {`Age: ${currentOpenModal.age}`}
          </Div>
          <Div d="flex">
            {`Address: ${currentOpenModal.address}`}
          </Div>
          <Div>
            <Label>
              <Input bg="themeBg" textColor="themeColor" value={currentOpenModal.address} onChange={(e: any) => setCurrentAddress(e.target.value)} />
            </Label>
          </Div>
          <Div d="flex" justify="flex-end">
            <Button
              onClick={onCloseModal}
              bg="themeBg"
              textColor="medium"
              m={{ r: "1rem" }}
            >
              Cancel
            </Button>
            <Button onClick={onSave} bg="info700">
              Yes, Submit
            </Button>
          </Div>
        </Modal>
      </Div>
    </Layout>
  )
}
