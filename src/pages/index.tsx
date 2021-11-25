import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { GetStaticProps, NextPage } from 'next'
import { Main } from '../components/Main'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../services/Content'
import { metaProps } from '../utils/types'

interface BlogProps {
  posts: [
    {
      slug: string
      title: string
      subtitle: string
      createdAt: string
      createdAt_formatted: string
      timeToRead: number
      image: string
      content: string
    }
  ]
}
const Blog: NextPage<BlogProps> = (props: BlogProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ props', props)
  const meta: metaProps = {
    title: 'Blog'
  }

  return (
    <Main meta={meta}>
      {props.posts.map(post => (
        <PostCard
          key={post.slug}
          link={`/blog/${post.slug}`}
          title={post.title}
          subtitle={post.subtitle}
          createdAt={post.createdAt_formatted}
          image={post.image}
          timeToRead={post.timeToRead}
        />
      ))}
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  const formattedPosts = posts.map(post => {
    const timeToRead = Math.ceil(post.content.split(' ').length / 200)
    const createdAt_formatted = formatRelative(new Date(post.createdAt), new Date(), {
      locale: ptBR
    })
    return { timeToRead, createdAt_formatted, ...post }
  })
  console.log('🚀 ~ file: index.tsx ~ line 44 ~ formattedPosts', formattedPosts)

  return {
    props: {
      posts: formattedPosts
    },
    revalidate: 60 * 60 * 24 // 1 dia
  }
}

export default Blog
