import gitHubLogo from 'assets/images/github-logo.svg'
import { Image } from 'components/Image'
import { Link } from 'components/Link'

import styles from './styles.module.css'
import { GitHubLinkProps } from './types'

export const GitHubLink = ({ userId }: GitHubLinkProps) => {
  const fragment = document.createDocumentFragment()

  fragment.append(
    Image({
      src: gitHubLogo,
      alt: `gitHub: ${userId}`,
      classname: styles.logo,
    }),
    userId,
  )

  return Link({
    children: fragment,
    href: `https://github.com/${userId}`,
    classname: styles.link,
    target: '_blank',
  })
}
