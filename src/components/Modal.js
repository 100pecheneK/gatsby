import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { useModal } from '../context/ModalContext'

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

const modalVairants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

export default function Modal() {
  const {showModal, setShowModal} = useModal()
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariants}
          animate='visible'
          initial='hidden'
          exit='hidden'
          onClick={() => setShowModal(false)}
        >
          <motion.div
            onClick={e => e.stopPropagation()}
            className='modal'
            variants={modalVairants}
          >
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
