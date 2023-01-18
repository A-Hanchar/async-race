import { SortingKeys } from 'types'

export type SortElement = {
  key: SortingKeys
  title: string
}

export type SortElementProps = SortElement & {
  onclick: () => void
}
