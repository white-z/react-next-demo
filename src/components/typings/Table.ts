import { CSSProperties } from "react";
import { StyleObject } from "styletron-standard";
import { PaginationProps } from './Pagination';

export type RowKey = string

/**
 * @param dataSource TableRow[] 表格数据 required
 * @param columns TableColumn[] 列描述数据对象 required
 * @param rowKey [RowKey] 行key 默认值：'key'
 * @param children [any] 插槽 默认值：null
 * @param bordered [boolean] 表格边框 默认值：false
 * @param loading [boolean] 加载状态 默认值：false
 * @param style [CssProperties] 最外层style
 * @param className [string] 最外层class
 * @param h [string | number] tbody高度 默认值：'100%'
 * @param p [string] 用于控制td单元格内边距 默认值：'.625rem'
 */
export interface TableProps {
  dataSource: any[],
  columns: TableColumn[],
  rowKey: RowKey,
  children?: any,
  bordered?: boolean,
  loading?: boolean,
  pagination: PaginationProps,
  style?: CSSProperties,
  className?: string,
  h?: string | number,
  p?: string | StyleObject
}

/**
 * @param title string 表头文字描述 required
 * @param dataIndex string 列数据在数据项中对应的路径 required
 * @param key [string] React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性
 * @param align ['left', 'center', 'right'] 文字对齐方式 默认值：left
 * @param render [Function] 自定义单元格的渲染数据
 */
export interface TableColumn {
  title: string,
  dataIndex: string,
  key?: string | number,
  align?: string,
  render?: Function,
  width?: string | number,
  ellipsis?: boolean
}


export interface TableRow {
  [key: string]: any
}