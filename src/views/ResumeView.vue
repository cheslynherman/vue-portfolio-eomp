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
      <a
        href="https://www.linkedin.com/in/cheslyn-herman-2449b9275/"
        target="blank"
        ><button>LinkedIn</button></a
      >
      <a href="https://github.com/cheslynherman" target="blank"
        ><button>GitHub</button></a
      >
    </div>

    <div class="educ-exp container d-flex justify-content-center">
      <div class="mx-auto">
        <div><h3 class="text-center">Education</h3></div>
        <div
          v-for="educ in education"
          :key="educ.id"
          :educ="educ"
          class="education"
        >
          <div class="card m-4 mx-auto">
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
      <div class="mx-auto">
        <div><h3>Experience</h3></div>
        <div
          v-for="exp in experience"
          :key="exp.id"
          :exp="exp"
          class="experience"
        >
          <div class="card m-4 mx-auto">
            <img :src="exp.image_url" :alt="exp.company" />
            <div class="card__content">
              <h3>{{ exp.company }}</h3>
              <br />
              <p class="card__description">Duration: {{ exp.duration }}</p>
              <p class="card_text">Position: {{ exp.position }}</p>
              <p class="card_text">Duties: {{ exp.duties }}</p>
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
      <div class="mt-3 container-fluid">
        <div><h3>Technical Skils</h3></div>
        <div>
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/KYk7cQ03/icons8-css-150.png"
            alt="CSS"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/prxKZvRK/icons8-github-150-2.png"
            alt="GitHub"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/fbGcVXP2/icons8-bootstrap-a-free-and-open-source-css-framework-96.png"
            alt="Bootstrap"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/vB5WfTFQ/icons8-javascript-128.png"
            alt="JavaScript"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/fRbjpMXK/icons8-vue-js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-appli.png"
            alt="Vue"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/Tw93zLZN/icons8-html-150-2.png"
            alt="HTML"
          />
          <img
            class="skill-imgs img-fluid"
            src="https://i.postimg.cc/bw4VGTVn/icons8-figma-150.png"
            alt="Figma"
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
  color: #3c2a21;
}
button {
  color: #3c2a21;
  border: 2px solid #3c2a21;
  background: #ede4e0;
  padding: 5px 8px 5px 8px;
  border-radius: 15px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin: 15px;
}
button:hover {
  color: #ede4e0;
  background: #3c2a21;
  box-shadow: 0 0 30px 5px #3c2a21;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.card {
  width: 40vh;
  height: 40vh;
  background-color: #3c2a21 !important;
  color: #ede4e0 !important;
  border-radius: 20px !important;
  border: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card img {
  height: 50vh;
  border-radius: 20px !important;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}
.card__content {
  position: absolute;
  top: 0;
  left: 0;
  align-items: center !important;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px !important;
  background-color: #3c2a21;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover .card__content {
  transform: rotateX(0deg);
}
.card:hover img {
  scale: 0;
}
.card__description {
  font-size: 14px;
}

.card_text {
  font-size: 10px;
}

.skillsSection {
  margin-bottom: 20px;
  margin-top: 20px !important;
}
.skills {
  width: 90%;
}

.skill-imgs {
  height: 100px;
  margin: 20px;
}
.progress-bar {
  background-color: #3c2a21;
  color: #3c2a21 !important;
}

@media only screen and (max-width: 700px) {
  .educ-exp {
    flex-direction: column !important;
  }
  .education, .experience {
   width: 90%;
  }
}
</style>
