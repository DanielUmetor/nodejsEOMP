<template>
    <nav class="navbar navbar-expand-lg navbar-light">
       <div class="container">
         <a class="navbar-brand" href="../views/HomeView.vue">
           <img id="logo" src="" alt="Logo" width="190" height="190">
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">
             <li class="nav-item" :class="{ active: $route.path === '/' }">
               <RouterLink class="nav-link" to="/">Home</RouterLink>
             </li>
             <li class="nav-item" :class="{ active: $route.path === '/about' }">
               <RouterLink class="nav-link" to="/about">About</RouterLink>
             </li>
             <li class="nav-item" :class="{ active: $route.path === '/products' }">
               <RouterLink class="nav-link" to="/products">Products</RouterLink>
             </li>
             <li class="nav-item" :class="{ active: $route.path === '/admin' }">
               <RouterLink class="nav-link" to="/admin">Admin</RouterLink>
             </li>
             <li class="nav-item" :class="{ active: $route.path === '/contact' }">
               <RouterLink class="nav-link" to="/contact">Contacts</RouterLink>
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
/* .navbar {
  position: absolute;
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
} */
.navbar-brand {
    margin-right: 800px; 
 }

 .nav-link {
    font-size: 18px;
    font-weight: bold;
    color: black;
    }
.nav-item {
   margin-right: 20px; 
   margin-top: 20px; 
 }
.nav-item.active .nav-link {
  background-color: black; 
  color: #fffeb6; 
}
.nav-link:hover {
  background-color: black; 
  color: #fffeb6; 
}

</style>