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
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />

      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

      <link rel="icon" href="/favicon/favicon.ico" key="favicon" />
      <link rel="manifest" href="/favicon/manifest.json" />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#fd7014" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-TileColor" content="#fd7014" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"></meta>
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
          <meta property="article:published_time" content={props.post.date} key="article:published_time" />
          <meta property="article:modified_time" content={props.post.modified_date} key="article:modified_time" />
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
            "datePublished": "${props.post.date}",
            "dateModified": "${props.post.modified_date}",
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
