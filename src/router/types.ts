export type RoutePathesKeys = 'home' | 'garage' | 'winners'

export type RouterOwnObject = {
  path: string
  content?: () => Node
  childrenRoutes?: RouterOwnObject[]
}
