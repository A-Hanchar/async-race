import { Text } from 'components/Text'
import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { SortingElementsProps } from './types'
import { SortElement } from '../SortElement'
import { SortElement as SortElementType } from '../SortElement/types'

export const SortingElements = ({ elements, hiddenClassname, onclick }: SortingElementsProps) => {
  const handleClick = ({ key, title }: SortElementType) => {
    addClassnameToElement({ element: wrapper, classname: hiddenClassname })

    onclick({ key, title })
  }

  const sortElements = elements.map(({ key, title }) =>
    SortElement({
      key,
      title,
      onclick: () => {
        handleClick({ key, title })
      },
    }),
  )

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: [styles.wrapper, hiddenClassname],
    children: [Text({ tagName: 'span', text: 'Sort By:', classname: styles.title }), ...sortElements],
  })

  return wrapper
}
