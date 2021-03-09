import React, { createContext, useContext, useState } from 'react'

const pizzaContext = createContext()

export function ProvidePizza({ children }) {
  const pizza = useProvidePizza()
  return <pizzaContext.Provider value={pizza}>{children}</pizzaContext.Provider>
}
export function usePizza() {
  return useContext(pizzaContext)
}
function useProvidePizza() {
  const initialPizzaState = { base: '', toppings: [] }
  const [pizza, setPizza] = useState(initialPizzaState)

  const clearPizza = () => {
    setPizza(initialPizzaState)
  }

  const addBase = base => {
    setPizza({ ...pizza, base })
  }

  const addTopping = topping => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }
  return {
    clearPizza,
    pizza,
    addBase,
    addTopping,
  }
}
