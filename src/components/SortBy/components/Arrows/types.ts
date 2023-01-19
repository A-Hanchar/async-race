import { SORT_TYPE } from 'enums'

export type ArrowsProps = {
  onclick: (newOrder: SORT_TYPE) => Promise<void>
}

export enum ARROW_DATA_ATTRIBUTE {
  'DATA_SORT_TYPE' = 'DATA_SORT_TYPE',
}
