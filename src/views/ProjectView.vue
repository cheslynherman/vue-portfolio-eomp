<template>
  <h3>Projects</h3>

  <div
    v-for="project in projects"
    :key="project.id"
    :project="project"
    class="d-flex justify-content-center m-3"
  >
    <div class="col-2">
      <div class="card" id="proCard">
        <img
          :src="project.image_url"
          class="card-img-top"
          :alt="project.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">
            {{ project.desc }}
          </p>
          <a :href="project.github" target="blank"><button>GitHub</button></a>
          <a :href="project.live_link" target="blank"><button>Live</button></a>
        </div>
      </div>
    </div>
  </div>

  <h3>Testimonials</h3>
  <div
    v-for="testimonial in testimonials"
    :key="testimonial.id"
    :testimonial="testimonial"
    class="display d-flex justify-content-center"
  >
    <div class="card m-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ testimonial.name }}</h5>
        <p class="card-text">
          {{ testimonial.text }}
        </p>
      </div>
      <img
        :src="testimonial.image_url"
        class="card-img-bottom"
        :alt="testimonial.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects"),
      this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
h3 {
  color: #3c2a21;
}

.card {
  border-radius: 20px !important;
  background-color: #ede4e0 !important;
  border: 2px solid #3c2a21;
  color: #3c2a21 !important;
}
img {
  border-radius: 20px;
}
.col-2 {
  width: 40%;
}

button {
  color: #3c2a21;
  background: #ede4e0;
  border: 2px solid #3c2a21;
  border-radius: 20px;
  width: 100px;
  padding: 5px;
  margin: 10px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
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
