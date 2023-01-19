export type PaginationProps = {
  totalElements: number
  size: number
  initialCurrentPage?: number
  renderContent: () => Promise<void>
}
