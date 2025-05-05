<template>
  <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content custom-modal">
        <div class="modal-header">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Product Name</label>
              <input type="text" class="form-control custom-input" v-model="editedProduct.prodName" />
            </div>
            <div class="mb-3">
              <label class="form-label">Product Description</label>
              <textarea class="form-control custom-input" v-model="editedProduct.prodDescription"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Product Quantity</label>
              <input type="number" class="form-control custom-input" v-model="editedProduct.quantity" />
            </div>
            <div class="mb-3">
              <label class="form-label">Product Category</label>
              <input type="text" class="form-control custom-input" v-model="editedProduct.Category" />
            </div>
            <div class="mb-3">
              <label class="form-label">Price</label>
              <input type="number" class="form-control custom-input" v-model="editedProduct.amount" />
            </div>
            <div class="mb-3">
              <label class="form-label">Product Image URL</label>
              <input type="text" class="form-control custom-input" v-model="editedProduct.prodURL" />
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
import Swal from 'sweetalert2';

export default {
  props: {
    editedProduct: Object
  },
  methods: {
    saveEditedProduct() {
      this.$emit('save-edited-product', this.editedProduct);
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'));
      modal.hide();

      // Show SweetAlert popup
      Swal.fire({
        title: 'Success!',
        text: 'Product has been updated successfully.',
        icon: 'success',
        confirmButtonColor: '#ad8330',
        background: '#1c1c1c',
        color: '#fff',
        customClass: {
          popup: 'border-gold'
        }
      });
    }
  }
}
</script>

<style scoped>
.custom-modal {
  background-color: black;
  color: #ad8330;
  border: 2px solid #ad8330;
}

.modal-title {
  color: #ad8330;
  font-family: "Cinzel", serif;
}

.modal-header,
.modal-footer {
  background-color: #1c1c1c;
  color: #ad8330;
}

.form-label {
  color: #ad8330;
  font-weight: bold;
}

.custom-input {
  background-color: #1c1c1c;
  color: white;
  border: 1px solid #ad8330;
}

.btn8 {
  background-color: #ad8330;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.btn8:hover {
  background-color: #cfa349;
}

.btn-close-white {
  filter: invert(1);
}

:deep(.swal2-popup.border-gold) {
  border: 2px solid #ad8330 !important;
}
</style>
