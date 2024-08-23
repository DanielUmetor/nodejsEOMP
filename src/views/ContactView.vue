<template>
    <div class="contact">
      <div class="columns">
        <div class="icons-column">
          <i class="fas fa-phone"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-map-marker-alt"></i>
          <i class="fas fa-clock"></i>
          <i class="fas fa-question-circle"></i>
        </div>
        <div class="form-column">
          <h2>Get in Touch</h2>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea><br><br>
            <input type="submit" value="Send">
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style>
  .contact{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
    height: 210vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px; 
  }
  
  .columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
  
  .icons-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .icons-column i {
    font-size: 24px;
    margin: 10px;
    color: #fff;
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
    color: #fff;
    margin-bottom: 10px;
  }
  
  .form-column input, .form-column textarea {
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    width: 100%;
  }
  
  .form-column input[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .form-column input[type="submit"]:hover {
    background-color: #3e8e41;
  }
  </style>