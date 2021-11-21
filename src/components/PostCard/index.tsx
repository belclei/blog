import styles from './styles.module.scss'
import Link from 'next/link'

export function PostCard() {
  return (
    <article className={styles.container}>
      <Link href="/blog/teste">
        <a>
          <span className={styles.infoDate}>21 de outubro de 2020</span>
          <img alt="Internet" src="/posts/000/helloworld.jpg" />
          <h1>Internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta.
          </p>
          <span className={styles.infoReadTime}>Leia em 3 min</span>
        </a>
      </Link>
    </article>
  )
}
