import { Button } from 'components/Button'
import { createElementWithClassNameAndAppendNode, toggleClassnameToElement } from 'helpers'

import { Arrows } from './components/Arrows'
import { SortElement } from './components/SortElement/types'
import { SortingElements } from './components/SortingElements'
import styles from './styles.module.css'
import { SortByProps } from './types'

export const SortBy = ({ elements }: SortByProps) => {
  let currentElem = elements[0]

  const sortingTypeButton = Button({
    classname: styles.chooseSorting,
    onclick: () => {
      toggleClassnameToElement({ element: sortingElements, classname: styles.hidden })
    },
    children: currentElem.title,
  })

  const updateSortingElements = (newSortingElement: SortElement) => {
    currentElem = newSortingElement

    sortingTypeButton.replaceChildren(currentElem.title)
  }

  const sortingElements = SortingElements({ elements, hiddenClassname: styles.hidden, onclick: updateSortingElements })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [sortingTypeButton, Arrows(), sortingElements],
  })

  return wrapper
}
