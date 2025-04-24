<template> 
  <div class="contact">
    <div class="columns">
      <div class="icons-column">
        <div class="icon-item">
          <i class="fas fa-phone-alt"></i>
          <p>+27 72 321 8921</p>
        </div>
        <div class="icon-item">
          <i class="fas fa-envelope"></i>
          <p>majesticscent@gmail.com</p>
        </div>
        <div class="icon-item">
          <i class="fab fa-instagram"></i>
          <p>majestic_scent_official</p>
        </div>
        <div class="icon-item">
          <i class="fab fa-facebook-f"></i>
          <p>majestic_scent_official</p>
        </div>
        <div class="icon-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Cape Town, Western Cape, 7790</p>
        </div>
      </div>

      <div class="form-column">
        <h2>Get in Touch</h2>
        <form @submit.prevent="handleSubmit">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Type your name…">
          <span v-if="errors.name" class="error">{{ errors.name }}</span>

          <label for="emaili">Email</label>
          <input type="email" id="emaili" v-model="formData.email" placeholder="Type your email…">
          <span v-if="errors.email" class="error">{{ errors.email }}</span>

          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" placeholder="Type your message…"></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      formData: { name: '', email: '', message: '' },
      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        const fd = new FormData();
        fd.append('name', this.formData.name);
        fd.append('email', this.formData.email);
        fd.append('message', this.formData.message);

        fetch('https://formspree.io/f/xkgwplyn', {
          method: 'POST',
          body: fd
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
      }
    },
    validateForm() {
      const errs = {};
      if (!this.formData.name)    errs.name    = 'Name is required';
      if (!this.formData.email)   errs.email   = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email))
                                 errs.email   = 'Invalid email';
      if (!this.formData.message) errs.message = 'Message is required';
      this.errors = errs;
      return Object.keys(errs).length === 0;
    }
  }
}
</script>

<style scoped>
.contact {
  background: #000;
  min-height: 100vh;
  padding: 100px 0;
  color: #ad8330;
}

.columns {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 70px;
}

.icons-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px; 
}

.icon-item {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.icon-item i {
  font-size: 2rem;
  color: #ad8330;
  margin-right: 12px;
}

.icon-item p {
  font-size: 1.1rem;
  color: #ad8330;
  margin: 0;
}

.form-column {
  max-width: 400px;
  width: 100%;
}

.form-column h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ad8330;
}

.form-column label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #ad8330;
}

.form-column input,
.form-column textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background: #000;
  border: 2px solid #ad8330;
  border-radius: 5px;
  color: #ad8330;
  font-size: 1rem;
}

.form-column input::placeholder,
.form-column textarea::placeholder {
  color: #ad8330aa;
}

.form-column button {
  margin-top: 20px;
  background: #ad8330;
  color: #000;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form-column button:hover {
  background: #fff;
  color: #ad8330;
}
.form-column form {
  display: flex;
  flex-direction: column;
  gap: 3px; 
}


.error {
  color: #e74c3c;
  font-size: 0.9rem;
}

/* Mobile */
@media (max-width: 600px) {
  .columns {
    flex-direction: column;
    align-items: center;
  }
  .icons-column {
    align-items: center;
    margin-bottom: 30px;
  }
}
</style>
