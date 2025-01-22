import CartItem from './CartItem'

const reducer = (state, action) => {
  // the state is the current state before the update
  // the action is what we trying to do
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    const carts = state.cart
    const newCarts = carts.filter((item) => item.id !== action.payload)
    return { ...state, cart: newCarts }
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((item) => item.amount > 0)
    return { ...state, cart: tempCart }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...item, amount: item.amount + 1 }
          }

          if (action.payload.type === 'desc') {
            return { ...item, amount: item.amount - 1 }
          }
        }
        return item
      })
      .filter((item) => item.amount > 0)
    return { ...state, cart: tempCart }
  }

  throw new Error('no matching action type')
}

export default reducer
