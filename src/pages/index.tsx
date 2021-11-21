import type { NextPage } from 'next'
import { Main } from '../components/Main'
import { PostCard } from '../components/PostCard'

const Home: NextPage = () => {
  return (
    <Main>
      <PostCard />
      <PostCard />
      <PostCard />
    </Main>
  )
}

export default Home
