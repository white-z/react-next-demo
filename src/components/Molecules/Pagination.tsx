import {Div, Button} from 'atomize'
import styles from './Pagination.module.scss'
import { PaginationProps } from '../typings'

export * from '../typings/Pagination'

export function Pagination (props: PaginationProps) {
  const {
    defaultPageSize = 10,
    defaultCurrent = 1,
    total = 0,
    showTotal = false,
    onChange = () => {},
    itemRender = () => {}
  } = props
  let currentPage = defaultCurrent
  const onPageClick = (size: number, currentPage: number) => {
    if(size !== currentPage) {
      currentPage = size
      onChange(size, 'page')
    }
  }
  const pageLength = ((total / defaultPageSize) >> 0) + 1
  const renderPageLength = (pageLength: number) => {
    const pages = [];
    for(let i = 1; i <= pageLength; i++) {
      pages.push(i)
    }
    return pages.map(size => {
      return (
        <Div
          key={size}
          className={styles.item}
          onClick={() => onPageClick(size, currentPage)}
        >
          <Button 
            className={`${styles.btn} ${currentPage === size ? styles.active : ''}`}
            h="2rem"
            w="2rem"
            bg="themeBg"
          >
            { size }
          </Button>
        </Div>
      )
    })
  }

  return (
    <Div className={styles.wrapper} p="var(--size-tiny)">
      {
        renderPageLength(pageLength)
      }
    </Div>
  )
}