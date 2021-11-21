import React from 'react'

import Link from 'next/link'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Main } from '../../components/Main'
import { Loading } from '../../components/Loading'

type IPostUrl = {
  slug: string
}
type PostPageProps = {
  slug: string
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  return (
    <Main>
      <h1>{props.slug}</h1>
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [1, 2, 3, 4, 5].map(post => ({
      params: {
        slug: 'teste' + post
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, IPostUrl> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      slug: params.slug
    }
  }
}

export default PostPage
