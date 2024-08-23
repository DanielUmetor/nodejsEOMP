
<template>
  <div class="about">
    <div class="about-container">
      <p class="para">Welcome to Majestic Scent, a family-owned and operated fragrance company dedicated to delivering the finest aromas and the most luxurious scents. For over a decade, we've been handcrafting the highest quality fragrances using only natural, responsibly-sourced ingredients.
Our passion for fragrance goes beyond just creating beautiful scents; it's about capturing the essence of nature's beauty and sharing it with the world. We believe that every scent has the power to transport you to a different time and place, evoking emotions and memories that last a lifetime.
<br><br>
At Majestic Scent, we understand that fragrances are personal. That's why we take a personalized approach to every product we create. From the moment you step into our store or browse our website, you'll be greeted with a warm and welcoming atmosphere. Our knowledgeable and friendly staff are always on hand to help you find the perfect scent that speaks to your soul.
Our fragrances are not just for special occasions; they're for every day, for every mood, and for every moment.
</p>
    </div>
  </div>
</template>

<style>
.about{
  position: relative; 
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
}

.about::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://nikilitha26.github.io/nodejsImages/2_bottles-removebg-preview.png);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px); 
}

.about-container{
  position: relative;
  z-index: 1;
  background-color: #796550; 
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: justify;
  color: #fff; 
  position: relative;
  margin-top: 90px;
}

.about-container p{
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

</style>
