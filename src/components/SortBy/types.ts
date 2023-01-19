import { SORT_TYPE } from 'enums'
import { SortingKeys } from 'types'

import { SortElement } from './components/SortElement/types'

export type SortByProps = {
  elements: [SortElement, ...SortElement[]]
  renderContent: (params: { _sort?: SortingKeys; _order?: SORT_TYPE }) => Promise<void>
}
