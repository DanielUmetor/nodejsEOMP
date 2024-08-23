<template>
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="prodName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="prodName" v-model="newProduct.prodName">
              </div>
              <div class="mb-3">
                <label for="prodName" class="form-label">Product ID</label>
                <input type="text" class="form-control" id="prodID" v-model="newProduct.prodID">
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Description</label>
                <textarea class="form-control" id="prodDescription" v-model="newProduct.prodDescription"></textarea>
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Quantity</label>
                <input class="form-control" id="quantity" v-model="newProduct.quantity">
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Category</label>
                <textarea class="form-control" id="Category" v-model="newProduct.Category"></textarea>
              </div>
              <div class="mb-3">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" v-model="newProduct.amount">
              </div>
              <div class="mb-3">
                <label for="prodURL" class="form-label">Product Image URL</label>
                <input type="text" class="form-control" id="prodURL" v-model="newProduct.prodURL">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProduct(newUser)">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
    data() {
        return {
             newProduct: {
                prodName: '',
                prodDescription: '',
                 amount: 0,
                prodURL: '',
                prodID: 0,
                quantity: 0
    }
  }
    },
    methods: {
      addProduct() {
        this.$emit('add-product', this.newProduct);
        const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
        modal.hide();
      },
      show() {
      const modal = new bootstrap.Modal(document.getElementById('addProductModal'))
      modal.show()
    }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
 
 
 
 
 
 
 
 
 