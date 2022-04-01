<template>
  <section class="partners mb-15 container" id="portfolio">
    <h4 class="partners__title text-center fz-40 fw-600 mb-05">Partners</h4>
    <p class="partners__subtitle text-center fz-16 fw-300 lh-24 w-25 m-auto">
      For your very specific industry, we have highly-tailored IT solutions.
    </p>
    <ul
      class="partners__carousel partners__carousel--top flex flex-wrap justify-between mt-3"
    >
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
      <li
        class="partners__item w-22 mb-3 br-8 p-5 flex justify-center align-center"
      >
        <partner-mohir-dev />
      </li>
    </ul>
  </section>
</template>
b
<script>
import PartnerMohirDev from "../../../svgs/PartnerMohirDev.vue";
export default {
  components: {
    PartnerMohirDev,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";
.partners {
  @media screen and(max-width: 576px) {
      margin-bottom: 80px;
  }
  &__subtitle {
    @media screen and(max-width: 768px) {
      width: 100%;
      line-height: 16px;
    }
  }
  &__carousel {
    @media screen and(max-width: 768px) {
      display: block;
    }
    @media screen and(max-width: 576px) {
      margin-top: 15px;
    }
  }
  &__item {
    background-color: $main_gray;
    
    @media screen and(max-width: 1020px){
      &:nth-child(4) {
        display: none;
      }
      &:nth-child(5) {
        display: none;
      }
      &:nth-child(6) {
        display: none;
      }
      &:nth-child(7) {
        display: none;
      }
      &:nth-child(8) {
        display: none;
      }
      &:nth-child(9) {
        display: none;
      }
      &:nth-child(10) {
        display: none;
      }
    }
    @media screen and(max-width: 1720px) {
      padding: 30px;
      width: 200px;
      margin-bottom: 28px;
    }
    @media screen and(max-width: 1080px) {
      padding: 24px;
      width: 180px;
      margin-bottom: 20px;
    }
    @media screen and(max-width: 768px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      svg {
        width: 120px;
      }
    }
  }
}
</style>
