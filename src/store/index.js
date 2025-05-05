
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
          try {
            // Send POST request to add the product
            const { data } = await axios.post('https://nodejseomp-9bv2.onrender.com/products/add', product);
            console.log(data);
        
            // Show SweetAlert success message
            Swal.fire({
              title: 'Added!',
              text: 'Product has been added successfully.',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
              background: '#1c1c1c',
              color: '#fff'
            }).then(() => {
              location.reload();
            });
          } catch (error) {
            console.error('Error adding product:', error);
            Swal.fire({
              title: 'Error!',
              text: 'There was a problem adding the product.',
              icon: 'error',
              background: '#1c1c1c',
              color: '#fff'
            });
          }
        },
        
        async updateProduct({ commit }, product) {
          const { data } = await axios.patch(`https://nodejseomp-9bv2.onrender.com/products/${product.prodID}`, product)
          commit('updateProduct', product)
          location.reload();
        },
        async deleteProduct({ commit, state }, id) {
          try {
            // Make the API call to delete the product
            await axios.delete(`https://nodejseomp-9bv2.onrender.com/products/${id}`);
        
            // Show SweetAlert success message
            Swal.fire({
              title: 'Deleted!',
              text: 'Product has been deleted.',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
              background: '#1c1c1c',
              color: '#fff'
            }).then(() => {
              location.reload();
            });
          } catch (error) {
            console.error('Error deleting product:', error);
            Swal.fire({
              title: 'Error!',
              text: 'There was a problem deleting the product.',
              icon: 'error',
              background: '#1c1c1c',
              color: '#fff'
            });
          }
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
        updateUser(state, user) {
          const index = state.users.findIndex((u) => u.userID === user.UserID)
          if (index !== -1) {
            state.users.splice(index, 1, user)
          }
        }
      },
      actions: {
        async fetchUsers({ commit }) {
          const {results} = (await axios.get('https://nodejseomp-9bv2.onrender.com/users')).data
          commit('setUsers', results)
        },
        async fetchUser({ commit }, id) {
          const response = await axios.get(`https://nodejseomp-9bv2.onrender.com/users/${id}`)
          commit('setUser', response.data)
          location.reload();
        },
        async registerUser({ commit, state }, data) {
          const response = await axios.post('https://nodejseomp-9bv2.onrender.com/users/register', data)
          location.reload();
        },
        async updateUser({ commit }, user) {
          const {data} = await axios.patch(`https://nodejseomp-9bv2.onrender.com/users/${user.userID}`, user)
          console.log(data);
          commit('updateUser', user)
          location.reload();
        },
        async deleteUser({ commit, state }, id) {
          await axios.delete(`https://nodejseomp-9bv2.onrender.com/users/${id}`);
          commit('setUsers', state.users.filter(user => user.userID !== id));
        },
        async login({ commit }, data) {
          const response = await axios.post('https://nodejseomp-9bv2.onrender.com/users', data)
          commit('setToken', response.data.token)
          commit('setUser', response.data.user)
          location.reload();
        }
      }
    }
  }
})
