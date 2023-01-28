import { getWinners, getWinnersCount } from 'api/winners'
import { Pagination } from 'components/Pagination'
import { SortBy } from 'components/SortBy'
import { Text } from 'components/Text'
import { SESSION_STORAGE_KEY } from 'enums'
import { createElementWithClassName, createElementWithClassNameAndAppendNode } from 'helpers'
import { one, pageWinnersSize } from 'variables'

import { WinnerInfoBlock } from './components/WinnerInfoBlock'

import styles from './styles.module.css'

export const Winners = async () => {
  const totalElements = await getWinnersCount()

  const renderContent = async () => {
    const { currentPage, pageSize, totalPages } = getPaginationParams()
    const { _order, _sort } = getSortingParams()

    const winners = await getWinners({
      _limit: pageSize,
      _page: currentPage,
      _sort,
      _order,
    })

    const winnerBlocks = await Promise.all(
      winners.map(({ id, time, wins }, index) =>
        WinnerInfoBlock({ carId: id, time, wins, orderNumber: (currentPage - one) * pageSize + (index + one) }),
      ),
    )

    currentPageTextWrapper.replaceChildren(
      Text({ tagName: 'h2', text: `Page: ${currentPage} / ${totalPages}`, classname: styles.title }),
    )

    winnerBlocksWrapper.replaceChildren(...winnerBlocks)
  }

  const currentPageTextWrapper = createElementWithClassName({
    tagName: 'div',
  })

  const { sortByWrapper, getSortingParams } = SortBy({
    elements: [
      { title: 'Time', key: 'time' },
      { title: 'Count wins', key: 'wins' },
    ],
    renderContent,
  })

  const winnerBlocksWrapper = createElementWithClassName({
    tagName: 'div',
    classname: styles.winnerBlockWrapper,
  })

  const { paginationWrapper, getPaginationParams } = Pagination({
    size: pageWinnersSize,
    totalElements,
    renderContent,
    key: SESSION_STORAGE_KEY.CURRENT_WINNER_PAGE,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      Text({ tagName: 'h1', text: `Winners (${totalElements})`, classname: styles.title }),
      currentPageTextWrapper,
      sortByWrapper,
      winnerBlocksWrapper,
      paginationWrapper,
    ],
  })

  await renderContent()

  return wrapper
}
