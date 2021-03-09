import React from 'react'
import { motion, useCycle } from 'framer-motion'
import Button from './Button'

const lodaerVairants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
}

export default function Loader() {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')

  return (
    <>
      <motion.div
        className='loader'
        variants={lodaerVairants}
        animate={animation}
      />
      <Button onClick={() => cycleAnimation()}>Cycle Loader</Button>
    </>
  )
}
