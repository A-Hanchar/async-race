import { createElementWithClassNameAndAppendNode } from 'helpers'
import { one } from 'variables'

import { ActionButtons } from './components/ActionButtons'
import styles from './styles.module.css'
import { PaginationProps } from './types'

export const Pagination = ({ totalElements, size, initialCurrentPage = one, renderContent }: PaginationProps) => {
  const totalPages = Math.ceil(totalElements / size)
  let currentPage = initialCurrentPage > totalPages ? totalPages : initialCurrentPage

  const updateCurrentPage = (newPageNumber: number) => {
    currentPage = newPageNumber
  }

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: ActionButtons({ startPageNumber: currentPage, totalPages, updateCurrentPage, renderContent }),
  })

  const getPaginationParams = () => ({
    totalElements,
    currentPage,
    pageSize: size,
    totalPages,
  })

  return { paginationWrapper: wrapper, getPaginationParams }
}
