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
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }

      return cartItem
    })

    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount === 0 ? 0 : cartItem.amount - 1,
          }
        }

        return cartItem
      })
      .filter((item) => item.amount > 0)

    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTALS') {
    const { total, amount } = state.cart.reduce(
      (acc, cur) => {
        acc.total += cur.price * cur.amount
        acc.amount += cur.amount

        return acc
      },
      { total: 0, amount: 0 }
    )

    return {
      ...state,
      total: Number.parseFloat(total).toFixed(2),
      amount: amount,
    }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  // (3)
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          // (a)
          if (action.payload.type === 'dec')
            return {
              ...cartItem,
              amount: cartItem.amount === 0 ? 0 : cartItem.amount - 1,
            }

          // (b)
          if (action.payload.type === 'inc')
            return {
              ...cartItem,
              amount: cartItem.amount + 1,
            }
        }

        return cartItem
      })
      .filter((item) => item.amount > 0)

    return { ...state, cart: tempCart }
  }

  throw new Error(`No matching ${action.type} action type`)
}

export default reducer
