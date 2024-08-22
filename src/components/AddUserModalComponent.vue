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
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="newUser.lastName">
              </div>
              <div class="mb-3">
                <label for="emailAdd" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailAdd" v-model="newUser.emailAdd">
              </div>
              <div class="mb-3">
                <label for="userPass" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPass" v-model="newUser.userPass">
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">Age</label>
                <input type="number" class="form-control" id="userAge" v-model="newUser.userAge">
              </div>
              <div class="mb-3">
                <label for="Gender" class="form-label">Gender</label>
                <select class="form-control" id="Gender" v-model="newUser.Gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <select class="form-control" id="userRole" v-model="newUser.userRole">
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addUser(newUser)">Add User</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: {
          firstName: '',
          lastName: '',
          emailAdd: '',
          userPass: '',
          userAge: 0,
          Gender: '',
          userRole: ''
        }
      }
    },
    methods: {
        addUser(newUser) {
      this.$store.dispatch('users/registerUser', newUser);
      const modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
      modal.hide();
    },
      show() {
        const modal = new bootstrap.Modal(document.getElementById('addUserModal'));
        modal.show();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>