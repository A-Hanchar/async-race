import { Button } from 'components/Button'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { one } from 'variables'

import styles from './styles.module.css'
import { ActionButtonsProps } from './types'

export const ActionButtons = ({
  updateCurrentPage,
  startPageNumber,
  totalPages,
  renderContent,
}: ActionButtonsProps) => {
  let currentPageNumber = startPageNumber

  const handleClick = async (type: 'prev' | 'next') => {
    currentPageNumber = type === 'prev' ? currentPageNumber - one : currentPageNumber + one

    updateCurrentPage(currentPageNumber)
    checkActionButtons()

    await renderContent()
  }

  const prevButton = Button({
    children: 'Prev',
    classname: styles.button,
    onclick: () => {
      handleClick('prev')
    },
  })

  const nextButton = Button({
    children: 'Next',
    classname: styles.button,
    onclick: () => {
      handleClick('next')
    },
  })

  const checkActionButtons = () => {
    prevButton.disabled = currentPageNumber <= one
    nextButton.disabled = currentPageNumber >= totalPages
  }

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [prevButton, nextButton],
  })

  checkActionButtons()

  return wrapper
}
