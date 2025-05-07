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
  background: black;
  color: #ad8330;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-collapse{
  position: relative;
  left: 700px;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Logo */
.navbar-brand {
  margin: 0;
}

#logo {
  width: 120px;
  height: auto;
}

/* Toggler icon gold */
.navbar-toggler {
  border: 1px solid #ad8330;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ad8330' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Nav items */
.nav-item {
  margin-right: 20px;
  margin-top: 10px;
}

.nav-link {
  font-size: 18px;
  font-weight: bold;
  color: #ad8330;
}
.nav-link:hover {
  /* color: #fffeb6;  */
  background-color: transparent; 
  /* width: 40%;
  font-size: 20px; */
}

.nav-item.active .nav-link {
  color: #fffeb6;
  font-size: 20px;
}

.nav-item.active .nav-link::after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 40%;
  height: 2px;
  background-color: #fffeb6;
  border-radius: 1px;
  margin-top: 4px;
}


/* Responsive */
@media (max-width: 768px) {

  .navbar-nav {
    background: black;
    padding: 1rem 0;
  }

  .navbar-collapse {
    position: relative;
    left: 0px !important;
    margin-top: 10px;
  }

  .nav-link {
    text-align: center;
  }
}



</style>