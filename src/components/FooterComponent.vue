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
  <style >
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
  flex-direction: column; 
  gap: 30px;
}

.col-md-4 {
  flex: 1;
  margin: 0 10px;
  font-family: "Cinzel", serif;
}

.follow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 40px;
  top: 10px;
  font-family: "Cinzel", serif;
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

.accepted-cards {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 15px;
}

.accepted-cards img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.foot {
  margin-top: 30px;
  text-align: center;
  font-family: "Cinzel", serif;
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

@media (min-width: 767px) {
  .row {
    flex-direction: row; 
    justify-content: space-between;
  }

  .col-md-4 {
    width: 30%;
  }
}

#follow{
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  left: -10px;
}

.follow-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  position: relative;
  left: 20px;
}

.social-media {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.social-media img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

#shop{
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  left: -10px;
}
.shop-container{
  position: relative;
  top: 10px;
  left: -13px;
  font-size: 20px;
}

#product{
  position: relative;
  left: 3px;
}

#maj, #maj1 {
  margin: 0;
}

#acc{
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  left: -10px;
}

.accepted-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.accepted-cards img {
  width: 40px;
  height: 40px;
}

.foot {
  margin-top: 50px;
  text-align: center;
  font-size: 1.1rem;
  font-size: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 8px;
}

a {
  text-decoration: none;
  color: #fffeb6;
}

a:hover {
  color: #000;
  background-color: #fff;
  padding: 2px 4px;
  border-radius: 3px;
}

@media (min-width: 768px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* First two columns: Follow Us and Shop side by side */
  .col-md-4:nth-child(1),
  .col-md-4:nth-child(2) {
    flex: 1 1 48%;
  }

  /* Third column: Accepted Cards on its own row */
  .col-md-4:nth-child(3) {
    flex: 1 1 100%;
  }

  /* Make accepted cards row images align in a line */
  .accepted-cards {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 15px;
  }

  #follow{
    font-size: 42px;
    font-weight: bolder
  }

  .follow-container {
    font-size: 34px;
    margin-left: 120px;
  }

  #shop{
    font-size: 42px;
    font-weight: bolder;
    position: relative;
    top: 20px;
  }

.shop-container{
  position: relative;
  top: 20px;
  left: -13px;
  font-size: 34px;
  margin-bottom: 20px;
}

#acc{
  font-size: 42px;
  font-weight: bolder;

}

.accepted-cards img {
    width: 60px;
    height: 60px;
  }

  .foot {
    font-size: 34px;
    text-align: center;
    margin-top: 50px;
  }
}

  </style>