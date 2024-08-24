<template>
  <div class="admin-page">
    <h1>Admin Page</h1>

    <h2>PRODUCTS TABLE</h2>

    <button class="btn btn-primary" @click="$refs.addProductModal.show()">Add Product</button>

    <table class="product-table" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="products.length > 0">
        <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodID }}</td>
          <td>
            <div class="product-image-wrapper">
              <img :src="product.prodURL" alt="Product Image" />
            </div>
          </td>
          <td>{{ product.prodName }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.Category }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>
            <button class="btn btn-edit" @click="editProduct(product)">Edit</button>
            <button class="btn btn-delete" @click="deleteProduct(product.prodID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> 

    <!-- Add Product Modal -->
    <AddProductModal ref="addProductModal" @add-product="addProduct" @close="showAddModal = false" />

    <!-- Edit Product Modal -->
     <EditProductModal ref="editProductModal" :edited-product="editedProduct" @save-edited-product="saveEditedProduct" />

     <br>

    <h2>USERS TABLE</h2>

    <button class="btn btn-primary" @click="$refs.addUserModal.show()">Add User</button>

    <table class="user-table">
      <thead>
        <tr>
          <th>User Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="users.length > 0">
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userProfile }}</td>
          <td>
            <button class="btn btn-edit" @click="editUser(user)">Edit</button>
            <button class="btn btn-delete" @click="deleteUser( user.userID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add User Modal -->
    <AddUserModal ref="addUserModal" @add-user="addUser" @close="showAddModal = false" />
    <EditUserModal :edited-user="editedUser" @save-edited-user="saveEditedUser" />
  </div>
</template>

<script>
import AddProductModal from '../components/AddProductModalComponent.vue'
import EditProductModal from '../components/EditProductModelComponent.vue'
import AddUserModal from '../components/AddUserModalComponent.vue'
import EditUserModal from '../components/EditUserModalComponent.vue';


export default {
  components: { AddProductModal, EditProductModal, AddUserModal, EditUserModal  },
  computed: {
    products() {
      return this.$store.state.products.products
    },
    users() {
      return this.$store.state.users.users
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchProducts')
    this.$store.dispatch('users/fetchUsers')
  },
  data() {
    return {
      editedProduct: {},
      showAddModal: false,
      editedUser: {},
    }
  },
  methods: {
    editProduct(product) {
      this.editedProduct = { ...product }
      const modal = new bootstrap.Modal(document.getElementById('editProductModal'))
      modal.show()
    },
    saveEditedProduct() {
      this.$store.dispatch('products/updateProduct', this.editedProduct);
      const modal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'));
      modal.hide();
    },
    deleteProduct(id) {
      this.$store.dispatch('products/deleteProduct', id)
    },
    addProduct(newProduct) {
      this.$store.dispatch('products/addProduct', newProduct)
    },
    editUser(user) {
      this.editedUser = { ...user }
      const modal = new bootstrap.Modal(document.getElementById('editUserModal'))
      modal.show()
},
saveEditedUser() {
  this.$store.dispatch('users/updateUser', this.editedUser);
    const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
    modal.hide();
},
    deleteUser(userID) {
    this.$store.dispatch('users/deleteUser', userID);
},
    addUser() {
    this.$store.dispatch('users/registerUser', this.newUser);
    const modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
    modal.hide();
  }
  
  }
}
</script>

<style scoped>
.admin-page {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.product-table th {
  background-color: #f0f0f0;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.user-table th {
  background-color: #f0f0f0;
}

.product-image-wrapper {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
}

.product-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit {
  background-color: #4CAF50;
  color: #fff;
}

.btn-delete {
  background-color: #FF0000;
  color: #fff;
}

.btn-primary {
  background-color: #337AB7;
  color: #fff;
}

.btn:hover {
  opacity: 0.8;
}
.product-table, .user-table {
  width: 100%;
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
}

.product-table th, .product-table td, .user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  min-width: 150px;
}

.product-table th, .user-table th {
  background-color: #f0f0f0;
}

@media only screen and (max-width: 300px) {
  .product-table, .user-table {
    font-size: 12px;
  }
  .product-table th, .product-table td, .user-table th, .user-table td {
    padding: 5px;
    min-width: 100px;
  }
.admin-page {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: auto;
} 
}
</style>
