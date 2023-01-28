import { SortElement } from '../SortElement/types'

export type SortingElementsProps = {
  elements: [SortElement, ...SortElement[]]
  hiddenClassname?: string
  updateSort: (sortingElement: SortElement) => void
  renderContent: () => Promise<void>
}
