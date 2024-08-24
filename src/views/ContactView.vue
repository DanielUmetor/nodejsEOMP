<template>
  <div class="contact">
    <div class="columns">
      <div class="icons-column">
        <div class="icon-item">
          <img id="phone" src="https://nikilitha26.github.io/nodejsImages/images__1_-removebg-preview.png" alt="Phone">
          <p id="phon">+27 72 321 8921</p>
        </div>
        <div class="icon-item">
          <img id="email" src="https://nikilitha26.github.io/nodejsImages/images__2_-removebg-preview.png" alt="Email">
          <p id="emai">majecticscent@gmail.com</p>
        </div>
        <div class="icon-item">
          <img id="instagram" src="https://nikilitha26.github.io/nodejsImages/free-instagram-brown-outline-icon-22728-thumb-removebg-preview.png" alt="Instagram">
          <p id="insta">majestic_scent_official</p>
        </div>
        <div class="icon-item">
          <img id="facebook" src="https://nikilitha26.github.io/nodejsImages/images__3_-removebg-preview.png" alt="Facebook">
          <p id="face">majestic_scent_official</p>
        </div>
        <div class="icon-item">
          <img id="location" src="https://nikilitha26.github.io/nodejsImages/images__4_-removebg-preview.png" alt="Question">
          <p id="loca">Cape Town, Western Cape, 7790</p>
        </div>
      </div>
      <div class="form-column">
        <h2 id="get">Get in Touch</h2>
        <form @submit.prevent="handleSubmit">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Type your name...">
          <span v-if="errors.name" class="error" style="color: red">{{ errors.name }}</span>
          <br><br>
          <label for="email">Email:</label>
          <input type="email" id="emaili" v-model="formData.email" placeholder="Type your email...">
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
          <br><br>
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" placeholder="Type your message..."></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
          <br><br>
          <input type="submit" value="Send" id="send">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {}
    }
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('message', this.formData.message);

        fetch('https://formspree.io/f/xkgwplyn', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }
    },
    validateForm() {
      const errors = {};
      if (!this.formData.name) {
        errors.name = 'Name is required';
      }
      if (!this.formData.email) {
        errors.email = 'Email is required';
      } else if (!this.validateEmail(this.formData.email)) {
        errors.email = 'Invalid email address';
      }
      if (!this.formData.message) {
        errors.message = 'Message is required';
      }
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  }
}
</script>

<style>
.contact{
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  height: 110vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; 
}
.error {
    color: red;
  }
.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-top: 90px;
}

.icons-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
}

.icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px; 
}

.icons-column img {
  width: 50px;
  height: 50px;
}

.icons-column p {
  color: #fff;
  margin-left: 10px;
}

.form-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.form-column h2 {
  color: #fff;
  margin-bottom: 20px;
}

.form-column label {
  color: #6f5030;
  margin-bottom: 10px;
}

.form-column input, .form-column textarea {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #6f5030;
  border-radius: 5px;
  width: 100%;
  font-style: italic #6f5030;
  color: #6f5030 !important;
}

.form-column input[type="submit"] {
  background-color: #6f5030;
  color: #fff !important;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-column input[type="submit"]:hover {
  color: #6f5030;
  background-color: #fff;
}
.form-column input[type="submit"]:active {
  animation: zoom-out 0.3s;
}

@keyframes zoom-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
#send{
  background-color: #6f5030;
  color: #fff !important;
}
#send:hover{
  color: #6f5030 !important;
  background-color: #fff;
}
#emaili{
  margin-left: 0px;
}
#get{
  color: #6f5030;
}
#phone{
  position: relative;
  right: 100px;
}
#phon{
  position: relative;
  right: 80px;
  margin-top: 20px;
}
#email{
  position: relative;
  right: 66px;
}
#emai{
  position: relative;
  right: 43px;
  margin-top: 14px;
}
#instagram{
  position: relative;
  right: 79px;
}
#insta{

  position: relative;
  right: 57px;
  margin-top: 10px;
}
#facebook{
  position: relative;
  right: 80px;
}
#face{
  position: relative;
  right: 58px;
}
#location{
  position: relative;
  right: 50px;
}
#loca{
  position: relative;
  right: 25px;
}
@media only screen and (max-width: 300px) {
    .contact {
      height: auto; 
      padding-top: 50px; 
    }

    .columns {
      flex-direction: column; 
      width: 100%; 
      margin-top: 20px; 
    }

    .icons-column {
      padding: 10px; 
    }

    .icon-item {
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px; 
    }

    .icons-column img {
      width: 30px; 
      height: 30px;
    }

    .icons-column p {
      font-size: 14px;
      margin-left: 5px; 
    }

    .form-column {
      padding: 10px; 
    }

    .form-column h2 {
      font-size: 18px; 
      margin-bottom: 10px; 
    }

    .form-column label {
      font-size: 14px; 
      margin-bottom: 5px; 
    }

    .form-column input, .form-column textarea {
      padding: 5px; 
      margin-bottom: 10px; 
    }

    .form-column input[type="submit"] {
      padding: 5px 10px; 
    }
  }
</style>