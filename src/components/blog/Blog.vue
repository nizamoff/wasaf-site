<template>
  <div class="blog pt-15 container">
    <h2 class="blog__title fz-40 mb-3">Blogs</h2>
    <div class="flex w-40 justify-between">
      <router-link
        to="/blog"
        class="blog__link o-05 color-white fz-20 p-1 block"
        >Recent</router-link
      >
      <router-link
        to="/blog/recommend"
        class="blog__link o-05 color-white fz-20 p-1 block"
        >Recommend</router-link
      >
      <router-link
        to="/blog/most-read"
        class="blog__link o-05 color-white fz-20 p-1 block"
        >Most read</router-link
      >
    </div>
    <hr class="hr mb-2" />
    <div class="w--100 flex justify-between align-center">
      <div class="blog__search w--15 flex align-center">
        <label for="search"><SearchIcon /></label>
        <input
          class="pt-1 pr-1 pb-1 pl-1 block mr-1"
          type="search"
          placeholder="search"
          id="search"
        />
      </div>
      <div class="blog__hashtag w--80 flex justify-between">
        <button class="block button mt-0">#what</button>
        <button class="block button mt-0">#what</button>
        <button class="block button mt-0">#what</button>
        <button class="block button mt-0">#what</button>
        <button class="block button mt-0">#what</button>
        <button class="block button mt-0">#what</button>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchIcon from "../svgs/SearchIcon.vue";
export default {
  name: "Blog",
  components: { SearchIcon },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
.blog {
  &__link {
    border-bottom: 3px solid transparent;
  }
  &__search {
    height: 51px;
    padding-left: 12px;
    background: rgba(44, 44, 44, 0.2);
    border: 1px solid #575757;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    @media screen and(max-width: 1720px){
      height: 41px;
    }
    @media screen and(max-width: 880px){
      width: 100%;
    }
    input {
      background-color: transparent;
      border: none;
      outline: none;
      font-family: Gilroy;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
    input:-internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: transparent !important;
      color: $main_white !important;
    }
  }
  &__hashtag {
    @media screen and(max-width: 880px){
      display: none;
    }
  }
}
.router-link-exact-active {
  color: $main_white;
  border-bottom: 3px solid $main_white;
  transition: all 0.5s;
  opacity: 1;
}
</style>
