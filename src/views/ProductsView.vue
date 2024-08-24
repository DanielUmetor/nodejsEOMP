<template>
  <div class="products">
    <SpinnerComponent v-if="loading" />
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <input id="search" type="text" class="form-control search-input" v-model="searchQuery" placeholder="Search products...">
            <div class="input-group-append">
              <button class="btn5" @click="searchProducts">Search</button>
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
                <router-link :to="{ name: 'singleProduct', params: { id: product.prodID } }" class="btn3 ">View Details</router-link>
    <!-- <button @click="searchProducts" class="btn5">View More</button> -->
    <SpinnerComponent v-if="loadingMore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SpinnerComponent from '../components/SpinnerComponent.vue'


export default {
  components: { SpinnerComponent },
  data() {
    return {
      searchQuery: '',
      sortOption: 'prodName',
      sortOrder: 1,
      loading: false
     
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

        if (typeof aValue === 'string' && this.sortOption !== 'Category') {
          aValue = aValue.toLowerCase()
          bValue = bValue.toLowerCase()
        }

        if (this.sortOption === 'price') {

          return aValue - bValue
        } else if (this.sortOption === 'prodID' || this.sortOption === 'quantity') {
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
  this.loading = true
  this.$store.dispatch('products/fetchProduct')
    .then(() => {
      this.loading = false
    })
    .catch(error => {
      console.error(error)
      this.loading = false
    })

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
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  height: 350vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; 
}
  .input-group {
    width: 20%;
    /* position: relative;
    left: 1200px; */
    top: 50px;
  }
  .input-group-append {
    margin-left: 0;
  }

  .card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    margin-left: 190px; 
  padding: 20px; 
  /* float: right;  */
}
.btn5{
  border-radius: 5px;
  background-color: rgb(129, 92, 47) !important;
  color: white;
  padding: 10px;
}
.img-hover-zoom {
    transition: transform .5s ease;
  }

  .img-hover-zoom:hover {
    transform: scale(1.1);
    animation: zoom 0.5s forwards;
  }
  

@media only screen and (max-width: 300px) {
  .products {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: auto;
  }
  .card {
    width: 100%;
    margin: 20px;
  }
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  .card-body {
    padding: 10px;
  }
  .card-title {
    font-size: 16px;
  }
  .card-text {
    font-size: 14px;
  }
  .btn3 {
    padding: 6px;
    font-size: 12px;
  }
  .col-md-4 {
    margin-left: 0;
    padding: 10px;
  }
  .input-group {
    width: 100%;
    top: 0;
    margin-top: 70px;
  }
  .input-group-append {
    margin-left: 0;
  }
  .sort{
    background-color:rgb(129, 92, 47) ;
  }
}
 </style>

