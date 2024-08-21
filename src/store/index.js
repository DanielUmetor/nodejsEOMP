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
    },
    async addProduct({ commit, state }, info) {
      const { data } = await axios.post('https://nodejseomp-9bv2.onrender.com/products/addProduct', info)
      commit('setProducts', [...state.products, data.result])
    },
    async updateProduct({ commit }, product) {
      const { data } = await axios.put(`https://nodejseomp-9bv2.onrender.com/products/${product._id}`, product)
      commit('setProduct', data.result)
    },
    async deleteProduct({ commit }, id) {
      await axios.delete(`https://nodejseomp-9bv2.onrender.com/products/${id}`)
      commit('setProducts', this.state.products.filter(product => product._id !== id))
    }
  },
  modules: {
  }
})
