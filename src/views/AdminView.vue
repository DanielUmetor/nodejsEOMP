<template>
    <div>
      <h1>Admin View</h1>
      <h2>Products</h2>
      <ul>
        <li v-for="product in products" :key="product._id">
          {{ product.name }} ({{ product.price }})
          <button @click="editProduct(product)">Edit</button>
          <button @click="deleteProduct(product._id)">Delete</button>
        </li>
      </ul>
      <h2>Add New Product</h2>
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newProduct.name" />
        <br />
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="newProduct.price" />
        <br />
        <button type="submit">Add Product</button>
      </form>
      <h2>Edit Product</h2>
      <form @submit.prevent="updateProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedProduct.name" />
        <br />
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="editedProduct.price" />
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          price: 0
        },
        editedProduct: {
          name: '',
          price: 0
        }
      }
    },
    computed: {
      products() {
        return this.$store.state.products
      }
    },
    methods: {
      async addProduct() {
        await this.$store.dispatch('addProduct', this.newProduct)
        this.newProduct = {
          name: '',
          price: 0
        }
      },
      async editProduct(product) {
        this.editedProduct = { ...product }
      },
      async updateProduct() {
        await this.$store.dispatch('updateProduct', this.editedProduct)
        this.editedProduct = {
          name: '',
          price: 0
        }
      },
      async deleteProduct(id) {
        await this.$store.dispatch('deleteProduct', id)
      }
    }
  }
  </script>