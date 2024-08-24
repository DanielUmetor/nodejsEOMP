<template>
  <div class="single-product">
    <div class="row" style="margin-top: 50px; margin-bottom: 30px;">
      <div class="col-md-6">
        <img v-if="product" :src="product.prodURL" class="img-fluid" alt="Product Image" style="height: 400px;">
      </div>
      <div class="col-md-6">
        <h2 v-if="product" style="font-size: 36px;">{{ product.prodName }}</h2>
        <p v-if="product" style="font-size: 24px;">Product ID: {{ product.prodID }}</p>
        <p v-if="product" style="font-size: 24px;">Price: {{ product.amount }}</p>
        <table v-if="product" class="table table-striped" style="font-size: 24px;">
          <tr>
            <td>Quantity:</td>
            <td>{{ product.quantity }}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{{ product.Category }}</td>
          </tr>
        </table>
        <button class="btn7" @click="$router.push({ name: 'products' })" style="padding: 20px; font-size: 24px;">Back to Products</button>
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
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  height: 400vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px; 
  height: auto;
}

.single-product h2 {
  margin-bottom: 30px;
}

.single-product p {
  margin-bottom: 30px;
}

.single-product img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
}

.single-product table {
  margin-bottom: 0px;
}

.single-product button {
  width: 100%;
  border-radius: 10px;
}
.btn7{
    padding: 150x;
    background-color: #6f5030 !important;
    color: white;
    border: none;
    margin-top: 45px;
  }

@media only screen and (max-width: 300px) {
  .single-product {
    padding: 20px;
    top: 400px;
  }
  .single-product h2 {
    font-size: 28px;
  }
  .single-product p {
    font-size: 20px;
  }
  .single-product img {
    height: 250px;
  }
  .single-product table {
    font-size: 20px;
  }
  .single-product button {
    padding: 15px;
    font-size: 22px;
  }
  .btn7{
    padding: 150x;
    background-color: #6f5030 !important;
    color: white;
  }
}
</style>




