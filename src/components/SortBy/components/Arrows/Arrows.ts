import { Button } from 'components/Button'
import { SORT_TYPE } from 'enums'
import { createElementWithClassName, createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { ArrowsProps, ARROW_DATA_ATTRIBUTE } from './types'

export const Arrows = ({ onclick }: ArrowsProps) => {
  let currentSort = SORT_TYPE.ASC

  const arrowAsc = createElementWithClassName({ tagName: 'span', classname: [styles.arrowAsc, styles.arrow] })
  const arrowDesc = createElementWithClassName({ tagName: 'span', classname: [styles.arrowDesc, styles.arrow] })

  const setArrowsSortType = () => {
    arrowAsc.setAttribute(ARROW_DATA_ATTRIBUTE.DATA_SORT_TYPE, currentSort)
    arrowDesc.setAttribute(ARROW_DATA_ATTRIBUTE.DATA_SORT_TYPE, currentSort)
  }

  const arrowsWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.arrowsWrapper,
    children: [arrowAsc, arrowDesc],
  })

  const handleButtonClick = async () => {
    currentSort = currentSort === SORT_TYPE.ASC ? SORT_TYPE.DESC : SORT_TYPE.ASC

    setArrowsSortType()

    await onclick(currentSort)
  }

  setArrowsSortType()

  return Button({ children: arrowsWrapper, classname: styles.sortButton, onclick: handleButtonClick })
}
