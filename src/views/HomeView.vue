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

    <button class="bt1" @click="products">Explore More</button>

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
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
}

.left-column {
  flex-basis: 60%;
  padding: 20px;
  margin-top: 160px;
}

.right-column {
  flex-basis: 40%;
  padding: 20px;
  text-align: center;
  margin-top: 120px;
}

.right-column img {
  width: 100%; 
  height: 60%; 
  object-fit: cover;
  border-radius: 10px;
  margin-top: 50px;
}

.slogan{
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 38px;
  color: white;
}

.welcome{
  font-family: "Cinzel", serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
}

.bt1{
  background-color:  rgb(111, 66, 25);
  color: white;
  position: relative;
  bottom: 230px;
  left: 400px;
  border: none;
  border-radius: 15px;
  width: 150px;
  height: 40px;
}

div.home{
  height: auto;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.card {
  margin: 20px;
  padding: 20px;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
  display: inline-block;
  margin-right: 10px;
  margin-top: 30px;
}
.card:last-child {
  margin-right: 0; 
}

.card img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
}

.card h3 {
  font-weight: bold;
  margin-top: 10px;
}

.card p {
  font-size: 14px;
  color: black;
}

.best{
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  width: 103%;
  text-align: center;
  font-weight: bold;
  color: black;
  position: relative;
  bottom: 60px; 
}

#home-card{
  position: relative;
  right: 350px;
}

#row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  position: relative;
  bottom: 90px;
}
.bb {
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 140px; 
  height: 100%;
  margin-bottom: -140px;
}
#pef{
  display: inline-block;
  width: 33.33%;
  margin: 10px;
}

.bt2 {
  background-color: rgb(111, 66, 25);
  color: white;
  border: none;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  margin: 20px auto;
  display: block;
  position: relative;
  bottom: 120px;
}


@media only screen and (max-width: 300px) {
  .home {
    flex-direction: column;
    background-size: 700px 100%
  }
  
  .right-column img {
    width: 100%;
    height: auto;
    margin: 10px 0;
    position: relative;
    bottom: 150px;
  }
  
  .bt1 {
    order: 3;
    margin: 10px 0;
    padding: 10px;
    position: relative;
    bottom: 1450px;
    left: 80px;
  }
  .container {
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    right: 35px;
  }
  .bb {
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    height: cover;
    bottom:65px;
  }
  .best {
    width: 130%;
    padding: 20px;
    position: relative;
    top: 50px
  }
  #row {
    flex-direction: column;
    position: relative;
    top: 70px;
  }
  .card {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }
  .card img {
    width: 100%;
    height: auto;
  }
  .bt2{
    position: relative;
    top: 35px;
  }
}
</style>