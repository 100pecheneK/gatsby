import React from 'react'
import Layout from './src/components/Layout'
import { ProvideModal } from './src/context/ModalContext'
import { ProvidePizza } from './src/context/PizzaContext'

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => {
  return (
    <ProvideModal>
      <ProvidePizza>{element}</ProvidePizza>
    </ProvideModal>
  )
}
