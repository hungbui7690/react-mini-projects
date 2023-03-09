const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    )
    return { ...state, cart: newCart }
  }

  // (3)
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 } // (***) MUST COPY before modify > important
      }

      return cartItem
    })

    return { ...state, cart: tempCart }
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.amount === 0 ? 0 : cartItem.amount - 1,
        } // (***) if amount === 0, then don't decrease
      }

      return cartItem
    })

    return { ...state, cart: tempCart }
  }

  throw new Error(`No matching ${action.type} action type`)
}

export default reducer
