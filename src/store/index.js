import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    testimonials: null,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials
    },
  },
  actions: {
    getProjects: async (context) => {
      fetch ("https://cheslynherman.github.io/data/projects.json")
      .then ((res) => res.json())
      .then ((projects) => context.commit("setProjects", projects))
    },
    getTestimonials: async (context) => {
      fetch ("https://cheslynherman.github.io/data/testimonials.json")
      .then ((res) => res.json())
      .then ((testimonials) => context.commit("setTestimonials", testimonials))
    },
  },
})
