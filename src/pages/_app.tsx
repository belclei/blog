import type { AppProps } from 'next/app'
import '../styles/global.scss'
import '../styles/prism-a11y-dark.css'
import 'dracula-ui/styles/dracula-ui.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
