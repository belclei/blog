import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { GetStaticProps, NextPage } from 'next'
import { Main } from '../components/Main'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../services/Content'
import { metaProps } from '../utils/types'

interface BlogProps {
  title: string
}
const Blog: NextPage<BlogProps> = (props: BlogProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ props', props)
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

export const getStaticProps: GetStaticProps = async context => {
  const posts = getAllPosts()
  const formattedPosts = posts.map(post => {
    const timeToRead = Math.ceil(post.content.split(' ').length / 200)
    const createdAt_formatted = formatRelative(new Date(post.createdAt), new Date(), {
      locale: ptBR
    })
    return { timeToRead, createdAt_formatted }
  })
  console.log('🚀 ~ file: index.tsx ~ line 44 ~ formattedPosts', formattedPosts)

  return {
    props: {
      title: 'éita'
    },
    revalidate: 60 * 60 * 24 // 1 dia
  }
}

export default Blog
