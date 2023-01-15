import styles from './styles.module.css'

export const Home = () => {
  const div = document.createElement('div')

  styles.home && div.classList.add(styles.home)

  div.textContent = 'Home'

  return div
}
