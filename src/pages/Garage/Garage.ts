import { getCars, getCarsCount } from 'api/garage'
import { Pagination } from 'components/Pagination'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { pageCarsSize } from 'variables'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'

export const Garage = async () => {
  let initialTotalElements = await getCarsCount()

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const renderContent = async () => {
    const totalElements = await getCarsCount()

    if (initialTotalElements !== totalElements) {
      initialTotalElements = totalElements

      const { currentPage } = getPaginationParams()

      const { paginationWrapper: newPaginationWrapper, getPaginationParams: newGetPaginationParams } = Pagination({
        size: pageCarsSize,
        totalElements: initialTotalElements,
        initialCurrentPage: currentPage,
        renderContent,
      })

      paginationWrapper = newPaginationWrapper
      getPaginationParams = newGetPaginationParams
    }

    const { currentPage, pageSize, totalPages } = getPaginationParams()

    const cars = await getCars({ _limit: pageSize, _page: currentPage })

    const startEngineButtons: HTMLButtonElement[] = []
    const stopEngineButtons: HTMLButtonElement[] = []

    const { wrapper: topButtonsWrapper, raceButton } = TopButtons({
      startEngineButtons,
      stopEngineButtons,
      renderGarageContent: renderContent,
    })

    const managedCars = cars.map(({ color, id, name }) =>
      ManagedCar({
        carId: id,
        color,
        name,
        startEngineButtons,
        raceButton,
        stopEngineButtons,
        renderGarageContent: renderContent,
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
  })

  let paginationWrapper = initialPaginationWrapper
  let getPaginationParams = initialGetPaginationParams

  await renderContent()

  return wrapper
}
