import { getWinners } from 'api/winners'
import { SortBy } from 'components/SortBy'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { pageWinnersSize } from 'variables'

import { WinnerInfoBlock } from './components/WinnerInfoBlock'

import styles from './styles.module.css'

export const Winners = async () => {
  const { totalElements, winners } = await getWinners({ _limit: pageWinnersSize })

  const countElements = totalElements ? `(${totalElements})` : ''

  const winnerBlocks = await Promise.all(
    winners.map(({ id, time, wins }) => WinnerInfoBlock({ carId: id, time, wins })),
  )

  const winnerBlocksWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: winnerBlocks,
    classname: styles.winnerBlockWrapper,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      Text({ tagName: 'h1', text: `Garage: ${countElements}`, classname: styles.title }),
      SortBy({
        elements: [
          { title: 'Time', key: 'time' },
          { title: 'Count wins', key: 'wins' },
        ],
      }),
      winnerBlocksWrapper,
    ],
  })

  return wrapper
}
