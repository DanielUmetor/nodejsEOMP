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
      return this.$store.state.products.product
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchProduct', this.$route.params.id)
  }
}
</script>

<style scoped>
.single-product {
  padding: 20px;
} 
</style>




