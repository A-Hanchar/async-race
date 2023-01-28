import { createElementWithClassNameAndAppendNode } from 'helpers'
import { renderComponent } from 'router'

import styles from './styles.module.css'
import { LinkProps } from './types'

export const Link = ({ href, target = '_self', children, classname, type = 'gold' }: LinkProps) => {
  const a = createElementWithClassNameAndAppendNode({
    tagName: 'a',
    classname: [styles.link, styles[type], classname],
    children,
  })

  a.href = href
  a.target = target

  const handleLinkClick = (event: MouseEvent) => {
    if (target === '_blank') {
      return
    }

    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
