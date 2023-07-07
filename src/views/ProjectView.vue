<template>
  <h3 class="m-3">Projects</h3>

  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div v-for="project in projects" :key="project.id" :project="project">
        <div
          class="carousel-item p-3"
          :class="{ active: projects.indexOf(project) === 0 }"
        >
          <div>
            <div class="align-items-center my-auto">
              <img
                :src="project.image_url"
                class="projectImgs m-3"
                :alt="project.title"
              />
            </div>
            <div class="text-div">
              <h5>{{ project.title }}</h5>
              <p>{{ project.desc }}</p>
              <a :href="project.github" class="proButtons" target="blank"
                >Github</a
              >
              <a :href="project.live_link" class="proButtons" target="blank"
                >Live Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <h3 class="m-3">Testimonials</h3>

  <div v-if="testimonials" class="container">
    <div
      v-for="testimonial of testimonials"
      :key="testimonial.id"
      class="box m-3"
    >
      <div class="name">
        <h3>{{ testimonial.name }}</h3>
      </div>
      <div class="text">
        <p>{{ testimonial.text }}</p>
      </div>
      <div>
        <img
          :src="testimonial.image_url"
          :alt="testimonial.name"
          class="imgs img-fluid"
        />
      </div>
    </div>
  </div>
  <div v-else>You Got This</div>
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
.m-3 {
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

.projectImgs {
  width: 35%;
}
/* .text-div {
  width: 50%;
} */
.col-2 {
  width: 40%;
}
a {
  text-decoration: none;
}
.proButtons {
  color: #3c2a21;
  background: #ede4e0;
  border: 2px solid #3c2a21;
  border-radius: 20px;
  padding: 8px;
  margin: 10px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.proButtons:hover {
  color: #ede4e0;
  background: #3c2a21;
  box-shadow: 0 0 30px 5px #3c2a21;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.carousel {
  margin: 20px;
}
.carousel-inner {
  color: #3c2a21;
}
.carousel-control-next-icon {
  filter: invert(100%);
}

.carousel-control-prev-icon {
  filter: invert(100%);
}

.container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.imgs {
  height: 40vh;
}

.box {
  height: 70vh;
  border: 2px solid #3c2a21;
  margin: 20px !important;
  border-radius: 20px;
  color: #3c2a21;
  padding: 20px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.box:hover {
  color: #ede4e0;
  background: #3c2a21;
  box-shadow: 0 0 30px 5px #3c2a21;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media screen and (max-width: 700px){
  .imgs {
    height: 55vh !important;
  }
  .box {
    height: 90vh;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 300px) {
  .imgs {
    height: 38vh !important;
  }
}
</style>
