import { getCars, getCarsCount } from 'api/garage'
import { Pagination } from 'components/Pagination'
import { Text } from 'components/Text'
import { SESSION_STORAGE_KEY } from 'enums'
import { createElementWithClassName } from 'helpers'
import { pageCarsSize } from 'variables'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'
import { ManagedCarButtons } from './types'

export const Garage = async () => {
  let initialTotalElements = await getCarsCount()

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const renderContent = async () => {
    const totalElements = await getCarsCount()

    if (initialTotalElements !== totalElements) {
      initialTotalElements = totalElements

      const { paginationWrapper: newPaginationWrapper, getPaginationParams: newGetPaginationParams } = Pagination({
        size: pageCarsSize,
        totalElements: initialTotalElements,
        renderContent,
        key: SESSION_STORAGE_KEY.CURRENT_GARAGE_PAGE,
      })

      paginationWrapper = newPaginationWrapper
      getPaginationParams = newGetPaginationParams
    }

    const { currentPage, pageSize, totalPages } = getPaginationParams()

    const cars = await getCars({ _limit: pageSize, _page: currentPage })

    const managedCarButtons: ManagedCarButtons[] = []

    const { wrapper: topButtonsWrapper, topButtons } = TopButtons({
      renderGarageContent: renderContent,
      managedCarButtons,
    })

    const managedCars = cars.map(({ color, id, name }) =>
      ManagedCar({
        carId: id,
        color,
        name,
        renderGarageContent: renderContent,
        managedCarButtons,
        topControlButtons: topButtons,
      }),
    )

    wrapper.replaceChildren(
      Text({ tagName: 'h1', text: `Garage: (${initialTotalElements})`, classname: styles.title }),
      Text({ tagName: 'h2', text: `Page: ${currentPage} / ${totalPages}`, classname: styles.title }),
      topButtonsWrapper,
      ...managedCars,
      paginationWrapper,
    )
  }

  const { paginationWrapper: initialPaginationWrapper, getPaginationParams: initialGetPaginationParams } = Pagination({
    size: pageCarsSize,
    totalElements: initialTotalElements,
    renderContent,
    key: SESSION_STORAGE_KEY.CURRENT_GARAGE_PAGE,
  })

  let paginationWrapper = initialPaginationWrapper
  let getPaginationParams = initialGetPaginationParams

  await renderContent()

  return wrapper
}
