export default {
  SET_PRODUCTS: (state, products) => {
    state.products = [...products]
  },
  UPDATE_PRODUCTS: (state, productID) => {
    state.products = [...state.products].filter(({ id }) => id !== productID)
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  LOGOUT_USER: (state) => {
    state.user = null
    state.products = []
  },
}
