import React from 'react'

import { FaPlusCircle, FaBookReader } from 'react-icons/fa'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
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
import { markdownToHtml } from '../../services/Markdown'
import { Config } from '../../constants/config'
import { Video } from '../../components/Video'

interface IPostUrl extends ParsedUrlQuery {
  slug: string
}
interface PostPageProps {
  post: {
    slug: string
    title: string
    subtitle: string
    createdAt: string
    timeToRead: number
    image: string
    video?: string
    content: string
  }
}

const PostPage: NextPage<PostPageProps> = (props: PostPageProps) => {
  const router = useRouter()
  if (!router.isFallback && !props.post?.slug) {
    return <Loading />
  }
  if (router.isFallback) {
    return <Loading />
  }
  const createdAt_formatted = formatRelative(new Date(props.post.createdAt), new Date(), {
    locale: ptBR
  })
  const meta: metaProps = {
    title: props.post.title,
    description: props.post.subtitle,
    url: `${Config.url}/blog/${props.post.slug}`,
    post: {
      date: props.post.createdAt,
      image: `${Config.url}${props.post.image}`,
      modified_date: props.post.createdAt
    }
  }
  return (
    <Main meta={meta}>
      <article className={styles.postContainer}>
        <Image src={props.post.image} alt={props.post.title} width="1200px" height="630px" layout="intrinsic" />
        <h1>{props.post.title}</h1>
        <div className={styles.infoContainer}>
          <div>
            <FaPlusCircle size={14} />
            <span>{createdAt_formatted}</span>
          </div>
          <div>
            <FaBookReader size={14} />
            <span>{props.post.timeToRead} min de leitura</span>
          </div>
        </div>
        <Share title={props.post.title} subtitle={props.post.subtitle} url={`${Config.url}/blog/${props.post.slug}/`} />
        <span className={styles.subtitle}>{props.post.subtitle}</span>
        {props.post.video && <Video title={props.post.title} video={props.post.video} />}
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.post.content }} />
        <Share title={props.post.title} subtitle={props.post.subtitle} url={`${Config.url}/blog/${props.post.slug}/`} />
      </article>
      <h2>Comentários</h2>
      <Comments />
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }))
  return {
    paths,
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
  const content = await markdownToHtml(post.content || '')
  const timeToRead = Math.ceil(post.content.split(' ').length / 200)

  return {
    props: {
      post: {
        slug,
        timeToRead,
        ...post,
        content
      }
    },
    revalidate: 60 * 5 // 5 minutos
  }
}

export default PostPage
