import Link from 'next/link'
import { Config } from '../../constants/config'
import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from 'react-icons/si'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a className={styles.logo}>
          <p>{Config.site_name}</p>
        </a>
      </Link>
      <div className={styles.socialMedia}>
        <a href="https://www.twitter.com/belclei/" target="_blank" rel="noreferrer" aria-label="perfil no twitter">
          <SiTwitter size={20} />
        </a>
        <a href="https://github.com/belclei" target="_blank" rel="noreferrer" aria-label="perfil no github">
          <SiGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/belclei/" target="_blank" rel="noreferrer" aria-label="perfil no linkedin">
          <SiLinkedin size={20} />
        </a>
      </div>
    </header>
  )
}
