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
              <small v-if="validationErrors.prodName" class="text-danger">{{ validationErrors.prodName }}</small>
            </div>

            <div class="mb-3">
              <label for="prodID" class="form-label">Product ID</label>
              <input type="text" class="form-control" id="prodID" v-model="newProduct.prodID">
              <small v-if="validationErrors.prodID" class="text-danger">{{ validationErrors.prodID }}</small>
            </div>

            <div class="mb-3">
              <label for="prodDescription" class="form-label">Product Description</label>
              <textarea class="form-control" id="prodDescription" v-model="newProduct.prodDescription"></textarea>
              <small v-if="validationErrors.prodDescription" class="text-danger">{{ validationErrors.prodDescription }}</small>
            </div>

            <div class="mb-3">
              <label for="quantity" class="form-label">Product Quantity</label>
              <input type="number" class="form-control" id="quantity" v-model="newProduct.quantity">
              <small v-if="validationErrors.quantity" class="text-danger">{{ validationErrors.quantity }}</small>
            </div>

            <div class="mb-3">
              <label for="Category" class="form-label">Product Category</label>
              <textarea class="form-control" id="Category" v-model="newProduct.Category"></textarea>
              <small v-if="validationErrors.Category" class="text-danger">{{ validationErrors.Category }}</small>
            </div>

            <div class="mb-3">
              <label for="amount" class="form-label">Amount</label>
              <input type="number" class="form-control" id="amount" v-model="newProduct.amount">
              <small v-if="validationErrors.amount" class="text-danger">{{ validationErrors.amount }}</small>
            </div>

            <div class="mb-3">
              <label for="prodURL" class="form-label">Product Image URL</label>
              <input type="text" class="form-control" id="prodURL" v-model="newProduct.prodURL">
              <small v-if="validationErrors.prodURL" class="text-danger">{{ validationErrors.prodURL }}</small>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn8" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn8" @click="addProduct">Add Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      newProduct: {
        prodName: '',
        prodDescription: '',
        amount: '',
        prodURL: '',
        prodID: '',
        quantity: '',
        Category: ''
      },
      validationErrors: {}
    }
  },
  methods: {
    validateForm() {
      this.validationErrors = {}

      if (!this.newProduct.prodName) this.validationErrors.prodName = 'Product Name is required.'
      if (!this.newProduct.prodID) this.validationErrors.prodID = 'Product ID is required.'
      if (!this.newProduct.prodDescription) this.validationErrors.prodDescription = 'Description is required.'
      if (!this.newProduct.quantity) this.validationErrors.quantity = 'Quantity is required.'
      if (!this.newProduct.Category) this.validationErrors.Category = 'Category is required.'
      if (!this.newProduct.amount) this.validationErrors.amount = 'Amount is required.'
      if (!this.newProduct.prodURL) this.validationErrors.prodURL = 'Image URL is required.'

      return Object.keys(this.validationErrors).length === 0
    },
    addProduct() {
      if (!this.validateForm()) return

      this.$emit('add-product', this.newProduct)
      const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'))
      modal.hide()

      Swal.fire({
        title: 'Success!',
        text: 'New product has been added successfully.',
        icon: 'success',
        confirmButtonColor: '#ad8330',
        background: 'black',
        color: '#ad8330',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'cinzel-font'
        }
      })

      this.newProduct = {
        prodName: '',
        prodDescription: '',
        amount: '',
        prodURL: '',
        prodID: '',
        quantity: '',
        Category: ''
      }
      this.validationErrors = {}
    },
    show() {
      const modal = new bootstrap.Modal(document.getElementById('addProductModal'))
      modal.show()
    }
  }
}
</script>

<style scoped>
.cinzel-font {
  font-family: "Cinzel", serif;
}

.modal-content {
  background-color: black;
  color: white;
  border: 2px solid #ad8330;
}

.modal-header,
.modal-footer {
  background-color: #1c1c1c;
  color: #ad8330;
}

.modal-title {
  font-family: "Cinzel", serif;
  color: #ad8330;
}

.form-label {
  color: #ad8330;
  font-family: "Cinzel", serif;
}

.form-control {
  background-color: #222;
  color: white;
  border: 1px solid #ad8330;
}

.form-control:focus {
  border-color: #ad8330;
  box-shadow: 0 0 0 0.2rem rgba(173, 131, 48, 0.25);
}

select.form-control {
  background-color: #2a2a2a;
  color: #ad8330;
  border: 1px solid #ad8330;
}

.btn8 {
  background-color: #ad8330;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Cinzel", serif;
}

.btn8:hover {
  background-color: black;
  color: #ad8330;
  border: 1px solid #ad8330;
}

.btn-close {
  filter: invert(1);
}

.text-danger {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
  display: block;
}
</style>
