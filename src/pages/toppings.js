import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { usePizza } from '../context/PizzaContext'
import Seo from '../components/Seo'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      repeat: Infinity,
    },
  },
}

const Toppings = () => {
  const { addTopping, pizza } = usePizza()
  const data = useStaticQuery(graphql`
    query Toppings {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Toppings" } } }
        limit: 1
      ) {
        nodes {
          excerpt(format: MARKDOWN)
        }
      }
    }
  `)

  const toppings = (data?.allMarkdownRemark?.nodes[0].excerpt || '')
    .replaceAll('\n', '')
    .split('-   ')
    .slice(1)

  return (
    <>
      <Seo title='Toppings' />
      <motion.div
        className='toppings container'
        variants={containerVariants}
        initial='hidden'
        exit='exit'
        animate='visible'
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
            return (
              <motion.li
                key={topping}
                onClick={() => addTopping(topping)}
                whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            )
          })}
        </ul>

        <Link to='/order'>
          <motion.button variants={buttonVariants} whileHover='hover'>
            Order
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}

export default Toppings
