import { SORT_TYPE } from 'enums'

export type ArrowsProps = {
  updateOrder: (newOrder: SORT_TYPE) => void
  renderContent: () => Promise<void>
}

export enum ARROW_DATA_ATTRIBUTE {
  'DATA_SORT_TYPE' = 'DATA_SORT_TYPE',
}
