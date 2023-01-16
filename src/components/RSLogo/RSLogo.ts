import rsSchoolLogo from 'assets/images/rs-school-logo.svg'
import { Image } from 'components/Image'
import { Link } from 'components/Link'

import styles from './styles.module.css'
import { RSLogoProps } from './types'

export const RSLogo = ({ color = 'white' }: RSLogoProps) => {
  const LogoImage = Image({
    src: rsSchoolLogo,
    alt: 'RS School',
    classname: [styles.logo, styles[color]],
  })

  return Link({
    children: LogoImage,
    href: 'https://rs.school/js/',
    target: '_blank',
    classname: styles.link,
  })
}
