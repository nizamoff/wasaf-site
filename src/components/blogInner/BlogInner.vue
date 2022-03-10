<template>
  <div class="blog-inner container pt-15">
    <img
      class="block m-auto w--100"
      src="../../assets/images/icons/cover.png"
      alt=""
    />
    <div class="blog-inner__wrapper p-3 bs br-8 mt-3 mb-10">
      <div class="flex mb-3 flex-wrap">
        <span class="blog-inner__hashtag fz-24 block pr-1 color-blue fw-600"
          >#uxuitrends</span
        >
        <span class="blog-inner__date block fz-24 pr-1 color-blue fw-600"
          >04.02.2022</span
        >
        <span class="blog-inner__view block fz-24 color-blue fw-600">103</span>
      </div>
      <h2 class="blog-inner__title fz-40 mb-5">UX/UI trends in 2022</h2>
      <h3 class="blog-inner__subtitle fz-24 mb-1 fw-500">
        Scrolling is dead. All hail scrollytelling
      </h3>
      <p class="blog-inner__text fz-16 mb-3">
        Scrolling is boring. If you want to grab attention, you need to
        implement scrollytelling. It’s a form of narrative that can be presented
        both on a page and in an app. Design a website where with each scroll
        illustration, fonts, snippets of text and other elements begin to come
        to life. Of course, you’ll want to see the end of this story. The story
        that, like a video game, takes you through a maze of symbols. You can’t
        influence its course, but you feel like a participant in the events on
        screen. Scrollytelling will be pretty much on every popular website
        you’ll see in 2022. Users are sick of pages stuffed with information
        they didn’t ask for.
      </p>
      <h3 class="blog-inner__subtitle fz-24 mb-1 fw-500">
        Scrolling is dead. All hail scrollytelling
      </h3>
      <p class="blog-inner__text fz-16 mb-3">
        Scrolling is boring. If you want to grab attention, you need to
        implement scrollytelling. It’s a form of narrative that can be presented
        both on a page and in an app. Design a website where with each scroll
        illustration, fonts, snippets of text and other elements begin to come
        to life. Of course, you’ll want to see the end of this story. The story
        that, like a video game, takes you through a maze of symbols. You can’t
        influence its course, but you feel like a participant in the events on
        screen. Scrollytelling will be pretty much on every popular website
        you’ll see in 2022. Users are sick of pages stuffed with information
        they didn’t ask for.
      </p>
      <h3 class="blog-inner__subtitle fz-24 mb-1 fw-500">
        Scrolling is dead. All hail scrollytelling
      </h3>
      <p class="blog-inner__text fz-16 mb-3">
        Scrolling is boring. If you want to grab attention, you need to
        implement scrollytelling. It’s a form of narrative that can be presented
        both on a page and in an app. Design a website where with each scroll
        illustration, fonts, snippets of text and other elements begin to come
        to life. Of course, you’ll want to see the end of this story. The story
        that, like a video game, takes you through a maze of symbols. You can’t
        influence its course, but you feel like a participant in the events on
        screen. Scrollytelling will be pretty much on every popular website
        you’ll see in 2022. Users are sick of pages stuffed with information
        they didn’t ask for.
      </p>
    </div>

    <div class="resent mb-15">
      <h3 class="resent__title text-center fz-32 fw-600 mb-3">Simillar posts</h3>
      <ul class="resent__list flex justify-between flex-wrap">
      <li class="resent__item">
        <span class="resent__name">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      
      
    </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
.blog-inner {
  &__wrapper {
    background-color: $main_gray;
  }
  .resent {
  &__item {
    width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid #7a7a7a;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 20px;
    @media screen and(max-width: 1720px){
      width: 240px;
      height: 240px;
    }
    @media screen and(max-width: 961px){
      width: 100%;
      height: 200px;
    }
    @media screen and(max-width: 576px){
      height: 150px;
    }
    &:hover .resent__img {
      transform: scale(1.2);
    }
    &:hover .layer {
      transform: scale(1);
      top: 0;
    }
  }
  &__name {
    position: absolute;
    bottom: 20px;
    left: 20px;
    @media screen and(max-width: 576px){
      bottom: 10px;
      left: 5px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
  .layer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.637);
      backdrop-filter: blur(15px);
      position: absolute;
      border-radius: 8px;
      top: 100%;
      transform: scale(0.1);
      transition: 0.3s;
      a {
        border: 1px solid $main_blue;
        padding: 10px 20px;
        border-radius: 8px;
        transition: 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
}
}
</style>
