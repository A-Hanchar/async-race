import { getWinners } from 'api/winners'

export const Winners = async () => {
  const div = document.createElement('div')

  await getWinners({})

  div.textContent = 'Winners Page'

  return div
}
