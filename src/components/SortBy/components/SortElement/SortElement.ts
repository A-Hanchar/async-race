import { Button } from 'components/Button'

import styles from './styles.module.css'

import { SortElementProps } from './types'

export const SortElement = ({ title, onclick }: SortElementProps) =>
  Button({ children: title, onclick, classname: styles.button })
