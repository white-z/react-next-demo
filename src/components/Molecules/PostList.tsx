import { Div, Input } from 'atomize'
import styles from './PostList.module.scss'
import { useEffect, useState, useRef } from 'react'
import { StackIndex } from 'styletron-react'

type PostItem = {
  name: string,
  id: number
}

export default function PostList({ list }: {list: PostItem[]}) {
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState('')
  const [searchList, setSearchList] = useState(list as PostItem[])
  const handlerValueChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
    const inputValue = String.prototype.toLowerCase.call(e.target.value || '').trim()
    setSearchList(list.filter((el: any) => el.name.toLowerCase().indexOf(inputValue) > -1))
  }

  const deleteItem = (index: StackIndex) => {
    searchList.splice(index, 1)
    setSearchList(state => {
      return [...searchList]
    })
  }
  
  useEffect(() => {
    setMounted(true)
  }, [mounted, searchList])

  return (
    mounted ? 
    <>
      <Input bg="themeBg" textColor="themeColor" value={value} onChange={handlerValueChange}></Input>
      <Div className={styles.wrapper}>
        {searchList.map((el: PostItem, i: StackIndex) => {
          return <Div onClick={() => deleteItem(i)} className={styles.item} key={el.id}>{el.name}</Div>
        })}
      </Div>
    </>
    : null
  )
}