import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

export default function Pizza({ data }) {
  const pizzas = data.allMarkdownRemark.nodes

  return (
    <div>
      <ol style={{ display: 'flex', flexDirection: 'column' }}>
        {pizzas.map(pizza => (
          <Link
            to={pizza.frontmatter.slug}
            style={{
              marginBottom: '1em',
              display: 'inline-block',
              width: '50%',
            }}
          >
            <motion.li
              whileHover={{
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={pizza.id}
            >
              {pizza.frontmatter.name}
              <GatsbyImage
                style={{
                  borderRadius: '5px',
                  maxWidth: '360px',
                  height: '100%',
                }}
                alt={pizza.frontmatter.name}
                image={pizza.frontmatter.thumb.childImageSharp.gatsbyImageData}
              />
            </motion.li>
          </Link>
        ))}
      </ol>
    </div>
  )
}

export const query = graphql`
  query Pizzas {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "pizzas" } } }) {
      nodes {
        frontmatter {
          name
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
