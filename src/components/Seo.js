import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Seo({ title }) {
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

  const defaultTitle = site.siteMetadata?.title || ''

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
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
      ]}
    />
  )
}
