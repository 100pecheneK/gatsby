import { motion } from 'framer-motion'
import { Link, graphql } from 'gatsby'
import React from 'react'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Seo from '../components/Seo'
import { usePizza } from '../context/PizzaContext'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}
export default function Home({ data }) {
  const { clearPizza } = usePizza()
  const imagePath = getSrc(data.file)
  return (
    <>
      <Seo title='Home' imageSrc={[imagePath]} />

      <motion.div
        className='home container'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h2>Welcome to Pizza Joint</h2>
        <Link to='/base'>
          <Button onClick={clearPizza}>Create Your Pizza</Button>
        </Link>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        <Loader />
      </motion.div>
    </>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "wall.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`
