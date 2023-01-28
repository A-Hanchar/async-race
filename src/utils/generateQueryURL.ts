import { SYMBOL } from 'enums'
import { EmptyString } from 'types'

export const generateQueryURL = (params: Record<string, string | number | undefined>) => {
  const queryParamsEntries = Object.entries(params).filter(([, value]) => !!value)

  if (!queryParamsEntries.length) {
    const emptyString: EmptyString = ''

    return emptyString
  }

  let queryURL: string = SYMBOL.QUESTION

  queryParamsEntries.forEach(([key, value]) => {
    const param = `${SYMBOL.AND}${key}${SYMBOL.EQUAL}${value!}`

    queryURL += param
  })

  return queryURL
}
