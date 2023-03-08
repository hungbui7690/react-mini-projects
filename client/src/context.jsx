const url = 'https://course-api.com/react-useReducer-cart-project'

import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()

// (1a) go to reducer and setup
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  // (2) convert from useState to useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  // (2) don't use state.cart (error) > spread state out > go to Navbar.jsx
  return (
    <AppContext.Provider
      value={{
        ...state,
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
