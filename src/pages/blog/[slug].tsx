import React from 'react'

import Link from 'next/link'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type IPostUrl = {
  slug: string
}
type PostPageProps = {
  slug: string
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Carregando</h1>
  }
  return (
    <>
      <Link href="/">
        <a>Volta</a>
      </Link>
      <h1>{props.slug}</h1>
    </>
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
