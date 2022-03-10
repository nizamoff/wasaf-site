<template>
  <header id="header" class="header pt-3 pb-3">
    <div class="container flex justify-between align-center">
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
          <li class="header__item pl-2">
            <a
              class="header__item-btn header__link fz-18 fw-500 pr-3 pl-3 pt-1 pb-1 br-8"
              href="#"
              >Contact us</a
            >
          </li>
        </ul>
      </nav>
      <button class="header__burgers">
        <span class="header__burger block"></span>
        <span class="header__burger block"></span>
        <span class="header__burger block"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
  @media screen and(max-width: 1720px){
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
    @media screen and(max-width: 1720px){
      padding: 6px 14px;
      &:last-child {
        padding: 6px 0px 6px 14px;
      }
    }
  }
  &__item-btn {
    border: 1px solid $main_white;
    @media screen and(max-width: 1720px){
      padding: 6px 22px;
    }
  }
  .router-link-exact-active {
    border-bottom: 1px solid $main_white;
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
  .header__mobile__list {
    display: none;
    &.open {
      display: block;
    }
  }
}
</style>
