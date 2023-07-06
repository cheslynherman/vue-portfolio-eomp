<template>
  <body>
    <h3 class="m-3">Resum&eacute;</h3>

    <div class="container-fluid mb-3">
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
              <p class="card__description">Duration: {{ educ.duration }}</p>
              <p>Qualification: {{ educ.qualification }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div><h3>Experience</h3></div>
        <div v-for="exp in experience" :key="exp.id" :exp="exp">
          <div class="card">
            <img :src="exp.image_url" :alt="exp.company" />
            <div class="card__content">
              <h3>{{ exp.company }}</h3>
              <br />
              <p class="card__description">Duration: {{ exp.duration }}</p>
              <p>Position: {{ exp.position }}</p>
              <p>Duties: {{ exp.duties }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skillSection container-fluid mt-3">
      <div>
        <h3>Soft Skills</h3>
      </div>
      <div class="skills m-auto">
        <label for="progress-bar" class="d-flex justify-content-center"
          >Leadership Skills</label
        >
        <div
          class="progress m-2"
          role="progressbar"
          aria-label="Animated striped example 20px high"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 85%"
          ></div>
        </div>
        <label for="progress-bar" class="d-flex justify-content-center"
          >Interpersonal Skills</label
        >
        <div
          class="progress m-2"
          role="progressbar"
          aria-label="Animated striped example 20px high"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 70%"
          ></div>
        </div>
        <label for="progress-bar" class="d-flex justify-content-center"
          >Analytical Skills</label
        >
        <div
          class="progress m-2"
          role="progressbar"
          aria-label="Animated striped example 20px high"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 80%"
          ></div>
        </div>
        <label for="progress-bar" class="d-flex justify-content-center"
          >Communication Skills</label
        >
        <div
          class="progress m-2"
          role="progressbar"
          aria-label="Animated striped example 20px high"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 91%"
          ></div>
        </div>
        <label for="progress-bar" class="d-flex justify-content-center"
          >Organizational Skills</label
        >
        <div
          class="progress m-2"
          role="progressbar"
          aria-label="Animated striped example 20px high"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            style="width: 69%"
          ></div>
        </div>
      </div>
      <div class="mt-3">
        <div><h3>Technical Skils</h3></div>
        <div>
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/KYk7cQ03/icons8-css-150.png"
            alt="CSS"
          />
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/prxKZvRK/icons8-github-150-2.png"
            alt="GitHub"
          />
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/fbGcVXP2/icons8-bootstrap-a-free-and-open-source-css-framework-96.png"
            alt="Bootstrap"
          />
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/vB5WfTFQ/icons8-javascript-128.png"
            alt="JavaScript"
          />
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/fRbjpMXK/icons8-vue-js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-appli.png"
            alt="Vue"
          />
          <img
            class="skill-imgs"
            src="https://i.postimg.cc/Tw93zLZN/icons8-html-150-2.png"
            alt="HTML"
          />
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
body {
  font-family: "Chakra Petch", sans-serif;
  color: #3C2A21;
}
.skillsSection {
  margin-bottom: 20px;
  margin-top: 20px !important;
}
.skills {
  width: 90%;
}

.skill-imgs {
  height: 150px;
  margin: 20px;
}
.progress-bar {
    background-color: #3C2A21;
    color: #3C2A21 !important;
}
</style>
