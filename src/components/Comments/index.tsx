import { useEffect } from 'react'

export default function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', 'true')
    script.setAttribute('repo', 'belclei/blog')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'dark-blue')

    if (anchor) {
      anchor.appendChild(script)
    }
  }, [])

  return <div id="comments" />
}
