import { renderComponent } from 'router'

import { LinkProps } from './types'

export const Link = ({ href, target = '_self', children }: LinkProps) => {
  const a = document.createElement('a')
  children && a.append(children)

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
