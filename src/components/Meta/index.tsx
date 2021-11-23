import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Config } from '../../constants/config'
import { metaProps } from '../../utils/types'

const Meta = (props: metaProps) => {
  const router = useRouter()

  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" key="apple" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" key="icon16" />
      <link rel="icon" href="/favicon/favicon.ico" key="favicon" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#220054" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-TileColor" content="#220054" />
      <meta name="google" content="notranslate" />
      <title>{`${props.title} | ${Config.site_name}`}</title>
      <meta name="description" content={props.description ?? Config.description} key="description" />
      <meta name="author" content={Config.author} key="author" />
      {props.canonical && (
        <link
          rel="canonical"
          href={props.canonical}
          data-baseprotocol={props.canonical.split('//')[0]}
          data-basehost={props.canonical.split('//')[1]}
          key="canonical"
        />
      )}
      <meta property="og:title" content={`${props.title} | ${Config.site_name}`} key="og:title" />
      <meta property="og:description" content={props.description ?? Config.description} key="og:description" />
      <meta property="og:locale" content={Config.locale} key="og:locale" />
      <meta property="og:site_name" content={Config.site_name} key="og:site_name" />
      <meta property="og:url" content={props.url ?? Config.url} />
      {props.post && (
        <>
          <meta property="og:type" content="article" key="og:type" />
          <meta name="image" content={props.post.image ?? Config.image} />
          <meta property="og:image" content={props.post.image} key="og:image" />
          <meta property="og:image:secure_url" content={props.post.image} />
          <meta property="og:image:alt" content={props.description ?? Config.description} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
          <meta name="twitter:title" content={`${props.title} | ${Config.site_name}`} />
          <meta name="twitter:site" content={Config.twitter_profile} />
          <meta name="twitter:creator" content={Config.twitter_profile} />
          <meta name="twitter:image" content={props.post.image} />
          <meta name="twitter:image:src" content={props.post.image} />
          <meta name="twitter:image:alt" content={props.description ?? Config.description} />
          <meta name="twitter:image:width" content="800" />
          <meta name="twitter:image:height" content="630" />
          <meta
            property="article:published_time"
            content={new Date(props.post.date).toISOString()}
            key="article:published_time"
          />
          <meta
            property="article:modified_time"
            content={new Date(props.post.modified_date).toISOString()}
            key="article:modified_time"
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
          {
            "description": "${props.description ? props.description : Config.description}",
            "author": {
              "@type": "Person",
              "name": "${Config.author}"
            },
            "@type": "BlogPosting",
            "url": "${Config.url}${router.asPath}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "/favicon/images/logo.png"
              },
              "name": "${Config.author}"
            },
            "headline": "${props.title} | ${Config.site_name}",
            "image": ["${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${Config.url}${router.asPath}"
            },
            "@context": "http://schema.org"
          }`
            }}
            key="ldjson"
          />
        </>
      )}
    </Head>
  )
}

export { Meta }
