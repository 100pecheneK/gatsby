import React, { createContext, useContext, useState } from 'react'

const modalContext = createContext()

export function ProvideModal({ children }) {
  const modal = useProvideModal()
  return <modalContext.Provider value={modal}>{children}</modalContext.Provider>
}
export function useModal() {
  return useContext(modalContext)
}
function useProvideModal() {
  const [showModal, setShowModal] = useState(false)
  return {
    showModal,
    setShowModal,
  }
}
