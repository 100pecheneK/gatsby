import React from 'react'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

export default function Button({ children, ...rest }) {
  return (
    <motion.button variants={buttonVariants} whileHover='hover' {...rest}>
      {children}
    </motion.button>
  )
}
