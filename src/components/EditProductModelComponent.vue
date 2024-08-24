<template>
    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="prodName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="prodName" v-model="editedProduct.prodName">
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Description</label>
                <textarea class="form-control" id="prodDescription" v-model="editedProduct.prodDescription"></textarea>
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Quantity</label>
                <textarea class="form-control" id="prodQuantity" v-model="editedProduct.quantity"></textarea>
              </div>
              <div class="mb-3">
                <label for="prodDescription" class="form-label">Product Category</label>
                <textarea class="form-control" id="prodCategory" v-model="editedProduct.Category"></textarea>
              </div>
              <div class="mb-3">
                <label for="amount" class="form-label">Price</label>
                <input type="number" class="form-control" id="amount" v-model="editedProduct.amount">
              </div>
              <div class="mb-3">
                <label for="prodURL" class="form-label">Product Image URL</label>
                <input type="text" class="form-control" id="prodURL" v-model="editedProduct.prodURL">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn8" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn8" @click="saveEditedProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      editedProduct: Object
    },
    methods: {
      saveEditedProduct() {
        this.$emit('save-edited-product', this.editedProduct);
        const modal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'));
        modal.hide();
      }
    }
  }
  </script>
  

 <style scoped>
.btn8{
  background-color: rgb(129, 92, 47);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
</style>