export interface PaginationProps {
  defaultPageSize?: number,
  defaultCurrent?: number,
  total?: number,
  showTotal?: boolean,
  onChange?: Function,
  itemRender?: Function,
  [key: string]: any
}