import { createElementWithClassNameAndAppendNode } from 'helpers'

import { LabelWithFormElementProps } from './types'

export const LabelWithFormElement = ({ labelTitle, classname, managedElement }: LabelWithFormElementProps) => {
  const label = createElementWithClassNameAndAppendNode({
    tagName: 'label',
    classname,
    children: [labelTitle, managedElement],
  })

  return label
}
