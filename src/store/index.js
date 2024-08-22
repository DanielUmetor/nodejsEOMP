
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: null
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: {
      namespaced: true,
      state: {
        products: [],
        product: null
      },
      mutations: {
        setProducts(state, products) {
          state.products = products
        },
        setProduct(state, product) {
          state.product = product
        },
        updateProduct(state, product) {
          const index = state.products.findIndex((p) => p.prodID === product.prodID)
          if (index !== -1) {
            state.products.splice(index, 1, product)
          }
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
        async addProduct({ commit, state }, product) {
          console.log(product);

          const { data } = await axios.post('https://nodejseomp-9bv2.onrender.com/products/add', product)
          console.log(data);
          // commit('setProducts', [...state.products, data.result])
        },
        async updateProduct({ commit }, product) {
          const { data } = await axios.patch(`https://nodejseomp-9bv2.onrender.com/products/${product.prodID}`, product)
          commit('updateProduct', product)
        },
        async deleteProduct({ commit, state }, id) {
          await axios.delete(`https://nodejseomp-9bv2.onrender.com/products/${id}`)
          commit('setProducts', state.products.filter(product => product._id !== id))
        }
      }
    },
    users: {
      namespaced: true,
      state: {
        users: [],
        user: null,
        token: null
      },
      mutations: {
        setUsers(state, users) {
          state.users = users
        },
        setUser(state, user) {
          state.user = user
        },
        registerUser(state, newUser) {
          state.users.push(newUser);
        },
        deleteUser(state, id) {
          state.users = state.users.filter(user => user.userID !== id);
        },
        setToken(state, token) {
          state.token = token
        },
      },
      actions: {
        async fetchUsers({ commit }) {
          const {results} = (await axios.get('https://nodejseomp-9bv2.onrender.com/users')).data
          commit('setUsers', results)
        },
        async fetchUser({ commit }, id) {
          const response = await axios.get(`https://nodejseomp-9bv2.onrender.com/users/${id}`)
          commit('setUser', response.data)
        },
        async registerUser({ commit, state }, data) {
          const response = await axios.post('https://nodejseomp-9bv2.onrender.com/users/register', data)
          // commit('setToken', response.data.token)
          // commit('setUser', response.data.user)
          // if (Array.isArray(state.users)) {
          //   commit('setUsers', [...state.users, response.data.user])
          // } else {
          //   commit('setUsers', [response.data.user])
          // }
        },
        async updateUser({ commit }, data) {
          const response = await axios.put(`https://nodejseomp-9bv2.onrender.com/users/${data.userID}`, data)
          commit('setUser', response.data)
        },
          async deleteUser({ commit, state }, id) {
            console.log(id);
            // await axios.delete(`https://nodejseomp-9bv2.onrender.com/users/${id}`);
            // commit('setUsers', state.users.filter(user => user.userID !== id));
          },
        async login({ commit }, data) {
          const response = await axios.post('https://nodejseomp-9bv2.onrender.com/users', data)
          commit('setToken', response.data.token)
          commit('setUser', response.data.user)
        }
      }
    }
  }
})
