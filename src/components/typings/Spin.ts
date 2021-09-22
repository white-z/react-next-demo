export enum SpinName {
  Loading = 'Loading',
  Loading2 = 'Loading2',
  Loading3 = 'Loading3'
}

export interface SpinProps {
  spinning: boolean,
  name?: SpinName,
  size?: string,
  children?: any
}