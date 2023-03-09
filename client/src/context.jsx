const url = 'https://course-api.com/react-useReducer-cart-project'

import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // (1a)
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // (1b) pass > go to CartContainer
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
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
