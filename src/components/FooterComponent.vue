<template>
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5>Follow us:</h5>
              <div class="follow-container">
              <div class="social-media">
                <img id="mg1" src="https://nikilitha26.github.io/nodejsImages/facebook-icon-instagram-icon-instagram-2016-icon-instagram-logo-icon-new-icon-brass-circle-wood-beige-metal-png-clipart-thumbnail-removebg-preview.png" alt="icon" class="img-fluid border-5 rounded-circle custom-image">
                <p id="maj">majestic_scent_official</p>
              </div>
              <div class="social-media">
                <img id="mg2" src="https://nikilitha26.github.io/nodejsImages/images-removebg-preview%20(1).png" alt="icon" class="img-fluid border-5 rounded-circle custom-image2">
                <p id="maj1">majestic_scent_official</p>
              </div>
            </div>
            </div>
            <div class="col-md-4">
              <h5>Shop:</h5>
              <ul>
  <li><router-link to="/about">About</router-link></li>
  <li><router-link to="/products">Products</router-link></li>
  <li><router-link to="/admin">Admin</router-link></li>
  <li><router-link to="/contact">Contact</router-link></li>
</ul>
            </div>
            <div class="col-md-4">
            <h5>Accepted card payments:</h5>
            <div class="accepted-cards">
              <img id="visa" src="https://nikilitha26.github.io/nodejsImages/imgbin-visa-credit-card-debit-card-visa-CVupnbKnhhXkYdQ3EY1sZ3ErQ-removebg-preview.png" alt="visa" class="img-fluid">
              <img id="mastercard" src="https://nikilitha26.github.io/nodejsImages/png-transparent-card-master-master-card-master-card-new-logo-method-new-logo-payment-logos-icon-thumbnail-removebg-preview.png" alt="mastercard" class="img-fluid">
              <img id="applepay" src="https://nikilitha26.github.io/nodejsImages/png-transparent-apple-pay-mobile-payment-apple-wallet-apple-text-service-rectangle-removebg-preview.png" alt="applepay" class="img-fluid">
              <img id="maestro" src="https://nikilitha26.github.io/nodejsImages/png-transparent-maestro-payment-method-icon-removebg-preview.png" alt="maestro" class="img-fluid">
            </div>
          </div>
        </div>
          
          <p class="foot" > Copyright &copy; Majectic Scent  {{ currentYear }} Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>
  <style >
  .footer {
      background-color: #000000;
      color: #fffeb6;
      padding: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #fffeb6;
  }
  
  a:hover {
    color: black;
    background-color: #fffeb6;
  }
  .foot{
      margin-top: 30px;
  }
  #mg1{
      height: 30px;
      width: 30px;
      margin-left: 90px;
  }
  #mg2{
      height: 30px;
      width: 30px;
      margin-left: 90px;
  }
  .social-media {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  .social-media img {
   position: relative;
   left: 20px;
  }
#maj{
    position: relative;
    left: 40px;
    top: 5px;
}
#maj1{
    position: relative;
    left: 40px;
    top: 5px;
}
#visa{
    width: 30px;
    height: 25px;
}
.accepted-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  grid-row-gap: -25px;
}
.accepted-cards img {
  width: 40px;
  height: 40px;
  margin-left: 90px;
 
}
  </style>