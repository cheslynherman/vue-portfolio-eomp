<template>
  <NavBarComp />
  <router-view />
  <FooterComp/>
</template>

<script>
import NavBarComp from "@/components/NavBar-comp.vue";
import FooterComp from "@/components/Footer-comp.vue";
export default {
  components: {
    NavBarComp,
    FooterComp
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&display=swap");
#app {
  font-family: 'Chakra Petch', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #ede4e0;
}

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
