import { addClassnameToElement } from 'helpers'
import { converterPxToRem } from 'utils'

import { initialFillColor, initialHeight, initialViewBox, initialWidth } from './constants'
import { SVGContainerProps } from './types'

export const SVGContainer = ({
  fill = initialFillColor,
  height = initialHeight,
  width = initialWidth,
  viewBox = initialViewBox,
  classname,
}: SVGContainerProps) => {
  const svg: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  addClassnameToElement({ element: svg, classname })

  svg.setAttribute('width', converterPxToRem(width))
  svg.setAttribute('height', converterPxToRem(height))
  svg.setAttribute('fill', fill)
  svg.setAttribute('viewBox', viewBox)

  return svg
}
