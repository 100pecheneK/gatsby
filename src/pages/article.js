import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Article() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        limit: 1
        filter: { frontmatter: { title: { eq: "Article" } } }
      ) {
        nodes {
          html
        }
      }
    }
  `)

  return (
    <div
      style={{ padding: '1em 3em',overflowY: 'scroll', overflowX: 'hidden', height: '80vh' }}
      dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }}
    />
  )
}
