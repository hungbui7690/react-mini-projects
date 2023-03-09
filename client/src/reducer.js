const reducer = (state, action) => {
  // (3) check RDT
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  throw new Error(`No matching ${action.type} action type`)
}

export default reducer
