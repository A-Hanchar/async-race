import { createElementWithClassNameAndAppendNode, sessionStorageInstanse } from 'helpers'
import { one } from 'variables'

import { ActionButtons } from './components/ActionButtons'
import styles from './styles.module.css'
import { PaginationProps } from './types'

export const Pagination = ({ totalElements, size, renderContent, key }: PaginationProps) => {
  const totalPages = Math.ceil(totalElements / size)
  let currentPage = sessionStorageInstanse.getCurrentPage(key)

  if (currentPage > totalPages) {
    currentPage = totalPages
  }

  if (currentPage < one && totalPages >= one) {
    currentPage = one
  }

  sessionStorageInstanse.setCurrentPage(key, currentPage)

  const updateCurrentPage = (newPageNumber: number) => {
    currentPage = newPageNumber
    sessionStorageInstanse.setCurrentPage(key, currentPage)
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
