<template>
  <main>
    <hero/>
    <services/>
    <results/>
    <carousel/>
    <!-- <testimonals-carousel/> -->
    <partners/>
    <forms/>
    <!-- <articles/> -->
    <!-- <faq/> -->
  </main>
</template>

<script>
import Hero from "./hero/Hero.vue";
import Services from "./services/Services.vue";
import Results from "./results/Results.vue";
import Carousel from "./carousel/Carousel.vue"
// import TestimonalsCarousel from "./testimonalsCarousel/TestimonalsCarousel.vue"
import Partners from "./partners/Partners.vue"
import Forms from "./forms/Forms.vue"
// import Articles from './articles/Articles.vue';
// import Faq from './faq/FAQ.vue'

export default {
  components: {
    Hero,
    Services,
    Results,
    Carousel,
    Partners,
    Forms,
    
  },
};
</script>

<style lang="scss" scoped></style>
