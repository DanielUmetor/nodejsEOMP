<template>
  <div class="single-product">
    <div class="row" style="margin-top: 50px; margin-bottom: 30px;">
      <div id="image" class="col-md-6">
        <img v-if="product" :src="product.prodURL" class="img-fluid" alt="Product Image" style="height: 400px;">
      </div>
      <div id="det" class="col-md-6">
        <h2 v-if="product" style="font-size: 36px;">{{ product.prodName }}</h2>
        <p v-if="product" style="font-size: 24px; color: #ad8330;">Product ID: {{ product.prodID }}</p>
        <p v-if="product" style="font-size: 24px; color: #ad8330;">Price: {{ product.amount }}</p>
        <p v-if="product" style="font-size: 24px; color: #ad8330;">Quantity: {{ product.quantity }}</p>
        <p v-if="product" style="font-size: 24px; color: #ad8330;">Category: {{ product.Category }}</p>
        <!-- <table v-if="product" class="table table-striped" style="font-size: 24px; color: white;">
          <tr>
            <td>Quantity:</td>
            <td>{{ product.quantity }}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{{ product.Category }}</td>
          </tr>
        </table> -->
        <button class="btn7" @click="$router.push({ name: 'products' })" style="padding: 10px; font-size: 24px; position: relative;
  bottom: 40px ;">Back to Products</button>
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
  background-color: black;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  color: white;
}

.single-product h2 {
  margin-bottom: 30px;
  font-family: "Cinzel", serif;
  font-size: 36px;
  color: #ad8330;
}

.single-product p {
  margin-bottom: 30px;
  font-family: "Cinzel", serif;
  font-size: 24px;
  color: #ad8330;
}

.single-product img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
}

.single-product table {
  margin-bottom: 0px;
  font-family: "Cinzel", serif;
  font-size: 24px;
  color: white;
}

.single-product table tr td {
  color: #ad8330; 
}

.single-product button {
  width: 100%;
  border-radius: 10px;
  background-color: #ad8330;
  color: black;
  font-family: "Cinzel", serif;
  border: none;
  margin-top: 45px;
  padding: 20px;
  font-size: 24px;
}

.single-product button:hover {
  background-color: black;
  color: #ad8330;
}

.btn7 {
  /* position: relative;
  bottom: 20px !important; */
  /* padding: 20px; */
  background-color: #ad8330 !important;
  color: white;
  border: none;
  margin-top: 15px;
}

.btn7:hover{
  background-color: black !important;
  color: #ad8330;
  border: #ad8330 solid 2px;
}

#image{
  position: relative;
  right: 60px;
}

#det{
  text-align: center;
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
  .btn7 {
    padding: 15px;
    background-color: #ad8330 !important;
    color: white;
  }
}
</style>
