<template>
  <section id="services" class="services container mb-20">
    <h2 class="services__title text-center fz-40 fw-600 mb-3">
      We specialize in the development of IT products using cutting edge technologies 
    </h2>
    <ul class="services__list flex justify-between flex-wrap">
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <web-design-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">UX/UI Design</h3>
          <p class="services__text fz-16">
            UX design is all about identifying and solving user problems; UI design is all about creating intuitive, aesthetically-pleasing, interactive guiding, and responsive experiences for users.
          </p>
        </div>
      </li>
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <seo-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">SAAS development</h3>
          <p class="services__text fz-16">
            SaaS, is a way of delivering applications over the internet as a service rather than via a standalone application
          </p>
        </div>
      </li>
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <mobile-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">
            Mobile Development
          </h3>
          <p class="services__text fz-16">
            Mobile application development is the process of creating software applications that run on a mobile device
          </p>
        </div>
      </li>
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <consulting-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">
            IT Consulting Service
          </h3>
          <p class="services__text fz-16">
            IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies. 
          </p>
        </div>
      </li>
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <web-dev-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">
            Web Development
          </h3>
          <p class="services__text fz-16">
            Web application development is the complex process of designing, building, testing, and deploying a web-based app.
          </p>
        </div>
      </li>
      <li class="services__item flex align-center br-8 bs p-5 mb-2">
        <software-icon />
        <div class="services__texts">
          <h3 class="services__item__title fw-600 fz-32 mb-05">
            E-commerce development
          </h3>
          <p class="services__text fz-16">
            Ecommerce website development is the process of developing the technical aspects of your e-commerce website. How it functions, accepts payments, behaves in response to a user action, and appears aesthetically.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import WebDesignIcon from "../../../svgs/WebDesignIcon.vue";
import MobileIcon from "../../../svgs/MobileIcon.vue";
import SeoIcon from "../../../svgs/SeoIcon.vue";
import ConsultingIcon from "../../../svgs/ConsultingIcon.vue";
import WebDevIcon from "../../../svgs/WebDevIcon.vue";
import SoftwareIcon from "../../../svgs/SowtwareIcon.vue";

export default {
  name: "Services",
  components: {
    WebDesignIcon,
    MobileIcon,
    SeoIcon,
    ConsultingIcon,
    WebDevIcon,
    SoftwareIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";
.services {
  @media screen and(max-width: 576px) {
    margin-bottom: 100px;
  }
  &__title {
    @media screen and(max-width: 1720px){
      font-size: 32px;
    }
    @media screen and(max-width: 576px){
      font-size: 16px;
    }
  }
  &__item {
    width: 695px;
    background-color: $main_gray;
    transition: 0.3s;
    &:hover {
      color: $main_gray;
      background-color: $main_white;
    }
    @media screen and(max-width: 1720px){
      width: 555px;
      padding: 38px;
    }
    @media screen and(max-width: 1200px) {
      width: 520px;
    }
    @media screen and(max-width: 1080px) {
      width: 500px;
    }
    @media screen and(max-width: 1040px) {
      width: 100%;
    }
    @media screen and(max-width: 576px) {
      padding: 10px;
    }
  }
  &__item__title {
    @media screen and(max-width: 576px){
      font-size: 14px;
      width: 100%;
    }
  }
  &__text {
    width: 290px;
    @media screen and(max-width: 576px){
      font-size: 10px;
      width: 100%;
      
    }
  }
}
</style>
