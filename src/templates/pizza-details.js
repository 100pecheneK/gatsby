import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/Pizza-details.module.css'

export default function PizzaDetails({ data }) {
  console.log(data)
  const { html: __html } = data.markdownRemark
  const { title, name, featuredImg } = data.markdownRemark.frontmatter

  return (
    <div className={styles.details}>
      <Link to='/pizzas'>{'< '}Back</Link>
      <h2>{title}</h2>
      <div className={styles.featured}>
        <GatsbyImage
          image={featuredImg.childImageSharp.gatsbyImageData}
          alt={name}
        />
      </div>
      <div className={styles.html} dangerouslySetInnerHTML={{ __html }} />
    </div>
  )
}

export const query = graphql`
  query Pizza($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        name
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
      html
    }
  }
`
