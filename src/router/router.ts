import { Home, NotFound, Garage, Winners } from 'pages'

import { routerPathes } from './routerPathes'
import { RouterOwnObject } from './types'

export const rootRoute: RouterOwnObject = {
  path: routerPathes.home,
  content: Home,
}

export const notFoundRoute: RouterOwnObject = {
  path: routerPathes.notFound,
  content: NotFound,
}

export const router: RouterOwnObject[] = [
  rootRoute,
  {
    path: routerPathes.garage,
    content: Garage,
  },
  {
    path: routerPathes.winners,
    content: Winners,
  },
  notFoundRoute,
]
