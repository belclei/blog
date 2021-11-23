import type { NextPage } from 'next'
import { Main } from '../components/Main'
import { PostCard } from '../components/PostCard'
import { metaProps } from '../utils/types'

const Home: NextPage = () => {
  const meta: metaProps = {
    title: 'titulo',
    canonical: 'https://www.belclei.dev.br/eita',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime assumenda perferendis veniam culpa beatae distinctio, aliquam vero inventore quos, iusto pariatur cum labore impedit veritatis natus id doloremque, similique placeat.',
    url: 'https://www.belclei.dev.br',
    post: {
      date: '2020-12-03',
      image: '/posts/000/helloworld.jpg',
      modified_date: '2020-12-05'
    }
  }
  return (
    <Main meta={meta}>
      <PostCard />
      <PostCard />
      <PostCard />
    </Main>
  )
}

export default Home
