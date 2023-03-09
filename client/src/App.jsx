/*
  Get Totals P2
  - total = {total, amount} > contains 2 items 
    > we need the amount as well


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
