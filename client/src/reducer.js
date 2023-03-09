const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  // (3)
  if (action.type === 'REMOVE') {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    )
    return { ...state, cart: newCart }
  }

  throw new Error(`No matching ${action.type} action type`)
}

export default reducer
