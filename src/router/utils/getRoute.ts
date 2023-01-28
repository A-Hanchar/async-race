import { SYMBOL } from 'enums'
import { urlInstanse } from 'helpers'
import { notFoundRoute, rootRoute, router, RouterOwnObject, routerPath } from 'router'

export const getRoute = () => {
  const url = urlInstanse.getUrl()
  const { pathname } = url

  if (pathname === routerPath.home) {
    return rootRoute
  }

  const getDeeplsRoute = (routes: RouterOwnObject[] | undefined, pathnames: string[]): RouterOwnObject => {
    const maxAllowedLengthOfPathnames = 1

    if (!routes || pathnames.length > maxAllowedLengthOfPathnames) {
      return notFoundRoute
    }

    const [pathName] = pathnames

    return routes.find(({ path }) => path === `${SYMBOL.SLASH}${pathName!}`) ?? notFoundRoute
  }

  const pathNameParts = pathname.split(SYMBOL.SLASH).filter(Boolean)

  return getDeeplsRoute(router, pathNameParts)
}
