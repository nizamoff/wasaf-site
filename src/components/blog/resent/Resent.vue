<template>
  <div class="resent pt-15">
      <ul class="resent__list flex justify-between flex-wrap mb-3">
      <li class="resent__item">
        <span class="resent__name fz-18">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name fz-18">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name fz-18">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
      <li class="resent__item">
        <span class="resent__name fz-18">UX/UI design trends 2022</span>
        <img
          class="resent__img"
          src="../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <router-link to="/blog-inner" class="block color-white fz-16">Read more</router-link>
        </div>
      </li>
    </ul>
    <div class="mb-12">
      <div class="w-65 m-auto flex justify-between align-center">
      <button class="block pagination-btn">Previous</button>
      <button class="block btn-active">1</button>
      <button class="block btn">2</button>
      <button class="block btn">3</button>
      <button class="block pagination-btn">Next</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";
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
    @media screen and(max-width: 1080px){
      width: 100%;
      height: 200px;
    }
    @media screen and(max-width: 576px){
      width: 100%;
      height: 150px;
    }
    &:hover .layer {
      transform: scale(1);
      top: 0;
    }
    &:hover .resent__img {
      transform: scale(1.2);
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
  &__name {
    position: absolute;
    bottom: 20px;
    left: 20px;
    @media screen and(max-width: 576px) {
      left: 8px;
      bottom: 10px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;

  }
}
</style>
