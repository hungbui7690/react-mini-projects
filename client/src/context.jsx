const url = 'https://course-api.com/react-useReducer-cart-project'

import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0, // total amount > single item amount is stored in each cart item (check data.js)
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  // (1a)
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  // (1b) pass > go to CartItem
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
