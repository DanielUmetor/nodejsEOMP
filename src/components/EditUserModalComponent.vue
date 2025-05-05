<template>
  <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editUserModalLabel">Edit User</h5>
          <button id="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3" v-for="(value, key) in editedUser" :key="key">
              <label :for="key" class="form-label">{{ formatLabel(key) }}</label>
              <input
                :type="key === 'userAge' ? 'number' : key === 'emailAdd' ? 'email' : 'text'"
                class="form-control"
                :id="key"
                v-model="editedUser[key]"
              >
              <div v-if="errors[key]" class="text-danger mt-1">{{ errors[key] }}</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn8" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn8" @click="saveEditedUser">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: {
    editedUser: Object
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    formatLabel(key) {
      return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
    },
    validateInputs() {
      this.errors = {};
      let isValid = true;

      for (const [key, value] of Object.entries(this.editedUser)) {
        if (value === '' || value === null || value === undefined) {
          this.errors[key] = `${this.formatLabel(key)} is required`;
          isValid = false;
        }
      }

      return isValid;
    },
    saveEditedUser() {
      if (!this.validateInputs()) return;

      this.$emit('save-edited-user', this.editedUser);
      const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
      modal.hide();

      Swal.fire({
        title: 'Success!',
        text: 'User details have been updated.',
        icon: 'success',
        confirmButtonColor: '#ad8330',
        background: 'black',
        color: '#ad8330',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'cinzel-font'
        }
      });
    }
  }
};
</script>

<style scoped>
.modal-content {
  background-color: black;
  color: #ad8330;
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

.text-danger {
  color: red;
  font-size: 0.875rem;
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
</style>
