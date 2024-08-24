<template>
  <div class="modal" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editUserModalLabel">Edit User</h5>
          <button id="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="userID">User ID</label>
              <input type="text" class="form-control" id="userID" v-model="editedUser.userID">
            </div>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="editedUser.firstName">
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="editedUser.lastName">
            </div>
            <div class="form-group">
              <label for="userAge">Age</label>
              <input type="number" class="form-control" id="userAge" v-model="editedUser.userAge">
            </div>
            <div class="form-group">
              <label for="Gender">Gender</label>
              <input type="text" class="form-control" id="Gender" v-model="editedUser.Gender">
            </div>
            <div class="form-group">
              <label for="userRole">Role</label>
              <input type="text" class="form-control" id="userRole" v-model="editedUser.userRole">
            </div>
            <div class="form-group">
              <label for="emailAdd">Email</label>
              <input type="email" class="form-control" id="emailAdd" v-model="editedUser.emailAdd">
            </div>
            <div class="form-group">
              <label for="userProfile">Profile</label>
              <input type="text" class="form-control" id="userProfile" v-model="editedUser.userProfile">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn8 " data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn8 " @click="saveEditedUser">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editedUser: Object
  },
  methods: {
  saveEditedUser() {
    this.$emit('save-edited-user', this.editedUser);
    const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
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
#close{
  color: rgb(129, 92, 47);
}
</style>