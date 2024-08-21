<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2 v-if="product">{{ product.prodName }}</h2>
        <p v-if="product">Product ID: {{ product.prodID }}</p>
        <img v-if="product" :src="product.prodURL" class="img-fluid" alt="Product Image">
        <p v-if="product">Price: {{ product.amount }}</p>
        <table v-if="product">
          <tr>
            <td>Quantity:</td>
            <td>{{ product.quantity }}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{{ product.Category }}</td>
          </tr>
        </table>
        <button class="btn btn-primary" @click="$router.push({ name: 'products' })">Back to Products</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params.id).then(() => {
      console.log('Product fetched')
    })
  }
}
</script>

<style>
/* .single-product {
  padding: 20px;
} */
</style>




<!-- <template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ product.prodName }}</h1>
          <img :src="product.prodURL" class="img-fluid" alt="Product Image">
          <p>Price: {{ product.amount }}</p>
          <p>Quantity: {{ product.quantity }}</p>
          <p>Category: {{ product.Category }}</p>
          <button class="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      product() {
        return this.$store.state.products.find(product => product.prodID === this.id)
      }
    }
  }
  </script>
  
  <style>
    .img-fluid {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  </style> -->


<!-- mounted() {
    this.$store.dispatch('fetchProduct', this.id);
}
} -->