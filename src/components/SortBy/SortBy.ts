import { Button } from 'components/Button'
import { SORT_TYPE } from 'enums'
import { createElementWithClassNameAndAppendNode, toggleClassnameToElement } from 'helpers'
import { SortingKeys } from 'types'

import { Arrows } from './components/Arrows'
import { SortElement } from './components/SortElement/types'
import { SortingElements } from './components/SortingElements'
import styles from './styles.module.css'
import { SortByProps } from './types'

export const SortBy = async ({ elements, renderContent }: SortByProps) => {
  const currentElem = elements[0]

  let order = SORT_TYPE.ASC
  let sort = currentElem.key

  const updateSortingElementsAndRenderContent = async ({
    _order = order,
    _sort = sort,
  }: {
    _sort?: SortingKeys
    _order?: SORT_TYPE
  }) => {
    order = _order
    sort = _sort

    await renderContent({ _sort: sort, _order: order })
  }

  const sortingTypeButton = Button({
    classname: styles.chooseSorting,
    onclick: () => {
      toggleClassnameToElement({ element: sortingElements, classname: styles.hidden })
    },
    children: currentElem.title,
  })

  const updateSort = async (newSortingElement: SortElement) => {
    sortingTypeButton.replaceChildren(newSortingElement.title)

    await updateSortingElementsAndRenderContent({ _sort: newSortingElement.key })
  }

  const updateOrder = async (newOrder: SORT_TYPE) => {
    await updateSortingElementsAndRenderContent({ _order: newOrder })
  }

  const sortingElements = SortingElements({ elements, hiddenClassname: styles.hidden, onclick: updateSort })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [sortingTypeButton, Arrows({ onclick: updateOrder }), sortingElements],
  })

  await updateSortingElementsAndRenderContent({ _order: SORT_TYPE.ASC, _sort: currentElem.key })

  return wrapper
}
