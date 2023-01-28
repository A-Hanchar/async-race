export type ActionButtonsProps = {
  updateCurrentPage: (pageNumber: number) => void
  startPageNumber: number
  totalPages: number
  renderContent: () => Promise<void>
}
