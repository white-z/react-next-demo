import { Spin } from '../Atoms'
import { Div } from 'atomize'
import styles from './Table.module.scss'
import { TableProps, TableColumn } from '../typings'
import { CSSProperties } from 'react'

export * from '../typings/Table'

type StackIndex = number

function Colgroup ({columns}: {columns: TableColumn[]}) {
  return (
    <colgroup>
      {
        columns.map(column => {
          return (
            <col key={column.key || column.dataIndex} 
              width={column.width ? typeof column.width === 'string' ? column.width : column.width + 'px' : ''}
            />
          )
        })
      }
    </colgroup>
  )
}

function Thead ({columns, p}: {columns: TableColumn[], p: any}) {
  return (
    <thead>
      <tr>
        {
          columns.map((column) => {
            return (
              <th key={column.key || column.dataIndex} >
                <Div 
                  p={p}
                  className={`${styles.cell} ${styles[`cell-${column.align || 'left'}`]}`}
                >
                  {column.title}
                </Div>
              </th>
            )
          })
        }
      </tr>
    </thead>
  )
}

function Tbody ({children}: any) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}

function Tr ({children}: any) {
  return (
    <tr>{children}</tr>
  )
}

function Td ({column, row, rowIndex, p, children}: any) {
  return (
    <td>
      <Div p={p} className={`${styles.cell} ${column.ellipsis ? styles.ellipsis : ''}`}>
        {
          typeof column.render === 'function' ? column.render(row, rowIndex) : row[column.dataIndex]
        }
      </Div>
    </td>
  )
}

export function Table(props: TableProps) {
  const {
    dataSource = [], 
    columns = [], 
    rowKey = 'key',
    bordered = false, 
    loading = false, 
    h = '100%',
    p = '.625rem',
    className = '',
    style,
    children
  } = props

  return (
    <Div className={`${styles.wrapper} ${className}`} style={{...style as CSSProperties}}>
      <Spin spinning={loading}>
        <Div className={styles.container} style={{height: typeof h === 'string' ? h : h + 'px'}}>
          <table className={`${styles.content} ${bordered ? styles.bordered : ''}`}>
            <Colgroup columns={columns} />
            <Thead columns={columns} p={p}/>
            <Tbody>
              {
                dataSource.map((row, rowIndex: StackIndex) => (
                  <Tr key={row[rowKey]}>
                    {
                      columns.map(column => {
                        return (
                          <Td 
                            key={column.key || column.dataIndex} 
                            column={column} 
                            row={row} 
                            rowIndex={rowIndex}
                            p={p}
                          >
                            {children}
                          </Td>
                        )
                      })
                    }
                  </Tr>
                ))
              }
            </Tbody>
          </table>
          {
            ! dataSource.length && (
              <Div className={styles.empty} textColor="gray500">
                Empty List
              </Div>
            )
          }
        </Div>
      </Spin>
    </Div>
  )
}