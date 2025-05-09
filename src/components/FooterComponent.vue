<template>
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5 id="follow">Follow us:</h5>
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
              <h5 id="shop">Shop:</h5>
              <ul class="shop-container">
  <li id="about"><router-link to="/about">About</router-link></li>
  <li id="product"><router-link to="/products">Products</router-link></li>
  <li id="admin"><router-link to="/admin">Admin</router-link></li>
  <li id="contact"><router-link to="/contact">Contact</router-link></li>
</ul>
            </div>
            <div class="col-md-4">
            <h5 id="acc">Accepted card payments:</h5>
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

  <style scoped >
 .footer {
  background-color: #000000;
  color: #fffeb6;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  font-family: "Cinzel", serif;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.col-md-4 {
  flex: 1 1 100%;
  margin: 10px 0;
  font-family: "Cinzel", serif;
}

.col-md-4 {
  flex: 1;
  margin: 0 10px;
  font-family: "Cinzel", serif;
}

#follow{
  font-size: 30px;
  font-weight: 800;
}

.follow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: -20px;
  top: 20px;
  font-family: "Cinzel", serif;
  font-size: 22px;
}

.social-media {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Cinzel", serif;
}

.social-media img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

#maj, #maj1 {
  margin-left: 10px;
  font-family: "Cinzel", serif;
}

#shop{
  font-size: 30px;
  font-weight: 800;
}

.shop-container{
  font-size: 22px;
  position: relative;
  top: 20px;
}

#acc{
  font-size: 30px;
  font-weight: 800;
}

.accepted-cards {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 15px;
}

.accepted-cards img {
  position: relative;
  top: 20px;
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.foot {
  margin-top: 30px;
  text-align: center;
  font-family: "Cinzel", serif;
  font-size: 22px;
}
  a {
        text-decoration: none !important;
        list-style: none !important
        ;
        color: #fffeb6; 
    }

    a:hover {
      color: #000000;
      background-color: #ffffff; 
    }
    ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 1120px) {
  .row {
    flex-direction: row !important;
  }

  .col-md-4 {
    flex: 1 1 30%;
    margin: 0 10px;
  }

  #follow{
    font-size: 35px;
    position: relative;
    left: 30px;
  }

  .follow-container{
    font-size: 28px;
    position: relative;
    left: 30px;
  }

  #shop{
    font-size: 35px;
  }

  .shop-container{
    font-size: 28px;
    
    margin-left: 110px;
  }

  #product{
    position: relative;
    right: 10px;
  }

  #acc{
    font-size: 35px;
    position: relative;
    top: 20px;
  }

  .accepted-cards {
  justify-content: center;
  gap: 60px; /* or remove gap entirely */
}

  .accepted-cards img {
    margin: 0px;
    width: 50px;
    height: 50px;
  }

  .follow-container,
  .shop-container,
  .accepted-cards {
    align-items: flex-start !important;
    text-align: left !important;
  }

  .foot{
    font-size: 28px;
    position: relative;
    top: 40px;
  }
}

@media (max-width: 600px) {
  .row {
    flex-direction: row;
  }

  .col-md-4 {
    flex: 1 1 33.33% !important;
    margin: 0;
    text-align: center;
  }
  #follow{
    font-size: 28px;
    position: relative;
    left: 0px;
  }

  .follow-container{
    font-size: 22px;
    position: relative;
    left: 30px;
  }

  #shop{
    font-size: 28px;
    position: relative;
    bottom: 15px;
  }

  .shop-container{
    font-size: 22px;
    margin-left: 125px;
    position: relative;
    top: 0px;
    flex-wrap: wrap;
  }

  #product{
    position: relative;
    right: 10px;
  }

  #acc{
    font-size: 28px;
    position: relative;
    top: 20px;
  }

  .accepted-cards {
  justify-content: center;
  gap: 40px; 
}

  .accepted-cards img {
    margin: 0px;
    width: 40px;
    height: 40px;
  }

  .foot{
    font-size: 22px;
    position: relative;
    top: 40px;
  }
}

  </style>