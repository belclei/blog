import styles from './styles.module.scss'
import Link from 'next/link'
import { parseWithOptions } from 'date-fns/fp'

interface PostCardProps {
  link: string
  title: string
  subtitle: string
  image: string
  createdAt: string
  timeToRead: number
}
export function PostCard(props: PostCardProps) {
  return (
    <article className={styles.container}>
      <Link href={props.link}>
        <a>
          <span className={styles.infoDate}>{props.createdAt}</span>
          <img alt={props.title} src={props.image} />
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <span className={styles.infoReadTime}>Leia em {props.timeToRead} min</span>
        </a>
      </Link>
    </article>
  )
}
