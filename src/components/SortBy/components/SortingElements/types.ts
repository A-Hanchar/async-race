import { SortElement } from '../SortElement/types'

export type SortingElementsProps = {
  elements: [SortElement, ...SortElement[]]
  hiddenClassname?: string
  onclick: (sortingElement: SortElement) => Promise<void>
}
