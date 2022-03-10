<template>
  <section class="articles container mb-15">
    <div class="flex justify-between mb-3 align-bottom">
      <h4 class="articles__title fw-600 fz-40">Our latest articles</h4>
      <a class="fz-20 color-white" href="#">Read more</a>
    </div>
    <ul class="articles__list flex justify-between">
      <li class="articles__item">
        <span class="articles__name  fz-16">UX/UI design trends 2022</span>
        <img
          class="articles__img"
          src="../../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <a href="/" class="block color-white fz-16">Read more</a>
        </div>
      </li>
      <li class="articles__item">
        <span class="articles__name  fz-16">UX/UI design trends 2022</span>
        <img
          class="articles__img"
          src="../../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <a href="/" class="block color-white fz-16">Read more</a>
        </div>
      </li>
      <li class="articles__item">
        <span class="articles__name fz-16">UX/UI design trends 2022</span>
        <img
          class="articles__img"
          src="../../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <a href="/" class="block color-white fz-16">Read more</a>
        </div>
      </li>
      <li class="articles__item">
        <span class="articles__name  fz-16">UX/UI design trends 2022</span>
        <img
          class="articles__img"
          src="../../../../assets/images/icons/uxtrends.png"
          alt=""
        />
        <div class="layer">
          <a href="/" class="block color-white fz-16">Read more</a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Articles",
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";
.articles {
  &__list {
    @media screen and(max-width: 1080px) {
      display: block;
    }
  }
  &__item {
    width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid #7a7a7a;
    box-sizing: border-box;
    border-radius: 8px;
    @media screen and(max-width: 1720px){
      width: 250px;
      height: 250px;
    }
    @media screen and(max-width: 1080px) {
      width: 100%;
      height: 200px;
      margin-bottom: 15px;
    }
    @media screen and(max-width: 576px) {
      height: 150px;
    }
    &:hover .layer {
      transform: scale(1);
      top: 0;
    }
    &:hover .articles__img {
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
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
}
</style>
