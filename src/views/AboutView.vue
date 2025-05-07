<template>
  <div class="about">
    <nav>
      <!-- Navigation content if any -->
    </nav>

    <div class="about-container">
      <span class="about-us">ABOUT US</span>

      <!-- Sparkle wrapper holds the paragraph and the four corner sparkles -->
      <div class="sparkle-wrapper">
        <p class="about-paragraph">
          <br><br>
          Welcome to Majestic Scent, a family-owned and operated fragrance company dedicated to delivering the finest aromas and the most luxurious scents. For over a decade, we've been handcrafting the highest quality fragrances using only natural, responsibly-sourced ingredients.
          Our passion for fragrance goes beyond just creating beautiful scents; it's about capturing the essence of nature's beauty and sharing it with the world. We believe that every scent has the power to transport you to a different time and place, evoking emotions and memories that last a lifetime.
          <br><br>
          At Majestic Scent, we understand that fragrances are personal. That's why we take a personalized approach to every product we create. From the moment you step into our store or browse our website, you'll be greeted with a warm and welcoming atmosphere. Our knowledgeable and friendly staff are always on hand to help you find the perfect scent that speaks to your soul.
          Our fragrances are not just for special occasions; they're for every day, for every mood, and for every moment.
        </p>
        <div class="sparkle sparkle-tl"></div>
        <div class="sparkle sparkle-tr"></div>
        <div class="sparkle sparkle-bl"></div>
        <div class="sparkle sparkle-br"></div>
      </div>

      <br><br>
      <h2 class="our-team-title">OUR TEAM</h2>

      <div class="our-team">
        <div class="team-member">
          <img src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Team Member 1">
          <div class="team-info">
            <h3 class="h3">Nikilitha Kakaza</h3>
            <p class="founder">Founder & CEO</p>
            <p class="infoo">Nikilitha is the CEO and web developer of Majestic Scent. With years of experience in web development, Nikilitha has established a reputation for creating visually appealing, user-friendly websites that effectively convey the essence of a brand.
              As a CEO, Nikilitha is deeply committed to ensuring that every aspect of the business meets the highest standards of excellence. This dedication extends to the company's online presence, where Nikilitha works tirelessly to ensure that the website accurately reflects the values and vision of Majestic Scent.</p>
          </div>
        </div>

        <div class="team-member">
          <img src="https://danielumetor.github.io/allimages/20240422_092918.jpg" alt="Team Member 2">
          <div class="team-info">
            <h3 class="h3">Daniel Umetor</h3>
            <p class="founder">Co-Founder & CMO</p>
            <p class="infoo">Meet Daniel Umetor, the co-founder and CEO of Majestic Scent. With a background in finance and a passion for fragrance, Daniel brings a unique blend of skills to the table. As a CEO, Daniel is responsible for overseeing the overall direction of the company, ensuring that it stays true to its core values while striving for growth and success.
              Daniel is a firm believer in the power of fragrance to bring joy and positivity to people's lives.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background: black;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  bottom: 50px;
}

.about-us {
  color: #ad8330;
  font-size: 36px;
  font-family: "Cinzel", serif;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 4px;
  display: block;
  margin-bottom: 10px;
}

/* wrapper for paragraph + sparkles */
.sparkle-wrapper {
  position: relative;
  display: inline-block;
}

.about-paragraph {
  font-size: 18px;
  color: #ad8330;
  padding: 20px;
  font-family: "Cinzel", serif;
  line-height: 1.8;
  text-align: justify;
  background: transparent;
  position: relative;
}

/* base sparkle style */
.sparkle {
  filter:
    brightness(0) invert(1)
    sepia(1) saturate(6) hue-rotate(15deg) brightness(1.2) contrast(0.9);
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/616/616494.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: sparkleAnim 2s infinite ease-in-out alternate;
  opacity: 0.9;
  filter: drop-shadow(0 0 5px #fff7cc);
  pointer-events: none;
}

/* top-left */
.sparkle-tl {
  top: -20px;
  left: -40px;
}

/* top-right */
.sparkle-tr {
  top: -20px;
  right: -40px;
  animation-delay: 0.5s;
}

/* bottom-left */
.sparkle-bl {
  bottom: 40px;
  left: -50px;
  animation-delay: 1s;
}

/* bottom-right */
.sparkle-br {
  bottom: 40px;
  right: -50px;
  animation-delay: 1.5s;
}

@keyframes sparkleAnim {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(15deg);
  }
  100% {
    transform: scale(1) rotate(-15deg);
  }
}

.our-team-title {
  font-size: 36px;
  font-weight: bold;
  color: #ad8330;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  font-family: "Cinzel", serif;
}

.our-team-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background-color: #ad8330;
  border-radius: 10px;
}

.our-team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  font-family: "Cinzel", serif;
}

.team-member {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  background-color: #000;
  color: #ad8330;
  padding: 20px;
  border: 2px solid #ad8330;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(173, 131, 48, 0.5);
  font-family: "Cinzel", serif;
}

.team-member:hover {
  background-color: #1a1a1a;
  box-shadow: 0 0 15px rgba(173, 131, 48, 0.8);
}

.team-member img {
  width: 100px;
  height: 100px;
  border: 2px solid #ad8330;
  border-radius: 50%;
  margin-right: 20px;
}

.team-info {
  flex: 1;
  color: #ad8330;
  text-align: justify;
  font-family: "Cinzel", serif;
}

.team-info h3 {
  margin-top: 0;
  color: #ad8330;
  font-family: "Cinzel", serif;
}

@media (max-width: 768px) {
  .about {
    padding-top: 160px;
    padding-bottom: 20px; 
  }

  .about-container {
    max-width: 90%;
    padding: 10px;
  }

  .about-us {
    font-size: 48px !important;
  }

  .about-paragraph {
    position: relative;
    bottom: 20px !important;
    font-size: 35px;
    padding: 10px;
  }

  /* bottom-right */
.sparkle-br {
  bottom: 20px;
  right: -10px;
  animation-delay: 1.5s;
}

  .our-team {
    flex-direction: column;
    align-items: center;
  }

  .h3{
    position: relative;
    top: 10px;
    font-size: 42px !important;
    font-weight: 900;
  }

  .founder{
    font-size: 38px !important;
    font-weight: 550;
  }
  .infoo{
    font-size: 30px !important;
    text-align: justify;
  }

  .our-team-title{
    font-size: 48px !important;
  }

  .team-member {
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
  }

  .team-member img {
    width: 200px !important;
    height: 200px !important;
  }

  .team-info {
    text-align: justify;
  }

  .our-team-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .about {
    margin-top: 40px !important;
    padding-bottom: 20px; 
  }

  .about-container {
    max-width: 90%;
    padding: 10px;
  }

  .about-us {
    font-size: 22px;
    margin-bottom: 5px;
  }

  .about-paragraph {
    font-size: 20px;
    padding: 12px;
  }

  /* top-left */
.sparkle-tl {
  top: 30px;
  left: -30px;
}

/* top-right */
.sparkle-tr {
  top: 30px;
  right: -20px;
  animation-delay: 0.5s;
}

/* bottom-left */
.sparkle-bl {
  bottom: 20px;
  left: -30px;
  animation-delay: 1s;
}

/* bottom-right */
.sparkle-br {
  bottom: 20px;
  right: -20px;
  animation-delay: 1.5s;
}

  .our-team {
    flex-direction: column;
    align-items: center;
  }

  .our-team-title{
    font-size: 28px !important;
  }

  .team-member {
    flex-direction: column;
    align-items: center;
    padding: 8px;
    margin: 8px;
  }

  .h3{
    position: relative;
    top: 10px;
    font-size: 26px !important;
    font-weight: 900;
  }

  .founder{
    font-size: 26px !important;
    font-weight: 550;
  }
  .infoo{
    font-size: 20px !important;
    text-align: justify;
  }

  .team-member img {
    width: 40px;
    height: 40px;
  }

  .team-info {
    text-align: center;
    padding: 0 10px;
  }

  .our-team-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
}

</style>
