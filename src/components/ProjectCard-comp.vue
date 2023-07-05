<template>
  <div class="display">
    <div class="card">
      <img :src="project.image_url" class="card-img-top img-fluid" :alt="project.title" />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.desc }}
        </p>
        <a :href="project.github"><button>GitHub</button></a>
        <a :href="project.live_link"><button>Live Link</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>


.card {
  border-radius: 20px !important;
  background: #ede4e0;
  color: #3c2a21;
  border: 2px solid #3c2a21;
  width: 50%;
}
.card-img-top {
  border-radius: 20px !important;
}


button {
  color: #3c2a21;
  border: 2px solid #3c2a21;
  border-radius: 20px;
  background: #ede4e0;
  padding: 5px 8px 5px 8px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin: 20px;
}
button:hover {
    color: #ede4e0;
  background: #3c2a21;
  box-shadow: 0 0 30px 5px #3c2a21;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
