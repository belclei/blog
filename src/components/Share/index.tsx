import { SiLinkedin, SiTwitter } from 'react-icons/si'
import { Config } from '../../constants/config'
import styles from './styles.module.scss'

interface ShareProps {
  title: string
  subtitle: string
  url: string
}
export function Share(props: ShareProps) {
  return (
    <section className={styles.container}>
      <span>Compartilhe: </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Encontrei esse post no blog do @belclei: ${props.title}`
        )}&url=${encodeURIComponent(props.url)}`}
        target="_blank"
        rel="noreferrer"
      >
        <SiTwitter size={18} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          props.url
        )}&title=${encodeURIComponent(props.title)}&summary=${encodeURIComponent(props.subtitle)}&source="${
          Config.site_name
        }"`}
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin size={18} />
      </a>
    </section>
  )
}
