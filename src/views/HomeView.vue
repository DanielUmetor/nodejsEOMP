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
      <img src="https://nikilitha26.github.io/nodejsImages/image0_0-removebg-preview.png" alt="Image">
    </div>

    <button class="bt1" @click="products">Explore More</button>

    <h2 class="best">BEST SELLERS:</h2>

<div class="row">
  <div class="col-md-6">
    <div class="card">
      <h3>Women</h3>
      <img src="https://via.placeholder.com/150" alt="Female Perfume">
      <h3>Femme Fatale</h3>
      <p>A seductive and alluring scent for the modern woman</p>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <h3>Man</h3>
      <img src="https://via.placeholder.com/150" alt="Male Perfume">
      <h3>King's Essence</h3>
      <p>A bold and confident scent for the modern man</p>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  methods: {
    products() {
      window.location.href = '/products';
    }
  }
}
  
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fffeb6;
  height: 100vh;
}

.left-column {
  flex-basis: 60%;
  padding: 20px;
  margin-top: 90px;
}

.right-column {
  flex-basis: 40%;
  padding: 20px;
  text-align: center;
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
}
.welcome{
  font-family: "Cinzel", serif;
  font-size: 18px;
  font-weight: 500;
}
.bt1{
  background-color: black;
  color: #fffeb6;
  position: relative;
  bottom: 230px;
  left: 400px;
  /* padding: 5px; */
  border: none;
  border-radius: 15px;
  width: 150px;
  height: 40px;
}
div.home{
  height: auto;
}

.card {
  margin: 20px;
  padding: 20px;
  border: none;
  background: none;
  background-color: transparent;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 50%; /* Add this line */
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
  position: relative;
  bottom: 90px;
  left: 270px;
  font-weight: bold;
  color: black;
}

</style>
