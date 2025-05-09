<template>
  <div class="home">
    <div class="left-column">
      <p class="slogan">THE <br>TOUCH OF ROYALTY!</p> <br>
      <p class="welcome"> Welcome to Majestic Scent!!Whether you're a man or woman, our diverse selection of <br>
        fragrances will entice your senses and leave you feeling confident <br>
        and alluring. From timeless classics to modern masterpieces, our <br>
        fragrances are expertly crafted using only the highest quality ingredients. <br>
        Take a journey with us and discover your signature scent today!</p>
    </div>
    <div class="right-column">
      <img src="https://nikilitha26.github.io/nodejsImages/2_bottles-removebg-preview.png" alt="Image">
    </div>

    <button class="bt1" @click="$router.push('/products')">Explore More</button>

    <div class="bb">
      <h2 class="best">BEST SELLERS:</h2>
      <div class="container">
  <div id="row" class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="https://danielumetor.github.io/nodeImages/daniel%20image%202.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Celestial Tidal</h5>
          <p class="card-text">R2300</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="https://danielumetor.github.io/nodeImages/niki's%20image1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Pink Mirage</h5>
          <p class="card-text">R2000</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="https://danielumetor.github.io/nodeImages/daniel%204.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Marine Legend</h5>
          <p class="card-text">R1800</p>
        </div>
      </div>
    </div>
  </div>
</div>


<button class="bt2" @click="$router.push('/products')">Shop Now</button>
</div>
  </div>
</template>

<script>
import CardComp from '../components/CardComponent.vue'

export default {
  components: { CardComp }
}
</script>


<style>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: black;
  position: relative;
  top: 20px;
  z-index: 1;  
}

.left-column, .right-column {
  flex: 1 1 50%;
  padding: 20px;
  box-sizing: border-box;
}

.left-column {
  margin-top: 160px;
  animation: slideInFromLeft 1s forwards;
}

.right-column {
  text-align: center;
  margin-top: 120px;
  animation: slideInFromRight 1s forwards;
}

.right-column img {
  width: 150%;
  max-width: 450px;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  position: relative;
  bottom: 30px;
}

.slogan {
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 38px;
  color: #ad8330;
}

.welcome {
  font-family: "Cinzel", serif;
  font-size: 18px;
  font-weight: 500;
  color: #ad8330;
  text-align: center;
}

.bt1 {
  background-color: black;
  color: #ad8330;
  border: solid #ad8330;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  /* margin-top: 20px; */
  z-index: 10;
  position: relative;
  left: 300px;
  bottom: 80px;
  animation: slideInFromLeft 1s forwards, pulse 2s infinite;
  cursor: pointer;
  display: block;
  /* margin-left: auto;
  margin-right: auto; */
  font-family: "Cinzel", serif;
}

.bt1:hover {
  background-color: #ad8330;
  color: black;
}

.bb {
  background-color: #fff;
  padding: 20px;
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 40px;
  box-sizing: border-box;
  font-family: "Cinzel", serif;
}

.best {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  font-weight: bold;
  color: black;
  font-family: "Cinzel", serif;
  position: relative;
  bottom: 20px;
}

#row {
  position: relative;
  right: -60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  padding: 20px;
}

.card {
  width: 280px;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  padding: 20px;
  font-family: "Cinzel", serif;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
}

.card h5 {
  font-weight: bold;
  margin-top: 10px;
}

.card p {
  font-size: 14px;
  color: black;
  font-family: "Cinzel", serif;
}

.bt2 {
  background-color: #ad8330;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px;
  width: 150px;
  height: 40px;
  margin: 20px auto 0;
  display: block;
  animation: pulse 2s infinite;
  font-family: "Cinzel", serif;
}

.bt2:hover {
  color: #ad8330;
  background-color: white;
  border: #ad8330 solid 2px;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .home {
    flex-direction: column;
    align-items: center;
  }

  .left-column, .right-column {
    flex: 1 1 100%;
    text-align: center;
  }

  .bt1 {
    margin-top: 20px;
    position: static;
  }

  .right-column img {
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .slogan {
    font-size: 38px;
  }

  .welcome {
    font-size: 36px;
  }

  .right-column img {
  width: 200% !important;
  height: 450px;
  position: relative;
  top: -180px;
}

.bt1{
  width: 210px !important;
  height: 60px !important;
  font-size: 28px;
  position: relative;
  left: -10px;
  bottom: 90px;
}

.bt1:hover {
  background-color: #ad8330;
  color: black;
}

.best{
  font-size: 42px;
}

.bt2{
  width: 210px !important;
  height: 60px !important;
  font-size: 28px;
  position: relative;
  bottom: 20px;
}

#row {
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 50px;
}

.card {
  width: 100% !important;
  max-width: 550px;
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}

.card-title{
  font-size: 40px;
}

.card-text{
  font-size: 35px !important;
}
}

@media (max-width: 480px) {
  .home{
    position: relative;
    top: -20px;
  }
  .slogan {
    font-size: 30px;
  }

  .welcome {
    font-size: 20px;
    position: relative;
    top: 30px;
  }

  .right-column img {
    width: 100% !important;
    height: 450px;
    position: relative;
    top: -170px;
    left: -0px;
  }

  .bt1, .bt2 {
    width: 180px;
    font-size: 20px;
    height: 30px;
    font-family: "Cinzel", serif;
  }

  .bt1{
    position: relative;
    bottom: 150px !important;
    left: -0px !important;
  }

  .best{
    font-size: 35px;
  }

  #row {
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 0px;
}

  .card-title{
  font-size: 25px;
}

.card-text{
  font-size: 25px !important;
}

  .card img {
    border-radius: 10px;
    height: auto !important;
  }
}

</style>