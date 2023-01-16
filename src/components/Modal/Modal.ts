import { Body } from 'components/Body'
import { createElementWithClassName } from 'helpers'
import { PropsWithChildren } from 'types'

import { CloseButton } from './components/CloseButton'

import styles from './styles.module.css'

export const Modal = ({ children }: PropsWithChildren) => {
  const handleModalClose = () => {
    Body.removeChild(wrapper)
  }

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
  const contentWrapper = createElementWithClassName({ tagName: 'div', classname: styles.contentWrapper })

  contentWrapper.append(CloseButton({ onclick: handleModalClose }), children ?? '')

  wrapper.addEventListener('click', (event) => {
    const isPopupContentArea = event.composedPath().includes(contentWrapper)

    if (!isPopupContentArea) {
      handleModalClose()
    }
  })

  wrapper.append(contentWrapper)

  return wrapper
}
