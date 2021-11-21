import { ReactNode } from 'react'
import { Header } from '../Header'
import styles from './styles.module.scss'

interface MainProps {
  children: ReactNode
}
export function Main(props: MainProps) {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.contentContainer}>{props.children}</div>
    </main>
  )
}
