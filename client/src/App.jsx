/*
  Decrease Amount
  - last lecture, if amount === 0, then we don't want to decrease 
  - this lecture, if amount === 0, we want to remove that item

  (1) reducer.jsx
*/

import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
