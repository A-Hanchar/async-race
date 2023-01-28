import { Body } from 'components/Body'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import styles from './styles.module.css'
import { ModalProps } from './types'

export const Modal = ({ children, title, onCancel }: ModalProps) => {
  const handleModalClose = () => {
    Body.removeChild(wrapper)

    onCancel?.()
  }

  const contentWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.contentWrapper,
    children: [CloseButton({ onclick: handleModalClose }), Title({ title }), children],
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: contentWrapper,
  })

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleModalClose()
    }
  })

  return wrapper
}
