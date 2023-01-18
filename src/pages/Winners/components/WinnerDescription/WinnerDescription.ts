import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { convertMsToSec } from 'utils'

import styles from './styles.module.css'
import { WinnerDescriptionProps } from './types'

export const WinnerDescription = ({ time, wins }: WinnerDescriptionProps) => {
  const listItems = [
    {
      title: 'Wins: ',
      description: String(wins),
    },
    {
      title: 'Best Time (sec): ',
      description: `${convertMsToSec(time)} sec`,
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
