/*
  Get Totals
  - total = {total, amount} > contains 2 items 
  - to get the totals, we need to loop through all cart items, and multiple price with amount for each item 
    > then add them up

  - we need to think how to get the totals with reducer > since we don't have button to click to trigger reducer
    > useEffect() and update every time cart changes



  (1) context.jsx

  (***) later, we will combine decrease & increase into one function
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
