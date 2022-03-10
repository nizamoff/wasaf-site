<template>
  <div class="portfolio container pt-15 mb-20">
    <h2 class="portfolio__title mb-2 fz-40">The work we do, The business we help</h2>
    <ul class="portfolio__list flex justify-between pl-2 pr-2 bs">
      <li class="portfolio__item ">
        <router-link class="portfoilio__item__link p-3 fz-16 block" to="/portfolio">All</router-link>
      </li>
      <li class="portfolio__item ">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/web-development">Web development</router-link>
      </li>
      <li class="portfolio__item">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/mobile-development">Mobile development</router-link>
      </li>
      <li class="portfolio__item">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/ceo-services">CEO services</router-link>
      </li>
      <li class="portfolio__item">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/uxui-design">UX/UI design</router-link>
      </li>
      <li class="portfolio__item">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/software-development">Software development</router-link>
      </li>
      <li class="portfolio__item">
        <router-link class="portfolio__item__link p-3 fz-16 block" to="/it-consulting">IT consulting service</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
.portfolio {
  &__list {
    background-color: $main_gray;
  }
  &__item {
    @media screen and(max-width: 1080px){
      display: none;
    }
    a {
      color: $main_white;
      opacity: 0.7;
      transition: all 0.5s;
      border-bottom: 2px solid transparent;
    }
    .router-link-exact-active {
      border-bottom: 2px solid $main_blue;
      opacity: 1;
    }
    
  }
  &__item__link {
    @media screen and(max-width: 1720px){
      
    }
  }
}
</style>
