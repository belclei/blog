import React from 'react'

import Image from 'next/image'
import { FaPlusCircle, FaBookReader } from 'react-icons/fa'

import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Main } from '../../components/Main'
import { Loading } from '../../components/Loading'
import { Share } from '../../components/Share'

import styles from './post.module.scss'
import Comments from '../../components/Comments'
import { metaProps } from '../../utils/types'
import { getAllPosts, getPostBySlug } from '../../services/Content'
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ParsedUrlQuery } from 'querystring'

interface IPostUrl extends ParsedUrlQuery {
  slug: string
}
interface PostPageProps {
  slug: string
  title: string
  subtitle: string
  createdAt: string
  createdAt_formatted: string
  timeToRead: number
  image: string
  content: string
}

const PostPage: NextPage<PostPageProps> = (props: PostPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  const meta: metaProps = {
    title: props.title,
    description: props.subtitle,
    post: {
      date: props.createdAt,
      image: props.image,
      modified_date: props.createdAt
    }
  }
  return (
    <Main meta={meta}>
      <article className={styles.postContainer}>
        <img alt={props.title} src={props.image} />
        <h1>{props.title}</h1>
        <div className={styles.infoContainer}>
          <div>
            <FaPlusCircle size={14} />
            <span>{props.createdAt_formatted}</span>
          </div>
          <div>
            <FaBookReader size={14} />
            <span>{props.timeToRead} min de leitura</span>
          </div>
        </div>
        <Share />
        <span className={styles.subtitle}>{props.subtitle}</span>
        <div>{props.content}</div>
        <Share />
      </article>
      <h2>Comentários</h2>
      <Comments />
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IPostUrl

  const post = getPostBySlug(slug)
  if (post === null) {
    return {
      notFound: true
    }
  }
  // const content = await markdownToHtml(postContent || '')
  const timeToRead = Math.ceil(post.content.split(' ').length / 200)
  const createdAt_formatted = formatRelative(new Date(post.createdAt), new Date(), {
    locale: ptBR
  })

  return {
    props: {
      slug,
      timeToRead,
      createdAt_formatted,
      ...post
    },
    revalidate: 60 * 5 // 5 minutos
  }
}

export default PostPage
