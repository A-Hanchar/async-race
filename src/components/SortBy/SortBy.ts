import { Button } from 'components/Button'
import { SORT_TYPE } from 'enums'
import { createElementWithClassNameAndAppendNode, toggleClassnameToElement } from 'helpers'

import { Arrows } from './components/Arrows'
import { SortElement } from './components/SortElement/types'
import { SortingElements } from './components/SortingElements'
import styles from './styles.module.css'
import { SortByProps } from './types'

export const SortBy = ({ elements, renderContent }: SortByProps) => {
  const currentElem = elements[0]

  let order = SORT_TYPE.ASC
  let sort = currentElem.key

  const getSortingParams = () => ({
    _order: order,
    _sort: sort,
  })

  const sortingTypeButton = Button({
    classname: styles.chooseSorting,
    onclick: () => {
      toggleClassnameToElement({ element: sortingElements, classname: styles.hidden })
    },
    children: currentElem.title,
  })

  const updateSort = (newSortingElement: SortElement) => {
    sortingTypeButton.replaceChildren(newSortingElement.title)

    sort = newSortingElement.key
  }

  const updateOrder = (newOrder: SORT_TYPE) => {
    order = newOrder
  }

  const sortingElements = SortingElements({ elements, hiddenClassname: styles.hidden, updateSort, renderContent })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [sortingTypeButton, Arrows({ updateOrder, renderContent }), sortingElements],
  })

  return { sortByWrapper: wrapper, getSortingParams }
}
