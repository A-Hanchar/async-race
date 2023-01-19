import { Body } from 'components/Body'
import { Layout } from 'components/Layout'

import { routerPath } from './routerPath'
import { getRoute } from './utils'

export const renderComponent = async () => {
  const route = getRoute()

  if (route.path === routerPath.notFound) {
    window.history.replaceState({}, '', routerPath.notFound)
  }

  if (route.path === routerPath.home) {
    window.history.replaceState({}, '', routerPath.garage)
  }

  const children = await route.content?.()

  Body.replaceChildren(Layout({ children }))
}
