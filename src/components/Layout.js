import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useModal } from '../context/ModalContext'
import '../styles/global.css'
import Header from './Header'
import Modal from './Modal'

export default function Layout({ children }) {
  const { setShowModal } = useModal()

  return (
    <>
      <Header />
      <Modal />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        {children}
      </AnimatePresence>
    </>
  )
}
