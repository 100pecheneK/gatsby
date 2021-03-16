import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Seo({ title, imageSrc }) {
  const { site } = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const meta = [
    {
      name: 'description',
      content: site.siteMetadata.description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: site.siteMetadata.description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: 'Pizza Joint',
    },
  ]

  const defaultTitle = site.siteMetadata?.title || ''

  if (imageSrc) {
    meta.concat(
      imageSrc.map(image => ({
        property: 'og:image',
        content: image,
      }))
    )
  }
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={meta}
    />
  )
}
