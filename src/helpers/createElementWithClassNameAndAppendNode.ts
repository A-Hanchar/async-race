import { ChildrenNode } from 'types'

import { createElementWithClassName } from './createElementWithClassName'

export const createElementWithClassNameAndAppendNode = <K extends keyof HTMLElementTagNameMap>({
  tagName,
  classname,
  children,
}: {
  tagName: K
  classname?: string | Array<string | undefined>
  children?: ChildrenNode | Array<ChildrenNode | undefined>
}) => {
  const element = createElementWithClassName({ tagName, classname })

  if (!children) {
    return element
  }

  if (Array.isArray(children)) {
    const filteredChildren = children.filter(Boolean)

    filteredChildren.forEach((node) => {
      element.append(node!)
    })

    return element
  }

  element.append(children)

  return element
}
