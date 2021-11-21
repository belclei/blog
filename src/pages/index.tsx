import type { NextPage } from 'next'
import Link from 'next/link'
import { Main } from '../components/Main'

const Home: NextPage = () => {
  return (
    <Main>
      <h1>oi</h1>
      <p>Teste</p>
      <ul>
        <li>
          <Link href="/blog/teste1">
            <a>
              Teste 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, tempore. Quibusdam nam illum
              aliquid consequatur culpa unde saepe, exercitationem reprehenderit blanditiis. Quia consequuntur ea ab
              deleniti, a ullam at quam.
            </a>
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
    </Main>
  )
}

export default Home
