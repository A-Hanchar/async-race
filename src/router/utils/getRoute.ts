import { SYMBOL } from 'enums'
import { urlInstanse } from 'helpers'
import { notFoundRoute, rootRoute, router, RouterOwnObject } from 'router'
import { routerPathes } from 'router/routerPathes'

export const getRoute = () => {
  const url = urlInstanse.getUrl()
  const { pathname } = url

  if (pathname === routerPathes.home) {
    return rootRoute
  }

  const getDeeplsRoute = (routes: RouterOwnObject[] | undefined, pathnames: string[]): RouterOwnObject => {
    const maxAllowedLengthOfPathnames = 1

    if (!routes || pathnames.length > maxAllowedLengthOfPathnames) {
      return notFoundRoute
    }

    const [pathName] = pathnames

    return (
      routes.find(({ path }) => (path.includes(SYMBOL.COLON) ? true : path === `${SYMBOL.SLASH}${pathName!}`)) ??
      notFoundRoute
    )
  }

  const pathNameParts = pathname.split(SYMBOL.SLASH).filter(Boolean)

  return getDeeplsRoute(router, pathNameParts)
}
