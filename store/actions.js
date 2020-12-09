import {
  addProduct,
  deleteProduct,
  getProducts,
  editProduct,
  getProduct,
} from '@/core/CRUD/crud.services'
import { productsModeling } from '@/core/CRUD/crud.models'
import { logout } from '@/core/Auth/auth.services'

export default {
  ADD_PRODUCT: async (_, product) => {
    try {
      await addProduct(product)
    } catch (err) {
      throw new Error({ message: 'Could not add your product! ' })
    }
  },
  DELETE_PRODUCT: async ({ commit }, productID) => {
    try {
      await deleteProduct(productID)
      commit('UPDATE_PRODUCTS', productID)
    } catch (err) {
      throw new Error({ message: 'Could not remove this product!' })
    }
  },
  GET_PRODUCTS: async ({ commit }) => {
    try {
      const products = await getProducts()
      commit('SET_PRODUCTS', productsModeling(products))
    } catch (err) {
      throw new Error({ message: 'Could not get your products!' })
    }
  },
  EDIT_PRODUCT: async ({ state }, payload) => {
    const productIndex = state.products.findIndex(({ id }) => id === payload.id)
    const product = {
      ...state.products[productIndex],
      ...payload.product,
    }
    try {
      await editProduct(payload.id, product)
    } catch (err) {
      throw new Error({ message: 'Could not edit your product!' })
    }
  },
  GET_PRODUCT: async (_, id) => {
    try {
      return await getProduct(id)
    } catch (err) {
      throw new Error({ message: 'Could not fetch your product!' })
    }
  },
  LOGOUT: ({ commit }) => {
    logout()
    commit('LOGOUT_USER')
  },
}
