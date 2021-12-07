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
        aria-label="compartilhe no twitter"
      >
        <SiTwitter size={18} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="compartilhe no linkedin"
      >
        <SiLinkedin size={18} />
      </a>
    </section>
  )
}
