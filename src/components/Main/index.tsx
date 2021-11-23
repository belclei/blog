import { ReactNode } from 'react'
import { Header } from '../Header'
import styles from './styles.module.scss'
import { metaProps } from '../../utils/types'
import { Meta } from '../Meta'

interface MainProps {
  children: ReactNode
  meta: metaProps
}
export function Main(props: MainProps) {
  return (
    <main className={styles.mainContainer}>
      <Meta {...props.meta} />
      <Header />
      <div className={styles.contentContainer}>{props.children}</div>
    </main>
  )
}
