<template>
  <div :style="{backgroundColor:$route.path=='#fffeb6'}">
    <NavbarComponents v-if="!loading" />
    <router-view  />
    <FooterComponent v-if="!loading" />
  </div>
</template>

<script>
import NavbarComponents from '../src/components/NavbarComponent.vue'
import FooterComponent from '../src/components/FooterComponent.vue'


export default {
  components: {
    NavbarComponents,
    FooterComponent,
  },
  data() {
  //   return {
  //     loading: false,
  //   }
  // },
  // mounted() {
  //   this.fetchData();
  // },
  // methods: {
  //   // fetchData() {
  //   //   this.loading = true;
  //   //   // make API call or perform some async operation
  //   //   setTimeout(() => {
  //   //     this.loading = false;
  //   //   }, 2000); // simulate a 2-second delay
  //   // }
  // }
}
}

</script>
<style>
div{
  height: 100hv;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
*{
  background-color: #fffeb6;
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
