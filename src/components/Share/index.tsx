import { SiLinkedin, SiTwitter } from 'react-icons/si'
import { Config } from '../../constants/config'
import styles from './styles.module.scss'

export function Share() {
  const currentURL = ''
  const props = {
    post: {
      title: '',
      subtitle: ''
    }
  }
  return (
    <section className={styles.container}>
      <span>Compartilhe: </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `Encontrei esse post no blog do @belclei: ${props.post.title}`
        )}&url=${encodeURIComponent(currentURL)}`}
        target="_blank"
        rel="noreferrer"
      >
        <SiTwitter size={18} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentURL
        )}&title=${encodeURIComponent(props.post.title)}&summary=${encodeURIComponent(props.post.subtitle)}&source="${
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
