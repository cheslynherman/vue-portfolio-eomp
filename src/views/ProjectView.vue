<template>
  <h3>Projects</h3>
  <div class="main">
    <div v-if="projects" class="container fluid">
      <ProjectCardComp
        v-for="project of projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <div v-else>Sorry bro</div>
  </div>

  <h3>Testimonials</h3>
  <div>
    <div v-if="testimonials" class="container fluid">
      <TestimonialsCardComp
        v-for="testimonial of testimonials"
        :key="testimonial.id"
        :testimonial="testimonial"
      />
    </div>
    <div v-else>Sorry bro</div>
  </div>
</template>

<script>
import ProjectCardComp from "@/components/ProjectCard-comp.vue";
import TestimonialsCardComp from "@/components/TestimonialsCard-comp.vue";
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    testimonials () {
        return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch("getProjects"),
    this.$store.dispatch("getTestimonials");
  },
  components: { ProjectCardComp, TestimonialsCardComp },
};
</script>

<style scoped>
.main {
   display: grid !important;
   grid-template-columns: auto auto auto;
}
</style>