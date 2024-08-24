
<template>
  <div class="about">

    <nav> 
    </nav>
    <div class="about-container">
      <div class="about-background">
        <p class="about-paragraph">
  <span>ABOUT US</span>
  <br><br>
  Welcome to Majestic Scent, a family-owned and operated fragrance company dedicated to delivering the finest aromas and the most luxurious scents. For over a decade, we've been handcrafting the highest quality fragrances using only natural, responsibly-sourced ingredients.
  Our passion for fragrance goes beyond just creating beautiful scents; it's about capturing the essence of nature's beauty and sharing it with the world. We believe that every scent has the power to transport you to a different time and place, evoking emotions and memories that last a lifetime.
  <br><br>
  At Majestic Scent, we understand that fragrances are personal. That's why we take a personalized approach to every product we create. From the moment you step into our store or browse our website, you'll be greeted with a warm and welcoming atmosphere. Our knowledgeable and friendly staff are always on hand to help you find the perfect scent that speaks to your soul.
  Our fragrances are not just for special occasions; they're for every day, for every mood, and for every moment.
</p>
      </div>
      <br><br>
      <h2 class="our-team-title">OUR TEAM</h2>

      <div class="our-team">
        <div class="team-member">
          <img src="https://nikilitha26.github.io/Boot-img/Image/IMG_8063.PNG" alt="Team Member 1">
          <div class="team-info">
            <h3>Nikilitha Kakaza</h3>
            <p>Founder & CEO</p>
            <p>Nikilitha is the CEO and web developer of Majestic Scent. With years of experience in web development, Nikilitha has established a reputation for creating visually appealing, user-friendly websites that effectively convey the essence of a brand.
              As a CEO, Nikilitha is deeply committed to ensuring that every aspect of the business meets the highest standards of excellence. This dedication extends to the company's online presence, where Nikilitha works tirelessly to ensure that the website accurately reflects the values and vision of Majestic Scent.</p>
          </div>
        </div>
        <div class="team-member">
          <img src="team-member-2.jpg" alt="Team Member 2">
          <div class="team-info">
            <h3>Daniel Umetor</h3>
            <p>Co-Founder & CMO</p>
            <p>Meet Daniel Umetor, the co-founder and CEO of Majestic Scent. With a background in finance and a passion for fragrance, Daniel brings a unique blend of skills to the table. As a CEO, Daniel is responsible for overseeing the overall direction of the company, ensuring that it stays true to its core values while striving for growth and success.
              Daniel is a firm believer in the power of fragrance to bring joy and positivity to people's lives.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>

.about {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
  height: 210vh;
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
}

.about-background {
  background-color: #6f5030; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
}
.about-background:hover {
  background-color: #fff; 
  transition: background-color 0.5s ease-in-out; 
}

.about-paragraph {
  font-size: 18px;
  color: #fff;
  padding: 20px;
  transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out; 
}

.about-paragraph:hover {
  transform: scale(1.1); 
  background-color: #fff; 
  color: #6f5030; 
  transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
}
.about-paragraph span {
    text-decoration: underline;
    text-underline-offset: 2px; 
    transition: transform 0.5s ease-in-out;
  }
  .about-paragraph:hover span {
  transform: scale(1.1);
  color: #6f5030; 
  transition: transform 0.5s ease-in-out; 
}



.our-team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}

.team-member {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  background-color: #6f5030;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.team-info {
  flex: 1;
}

.team-info h3 {
  margin-top: 0;
}
.our-team-title {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
  }

  .our-team-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: #333;
    border-radius: 10px;
  }
  @media only screen and (max-width: 300px) {
  .about {
    height: auto; 
    padding-top: 20px; 
  }
  .about-container {
    max-width: 90%; 
    padding: 10px; 
  }
  .about-background {
    padding: 10px; 
  }
  .about-paragraph {
    font-size: 14px; 
    padding: 10px;
  }
  .our-team {
    flex-direction: column; 
    align-items: center; 
  }
  .team-member {
    flex-direction: column; 
    align-items: center; 
    margin: 10px; 
    padding: 10px; 
  }
  .team-member img {
    width: 50px; 
    height: 50px;
  }
  .team-info {
    text-align: center; 
  }
  .our-team-title {
    font-size: 24px; 
    margin-bottom: 10px; 
  }
}

</style>

