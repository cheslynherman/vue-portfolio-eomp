import { createStore } from "vuex";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
  },
  mutations: {
    setProjects: (state, value) => {
      state.projects = value;
    },
    setTestimonials: (state, value) => {
      state.testimonials = value;
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
  },
});
