<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <a class="navbar-brand" href="#">

      

        <img id="logo" src="https://nikilitha26.github.io/nodejsImages/Majestic-removebg-preview.png" alt="Logo" width="120" height="80">

      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/about' }">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/products' }">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/admin' }">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/contact' }">
            <router-link class="nav-link" to="/contact">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
   
   <script>
   export default {
     computed: {
       currentRoute() {
         return this.$route.name;
       }
     }
   }
</script>
   
<style scoped>
  .navbar {
  position: fixed; 
  background: black;
  /* right: 50px; */
  color: #ad8330;
  /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%); */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  box-shadow: none;
  width: 1500px;
  z-index: 1000
}
.navbar-brand {
    margin-right: 790px; 
 }

 .nav-link {
    font-size: 18px;
    font-weight: bold;
    color: #ad8330;
    position: relative;
    bottom: 20px;
    }
.nav-item {
   margin-right: 20px; 
   margin-top: 20px; 
 }
 .nav-item.active .nav-link {
  background-color: black;
  color: #fffeb6;
  font-size: 20px;            
  /* text-decoration: underline !important;  */
  text-underline-offset: 4px; 
}

.nav-item.active .nav-link::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%; 
  height: 2px;
  background-color: #fffeb6;
  border-radius: 2px;
}

.nav-link:hover{
  background-color: black; 
  color: #fffeb6; 
  width: 40%;
  font-size: 20px; 
}
#logo{
  position: relative;
  bottom: 10px;
  right: 60px;
}

@media (max-width: 300px) {
  .navbar-toggler {
  margin-left: 0;
  margin-top: 10px;
  position: fixed;
}
  .navbar-nav {
    flex-direction: column; 
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(175,126,46,1) 0%, rgba(255,255,255,1) 100%);
    align-items: center;
    width: 300px !important;
  }
  .navbar-brand {
    margin-right: 0;
  }
  .nav-item {
    width: 100%;
    margin-right: 0;
    margin-top: 10px;
  }
  .nav-link {
    text-align: center;
  }
  .navbar-toggler {
    margin-left: 0;
    margin-top: 10px;
  }
  .container {
    padding: 0;
  }

}

</style>