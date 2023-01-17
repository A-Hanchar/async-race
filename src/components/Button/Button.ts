import { addClassnameToElement, createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { ButtonProps } from './types'

export const Button = ({ children, classname, onclick, type = 'button', disabled = false }: ButtonProps) => {
  const button = createElementWithClassNameAndAppendNode({ tagName: 'button', classname, children })

  addClassnameToElement({ element: button, classname: styles.button })

  button.type = type
  button.disabled = disabled

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault()

    await onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}
