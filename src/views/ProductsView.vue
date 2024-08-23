<template>
  <div class="products">
    <div class="row">
      <div class="col-md-12">
        <div class="input-group mb-3">
          <input id="search" type="text" class="form-control search-input" v-model="searchQuery" placeholder="Search products...">
          <div class="input-group-append">
            <button class="btn btn-primary" @click="searchProducts">Search</button>
          </div>
        </div>
        <div class="form-group">
          <label for="sort">Sort by:</label>
          <select id="sort" v-model="sortOption" @change="sortProducts">
            <option value="prodName">Product Name</option>
            <option value="prodID">Product ID</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
            <option value="Category">Category</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div v-if="sortedProducts.length === 0" class="col-md-12 text-center">
          <h4>No results found</h4>
        </div>
        <div v-else class="col-md-4" v-for="product in sortedProducts" :key="product.prodID">
          <div class="card mb-4">
            <img :src="product.prodURL" width="200" height="200" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">Price: {{ product.amount }}</p>
              <!-- <table>
                <tr>
                  <td>Product ID:</td>
                  <td>{{ product.prodID }}</td>
                </tr>
                <tr>
                  <td>Quantity:</td>
                  <td>{{ product.quantity }}</td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>{{ product.Category }}</td>
                </tr>
              </table> -->
              <router-link :to="{ name: 'singleProduct', params: { id: product.prodID } }" class="btn3 ">View Details</router-link>
              <!-- <button class="btn4 ">Add to Cart</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      searchQuery: '',
      sortOption: 'prodName',
      sortOrder: 1
    }
  },
  computed: {
    products() {
    return this.$store.state.products.products;
  },
    filteredProducts() {
      if (!this.products) return []
      return this.products.filter(product => {
        return (
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.prodID.toString().includes(this.searchQuery) ||
          product.quantity.toString().includes(this.searchQuery) ||
          product.amount.toString().includes(this.searchQuery) ||
          product.Category.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    },
    sortedProducts() {
      return [...this.filteredProducts].sort((a, b) => {
        let aValue = a[this.sortOption]
        let bValue = b[this.sortOption]

        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase()
          bValue = bValue.toLowerCase()
        }

        if (this.sortOption === 'prodID') {
          return aValue - bValue
        } else {
          if (aValue < bValue) return -this.sortOrder
          if (aValue > bValue) return this.sortOrder
          return 0
        }
      })
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchProducts')
  },
  methods: {
    searchProducts() {
    
    },
    sortProducts() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1
    }
  }
}
</script>
<style>
.products{
  background-color: white;
}
  .input-group {
    width: 20%;
    position: relative;
    left: 1200px;
    top: 50px;
  }
  .input-group-append {
    margin-left: 0;
  }

  .card {
  border: none;
  border-radius: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  margin: 110px 20px; 
  width: 380px;  
  background: transparent !important;
}
.card-img-top {
  width: 100%; 
  height: 300px; 
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
  .card-body {
    padding: 20px;
  }
  .card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .card-text {
    font-size: 16px;
    color: #666;
  }
  .btn {
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
  }
  .btn3 {
    background-color: rgb(129, 92, 47);
    border-color: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
  }
  .btn4 {
    background-color: rgb(129, 92, 47);
    border-color: none;
    color: white;
    padding: 6px;
    border-radius: 5px;
    text-decoration: none;
  }
  .modal-content {
    border-radius: 10px;
  }
  .modal-header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  .modal-title {
    font-size: 18px;
    font-weight: bold;
  }
  .modal-body {
    padding: 20px;
  }
  .modal-footer {
    padding: 20px;
    border-top: 1px solid #ddd;
  }
  .col-md-4 {
    margin-left: 220px; 
  padding: 20px; 
  float: right; 
}
</style>


