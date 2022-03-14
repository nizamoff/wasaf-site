<template>
  <header id="header" class="header pt-3 pb-3">
    <div class="header__inner container flex justify-between align-center">
      <a href="/" class="header__left fw-700 fz-32">Wasaf</a>
      <nav class="header__right">
        <ul class="header__list flex align-center">
          <li class="header__item pr-2 pt-1 pl-2 pb-1">
            <router-link to="/" class="header__link fz-18 fw-500" href="#"
              >Home</router-link
            >
          </li>
          <li class="header__item pr-2 pl-2 pt-1 pb-1">
            <router-link to="/portfolio" class="header__link fz-18 fw-500"
              >Portfolio</router-link
            >
          </li>
          <li class="header__item pr-2 pl-2 pt-1 pb-1">
            <router-link class="header__link fz-18 fw-500" to="/blog"
              >Blog</router-link
            >
          </li>
          <li class="header__item pr-2 pl-2 pt-1 pb-1">
            <router-link class="header__link fz-18 fw-500" to="/vacancies"
              >Vacancies</router-link
            >
          </li>
          <!-- <li class="header__item pl-2">
            <a
              class="header__item-btn header__link fz-18 fw-500 pr-3 pl-3 pt-1 pb-1 br-8"
              href="#"
              >Contact us</a
            >
          </li> -->
        </ul>
      </nav>
      <button @click="open = true" class="header__burgers">
        <span class="header__burger block"></span>
        <span class="header__burger block"></span>
        <span class="header__burger block"></span>
      </button>
      <div class="mobile-menu" @click="open = false" v-if="open">
        <div class="mobile-menu__wrapper">
          <div @click="open = false">
            <CrossIcon />
          </div>
          <router-link
            to="/"
            @click="open = false"
            class="mobile-menu__item block color-white fz-36 pb-2 pt-5 mb-2"
            >HOME</router-link
          >
          <router-link
            to="/blog"
            @click="open = false"
            class="mobile-menu__item block color-white fz-36 pb-2 mb-2"
            >BLOG</router-link
          >
          <router-link
            to="/portfolio"
            @click="open = false"
            class="mobile-menu__item block color-white fz-36 pb-2 mb-2"
            >PORTFOLIO</router-link
          >
          <router-link
            to="/vacancies"
            @click="open = false"
            class="mobile-menu__item block color-white fz-36 pb-2 mb-2"
            >VACANCIES</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CrossIcon from "../../svgs/CrossIcon.vue";
export default {
  name: "Header",
  data() {
    return {
      open: false,
    };
  },
  components: {
    CrossIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(13, 12, 14, 0.609);
  backdrop-filter: blur(25px);
  z-index: 99999;
  @media screen and(max-width: 1720px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
  &__left {
    color: $main_white;
  }
  &__list {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &__link {
    color: $main_white;
  }
  &__item {
    @media screen and(max-width: 1720px) {
      padding: 6px 14px;
      &:last-child {
        padding: 6px 0px 6px 14px;
      }
    }
  }
  &__item-btn {
    border: 1px solid $main_white;
    @media screen and(max-width: 1720px) {
      padding: 6px 22px;
    }
  }
  .router-link-exact-active {
    color: $main_blue;
    width: 100%;
  }
  &__burgers {
    background: transparent;
    border: none;
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  &__burger {
    @media screen and (max-width: 768px) {
      border-bottom: 2px solid white;
      width: 25px;
      margin-bottom: 5px;
    }
  }
  .mobile-menu {
    display: none;
    @media screen and(max-width: 700px) {
      display: flex;
    }
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh !important;
    padding: 10px 20px;
    top: 450px;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    text-align: center;
    background-color: rgba(13, 12, 14, 0.904);
    z-index: 99999;
    border-radius: 8px;
    svg {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &__wrapper {
      background-color: #202020c7;
      backdrop-filter: blur(10px);
      padding: 10px;
      width: 80%;
      height: 500px;
      border-radius: 8px;
    }
  }
}
</style>
