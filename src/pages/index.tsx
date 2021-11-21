import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>oi</h1>
      <p>Teste</p>
      <ul>
        <li>
          <Link href="/blog/teste1">
            <a>Teste 1</a>
          </Link>
        </li>

        <li>
          <Link href="/blog/teste2">
            <a>Teste 2</a>
          </Link>
        </li>

        <li>
          <Link href="/blog/teste3">
            <a>Teste 3</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
