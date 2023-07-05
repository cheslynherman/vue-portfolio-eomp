<template>
  <div>
    <div class="card" style="width: 18rem">
     
      <div class="card-body">
        <h5 class="card-title">{{ testimonial.name }}</h5>
        <p class="card-text">
            {{ testimonial.text }}
        </p>
      </div>
       <img :src="testimonial.image_url" class="card-img-bottom" :alt="testimonial.name" />
    </div>
  </div>
</template>

<script>
export default {
    props: ["testimonial"],
};
</script>

<style scoped>
.card {
    border-radius: 20px !important;
  background: #ede4e0;
  color: #3c2a21;
  border: 2px solid #3c2a21;
}

.card-img-bottom {
    border-radius: 20px !important;
}
</style>