export const addClassnameToElement = ({
  element,
  classname,
}: {
  element: HTMLElement | SVGGraphicsElement
  classname?: string
}) => {
  classname && element.classList.add(classname)
}
