import React from 'react'

import Image from 'next/image'
import { FaPlusCircle, FaBookReader } from 'react-icons/fa'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Main } from '../../components/Main'
import { Loading } from '../../components/Loading'
import { Share } from '../../components/Share'

import styles from './post.module.scss'

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
      <article className={styles.postContainer}>
        <img alt="Internet" src="/posts/000/helloworld.jpg" />
        <h1>Internet</h1>
        <div className={styles.infoContainer}>
          <div>
            <FaPlusCircle size={14} />
            <span>12 de outubro de 2029</span>
          </div>
          <div>
            <FaBookReader size={14} />
            <span>8 min de leitura</span>
          </div>
        </div>
        <Share />
        <span className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
          praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
          aliquam eum aliquid. Debitis, soluta.
        </span>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            libero ipsa, cupiditate facilis aliquid molestias dignissimos earum beatae ab itaque, accusamus eaque
            possimus distinctio architecto, nostrum dolores aspernatur molestiae non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            libero ipsa, cupiditate facilis aliquid molestias dignissimos earum beatae ab itaque, accusamus eaque
            possimus distinctio architecto, nostrum dolores aspernatur molestiae non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            libero ipsa, cupiditate facilis aliquid molestias dignissimos earum beatae ab itaque, accusamus eaque
            possimus distinctio architecto, nostrum dolores aspernatur molestiae non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            libero ipsa, cupiditate facilis aliquid molestias dignissimos earum beatae ab itaque, accusamus eaque
            possimus distinctio architecto, nostrum dolores aspernatur molestiae non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quo delectus corporis
            praesentium magni expedita voluptatibus, impedit, repellendus ducimus dolorem laudantium eos eveniet vero
            aliquam eum aliquid. Debitis, soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            libero ipsa, cupiditate facilis aliquid molestias dignissimos earum beatae ab itaque, accusamus eaque
            possimus distinctio architecto, nostrum dolores aspernatur molestiae non.
          </p>
        </div>
        <Share />
      </article>
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
