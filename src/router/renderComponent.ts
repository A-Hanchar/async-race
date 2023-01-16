import { Body } from 'components/Body'
import { Layout } from 'components/Layout'

import { routerPath } from './routerPath'
import { getRoute } from './utils'

export const renderComponent = async () => {
  const route = getRoute()

  if (route.path === routerPath.notFound) {
    window.history.pushState({}, '', routerPath.notFound)
  }

  if (route.path === routerPath.home) {
    window.history.pushState({}, '', routerPath.garage)
  }

  const children = await route.content?.()

  Body.replaceChildren(Layout({ children }))
}
