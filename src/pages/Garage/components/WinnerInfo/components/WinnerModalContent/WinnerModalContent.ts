import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { oneSecond, three } from 'variables'

import styles from './styles.module.css'
import { WinnerModalContentProps } from './types'

export const WinnerModalContent = ({ manufactory, model, time }: WinnerModalContentProps) => {
  const listItems = [
    {
      title: 'Manufactory: ',
      description: manufactory,
    },
    {
      title: 'Model: ',
      description: model,
    },
    {
      title: 'Time: ',
      description: `${(time / oneSecond).toFixed(three)} sec`,
    },
  ].map(({ title, description }) => {
    const itemTitle = Text({ tagName: 'p', text: title, classname: styles.itemTitle })
    const itemDescription = Text({ tagName: 'p', text: description })

    const li = createElementWithClassNameAndAppendNode({
      tagName: 'li',
      children: [itemTitle, itemDescription],
      classname: styles.listItem,
    })

    return li
  })

  return createElementWithClassNameAndAppendNode({ tagName: 'ul', classname: styles.list, children: listItems })
}
