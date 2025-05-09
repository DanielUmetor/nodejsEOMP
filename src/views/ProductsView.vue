<template>
  <div class="products">
    <SpinnerComponent v-if="loading" />
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <input id="search" type="text" class="form-control search-input" v-model="searchQuery" placeholder="Search products..." />
            <div class="input-group-append">
              <button class="btn5" @click="searchProducts">Search</button>
            </div>
          </div>
          <div class="form-group">
            <label for="sort">Sort by: </label> 
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
              <img :src="product.prodURL" class="card-img-top" alt="Product Image" />
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">Price: {{ product.amount }}</p>
                <router-link :to="{ name: 'singleProduct', params: { id: product.prodID } }" class="btn3">View Details</router-link>
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
      return this.$store.state.products.products
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

        if (this.sortOption === 'price' || this.sortOption === 'prodID' || this.sortOption === 'quantity') {
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
    searchProducts() {},
    sortProducts() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1
    }
  }
}
</script>

<style scoped>
.products {
  background: #000;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
  color: #ad8330;
  font-family: "Cinzel", serif;
}

.input-group {
  width: 400px; 
  max-width: 90%; 
  /* width: 30%; */
  margin: 0 auto 30px auto;
}

.search-input {
  background: #000;
  border: 2px solid #ad8330;
  color: #ad8330;
}

.search-input::placeholder {
  color: #ad8330aa;
}

.btn5 {
  background-color: #ad8330 !important;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
  right: 5px;
  transition: background 0.3s ease;
}

.btn5:hover {
  background-color: #fff !important;
  color: #ad8330;
}

select#sort {
  background: #000;
  color: #ad8330;
  border: 2px solid #ad8330;
  padding: 6px 10px;
  margin-bottom: 20px;
}

.card {
  background: #111;
  border: 1px solid #ad8330;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 40px auto;
  width: 340px;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 25px #ad833066;
}

.card-img-top {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 2px solid #ad8330;
}

.card-body {
  text-align: center;
  padding: 15px;
}

.card-title {
  color: #ad8330;
  font-size: 1.4rem;
}

.card-text {
  color: #ccc;
}

.btn3 {
  background-color: #ad8330;
  color: #000;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn3:hover {
  background-color: #fff;
  color: #ad8330;
}

h4 {
  color: #ad8330;
  margin-top: 30px;
}

@media only screen and (max-width: 768px) {
  .products{
    position: relative;
    top: 50px;
    margin-bottom: 45px;
  }
  .input-group {
    width: 90%;
  }

  .card {
    width: 90%;
  }
}


</style>
