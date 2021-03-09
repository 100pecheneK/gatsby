import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Seo from '../components/Seo'
import { usePizza } from '../context/PizzaContext'

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
export default function Home() {
  const { clearPizza } = usePizza()

  return (
    <>
      <Seo title='Home' />
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
        <Loader />
      </motion.div>
    </>
  )
}
