<template>
  <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addUserModalLabel">Add User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="newUser.firstName">
              <small v-if="validationErrors.firstName" class="text-danger">{{ validationErrors.firstName }}</small>
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="newUser.lastName">
              <small v-if="validationErrors.lastName" class="text-danger">{{ validationErrors.lastName }}</small>
            </div>
            <div class="mb-3">
              <label for="emailAdd" class="form-label">Email</label>
              <input type="email" class="form-control" id="emailAdd" v-model="newUser.emailAdd">
              <small v-if="validationErrors.emailAdd" class="text-danger">{{ validationErrors.emailAdd }}</small>
            </div>
            <div class="mb-3">
              <label for="userPass" class="form-label">Password</label>
              <input type="password" class="form-control" id="userPass" v-model="newUser.userPass">
              <small v-if="validationErrors.userPass" class="text-danger">{{ validationErrors.userPass }}</small>
            </div>
            <div class="mb-3">
              <label for="userAge" class="form-label">Age</label>
              <input type="number" class="form-control" id="userAge" v-model="newUser.userAge">
              <small v-if="validationErrors.userAge" class="text-danger">{{ validationErrors.userAge }}</small>
            </div>
            <div class="mb-3">
              <label for="Gender" class="form-label">Gender</label>
              <select class="form-control" id="Gender" v-model="newUser.Gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <small v-if="validationErrors.Gender" class="text-danger">{{ validationErrors.Gender }}</small>
            </div>
            <div class="mb-3">
              <label for="userRole" class="form-label">Role</label>
              <select class="form-control" id="userRole" v-model="newUser.userRole">
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <small v-if="validationErrors.userRole" class="text-danger">{{ validationErrors.userRole }}</small>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn8" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn8" @click="addUser">Add User</button>
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
      newUser: {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: '',
        userAge: '',
        Gender: '',
        userRole: ''
      },
      validationErrors: {}
    }
  },
  methods: {
    validateForm() {
      this.validationErrors = {}

      if (!this.newUser.firstName) this.validationErrors.firstName = 'First name is required.'
      if (!this.newUser.lastName) this.validationErrors.lastName = 'Last name is required.'
      if (!this.newUser.emailAdd) this.validationErrors.emailAdd = 'Email is required.'
      if (!this.newUser.userPass) this.validationErrors.userPass = 'Password is required.'
      if (!this.newUser.userAge) this.validationErrors.userAge = 'Age is required.'
      if (!this.newUser.Gender) this.validationErrors.Gender = 'Gender is required.'
      if (!this.newUser.userRole) this.validationErrors.userRole = 'Role is required.'

      return Object.keys(this.validationErrors).length === 0
    },
    addUser() {
      if (!this.validateForm()) return

      this.$store.dispatch('users/registerUser', this.newUser)
      const modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'))
      modal.hide()

      Swal.fire({
        title: 'Success!',
        text: 'New user has been added successfully.',
        icon: 'success',
        confirmButtonColor: '#ad8330',
        background: 'black',
        color: '#ad8330',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'cinzel-font'
        }
      })

      this.newUser = {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: '',
        userAge: '',
        Gender: '',
        userRole: ''
      }
      this.validationErrors = {}
    },
    show() {
      const modal = new bootstrap.Modal(document.getElementById('addUserModal'))
      modal.show()
    }
  }
}
</script>

<style scoped>
.btn8 {
  background-color: #ad8330;
  color: black;
  padding: 10px;
  border: 1px solid #ad8330;
  border-radius: 5px;
  transition: 0.3s;
  font-family: "Cinzel", serif;
}

.btn8:hover {
  background-color: black;
  color: #ad8330;
}

/* Modal content */
.modal-content {
  background-color: black;
  color: #ad8330;
}

/* Modal header/footer */
.modal-header,
.modal-footer {
  background-color: #1c1c1c;
  color: #ad8330;
}

/* Input styles */
.form-control {
  background-color: #2a2a2a;
  color: #ad8330;
  border: 1px solid #ad8330;
}

/* Label styles */
.form-label {
  color: #ad8330;
}

select.form-control {
  background-color: #2a2a2a;
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

.cinzel-font {
  font-family: "Cinzel", serif;
}
</style>
