<template>
  <body>
    <h3 class="m-3">Resum&eacute;</h3>

    <div class="container-fluid">
      <h5>Personal Information</h5>

      <p>Date of Birth: 27 April 2000</p>
      <p>Gender: Male</p>
      <p>Location: Cape Town</p>
      <p>Email: cheslynherman1169@gmail.com</p>
      <p>Languages: English and Afrikaans</p>
      <p>Willing to Relocate: Yes</p>
    </div>

    <div class="container fluid d-flex justify-content-center">
      <div class="col-4">
        <div><h3>Education</h3></div>
        <div v-for="educ in education" :key="educ.id" :educ="educ">
          <div class="card">
            <img :src="educ.image_url" :alt="educ.institution" />
            <div class="card__content">
              <h3>{{ educ.institution }}</h3>
              <br />
              <p class="card__description">
               Duration: {{ educ.duration }}
              </p>
              <p>
                Qualification: {{ educ.qualification }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div><h3>Experience</h3></div>
        <div v-for="exp in experience" :key="exp.id" :exp="exp">
          <div class="card">
            <img
              :src="exp.image_url"
              :alt="exp.company"
            />
            <div class="card__content">
              <h3>{{ exp.company }}</h3>
              <br />
              <p class="card__description">
                Duration: {{ exp.duration }}
              </p>
              <p>
                Position: {{ exp.position }}
              </p>
              <p>
                Duties: {{ exp.duties }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    experience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation"),
      this.$store.dispatch("fetchExperience");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
