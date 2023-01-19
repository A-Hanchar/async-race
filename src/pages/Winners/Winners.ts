import { getWinners } from 'api/winners'
import { SortBy } from 'components/SortBy'
import { Text } from 'components/Text'
import { SORT_TYPE } from 'enums'
import { createElementWithClassName, createElementWithClassNameAndAppendNode } from 'helpers'
import { IWinner } from 'interfaces'
import { pageWinnersSize } from 'variables'

import { WinnerInfoBlock } from './components/WinnerInfoBlock'

import styles from './styles.module.css'

export const Winners = async () => {
  const pageTitleWrapper = createElementWithClassName({ tagName: 'div' })
  let winnerBlocks: HTMLDivElement[] = []

  const winnerBlocksWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    children: winnerBlocks,
    classname: styles.winnerBlockWrapper,
  })

  const renderContent = async ({ _sort, _order }: { _sort?: keyof IWinner; _order?: SORT_TYPE }) => {
    const { totalElements, winners } = await getWinners({
      _limit: pageWinnersSize,
      _sort,
      _order,
    })

    winnerBlocks = await Promise.all(winners.map(({ id, time, wins }) => WinnerInfoBlock({ carId: id, time, wins })))

    const countElements = totalElements ? `(${totalElements})` : ''
    const pageTitle = Text({ tagName: 'h1', text: `Garage: ${countElements}`, classname: styles.title })

    pageTitleWrapper.replaceChildren(pageTitle)
    winnerBlocksWrapper.replaceChildren(...winnerBlocks)
  }

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      pageTitleWrapper,
      await SortBy({
        elements: [
          { title: 'Time', key: 'time' },
          { title: 'Count wins', key: 'wins' },
        ],
        renderContent,
      }),
      winnerBlocksWrapper,
    ],
  })

  return wrapper
}
