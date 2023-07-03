<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img
          src="https://i.postimg.cc/HLY5w0rN/Frame-1.png"
          alt="Logo"
          class="navImage"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="navButtons">Home</router-link>
          <router-link to="/project" class="navButtons"
            >Projects & Testimonials</router-link
          >
          <router-link to="/about" class="navButtons"
            >About</router-link
          >
          <router-link to="/resume" class="navButtons"
            >Resume</router-link
          >
          <router-link to="/contact" class="navButtons"
            >Contact</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #3c2a21 !important;
}
.navImage {
  height: 60px;
  width: 60px;
}
.navbar-nav {
  margin-left: auto;
}
.navButtons {
  margin-left: 20px;
  color: #3c2a21;
  background: #ede4e0;
  padding: 5px 8px 5px 8px;
  border-radius: 15px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.navButtons:hover {
  color: #ede4e0;
  background: #3c2a21;
  box-shadow: 0 0 30px 5px #ede4e0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

nav a.router-link-exact-active {
  color: #796c67;
}

a {
  text-decoration: none;
}
</style>
