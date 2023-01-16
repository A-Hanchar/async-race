import { NotFound, Garage, Winners } from 'pages'

import { routerPath } from './routerPath'
import { RouterOwnObject } from './types'

export const rootRoute: RouterOwnObject = {
  path: routerPath.home,
}

export const notFoundRoute: RouterOwnObject = {
  path: routerPath.notFound,
  content: NotFound,
}

export const router: RouterOwnObject[] = [
  rootRoute,
  {
    path: routerPath.garage,
    content: Garage,
  },
  {
    path: routerPath.winners,
    content: Winners,
  },
  notFoundRoute,
]
