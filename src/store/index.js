import { createStore } from "vuex";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    education: null,
    experience: null,
  },
  mutations: {
    setProjects: (state, value) => {
      state.projects = value;
    },
    setTestimonials: (state, value) => {
      state.testimonials = value;
    },
    setEducation: (state, value) => {
      state.education = value;
    },
    setExperience: (state, value) => {
      state.experience = value;
    },
  },
  actions: {
    async fetchProjects(context){
      try {
        let { projects } = await (
          await fetch("https://cheslynherman.github.io/data/vueProject.json")
        ).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }

    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (
          await fetch("https://cheslynherman.github.io/data/vueProject.json")
        ).json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }

    },
    async fetchEducation (context) {
      try {
        let {education} = await (
          await fetch("https://cheslynherman.github.io/data/vueProject.json")
        ).json();
        if (education) {
          context.commit("setEducation", education);
        } else {
          alert ("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },
    async fetchExperience (context) {
      try {
        let {experience} = await (
          await fetch("https://cheslynherman.github.io/data/vueProject.json")
        ).json();
        if (experience) {
          context.commit("setExperience", experience);
        } else {
          alert ("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    }
  },
});
