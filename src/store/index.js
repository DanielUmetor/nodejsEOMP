import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: null,
    products: [],
    product: null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload
      },
    setProduct(state, product) {
        state.product = product
      }
  },
  actions: {
    async fetchProducts({ commit }) {
      const { data } = await axios.get('https://nodejseomp-9bv2.onrender.com/products')
      commit('setProducts', data.results)
    },
    async fetchProduct({ commit }, id) {
      const { data } = await axios.get(`https://nodejseomp-9bv2.onrender.com/products/${id}`)
      commit('setProduct', data.result)
    }
  },
  modules: {
  }
})
