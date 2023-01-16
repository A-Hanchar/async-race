import { Body } from 'components/Body'
import { createElementWithClassName } from 'helpers'

import { CloseButton } from './components/CloseButton'
import { Title } from './components/Title'

import styles from './styles.module.css'
import { ModalProps } from './types'

export const Modal = ({ children, title }: ModalProps) => {
  const handleModalClose = () => {
    Body.removeChild(wrapper)
  }

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
  const contentWrapper = createElementWithClassName({ tagName: 'div', classname: styles.contentWrapper })

  contentWrapper.append(CloseButton({ onclick: handleModalClose }), Title({ title }), children ?? '')

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleModalClose()
    }
  })

  wrapper.append(contentWrapper)

  return wrapper
}
