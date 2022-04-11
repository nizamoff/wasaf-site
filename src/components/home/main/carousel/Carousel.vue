<template>
  <section id="portfolio" class="carousel mb-15">
    <div class="container flex justify-between align-center mb-2">
      <div>
        <h4 class="carousel__title fw-600 fz-40 mb-05">Portfolio</h4>
        <p class="carousel__subtitle fz-16">
          For your very specific industry, we have highly-tailored IT solutions.
        </p>
      </div>
      <!-- <router-link
        to="/portfolio"
        class="carousel__link fz-20 flex align-center"
        >Explore all <right-arrow-icon />
      </router-link> -->
    </div>
    <carousel :items-to-show="5">
      <slide v-for="slide in slides" :key="slide">
        <h1 class="carousel__item__title fw-600 fz-24">{{ slide.title }}</h1>
        <p class="carousel__item__info">{{ slide.info }}</p>
        <img :src="slide.img" class="carousel__item__img" :alt="slide.alt" />
        <div class="layer"></div>
        <div class="carousel__item__link">
          <a :href="slide.link" target="blank">See more</a>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
  <img class="none" src="../../../../assets/images/icons/maket.jpg" alt="" />
  <img
    class="none"
    src="../../../../assets/images/icons/Shopify-1.jpg"
    alt=""
  />
  <img
    class="none"
    src="../../../../assets/images/icons/Shopify-2.jpg"
    alt=""
  />
  <img
    class="none"
    src="../../../../assets/images/icons/Shopify-3.jpg"
    alt=""
  />
  <img
    class="none"
    src="../../../../assets/images/icons/Shopify-4.jpg"
    alt=""
  />
  <img class="none" src="../../../../assets/images/icons/Shopify.jpg" alt="" />
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import RightArrowIcon from "../../../svgs/RightArrowIcon.vue";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          img: "/img/Shopify-1.1d801426.jpg",
          alt: "Maket",
          title: "Farzandim",
          info: "Web Site",
          link: "http://farzandtarbiyasi.uz",
        },
        {
          img: "/img/Shopify-2.87d481de.jpg",
          alt: "Maket",
          title: "Fitmag",
          info: "Web Site",
          link: "https://fitmag.uz/",
        },
        {
          img: "/img/Shopify-3.36c5d4bf.jpg",
          alt: "Maket",
          title: "Benif",
          info: "Web Site",
          link: "https://benif.uz/",
        },
        {
          img: "/img/Shopify-4.a96e8d06.jpg",
          alt: "Maket",
          title: "Filigran",
          info: "Web Site",
          link: "https://filigran.uz/",
        },
        {
          img: "/img/Shopify.6eb7d75c.jpg",
          alt: "Maket",
          title: "Humowells",
          info: "Web Site",
          link: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";

.carousel {
  text-align: start;
  @media screen and(max-width: 576px) {
    margin-bottom: 80px;
  }
  &__title {
    @media screen and(max-width: 1720px) {
      font-size: 32px;
    }
    @media screen and(max-width: 576px) {
      font-size: 16px;
    }
  }
  &__subtitle {
    width: 260px;
    @media screen and(max-width: 576px) {
      display: none;
    }
  }
  &__link {
    color: $main_white;
    @media screen and(max-width: 1720px) {
      font-size: 16px;
    }
    svg {
      transition: 0.3s;
    }
    &:hover svg {
      transform: translateX(10px);
    }
  }
  .carousel__slide {
    position: relative;
    overflow: hidden;
    &:hover .carousel__item__link {
      top: 0;
      transform: scale(1);
    }
    &:hover .carousel__item__img {
      transform: scale(1.2);
    }
  }
  &__item__title {
    position: absolute;
    bottom: 50px;
    left: 30px;
    z-index: 2;
    transition: 0.3s;
    
    @media screen and(max-width: 1720px) {
      font-size: 18px;
      left: 20px;
    }
    @media screen and(max-width: 1080px) {
      font-size: 18px;
      left: 10px;
    }
  }
  &__item__info {
    position: absolute;
    left: 30px;
    bottom: 30px;
    z-index: 2;
    transition: 0.3s;
    @media screen and(max-width: 1720px) {
      font-size: 14px;
      left: 20px;
    }
    @media screen and(max-width: 1080px) {
      left: 10px;
    }
  }
  &__item__img {
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__item__link {
    position: absolute;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.678);
    backdrop-filter: blur(25px);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100%;
    transition: all 0.3s ease;
    transform: scale(0.2);
    a {
      display: block;
      color: #fff;
      font-size: 16px;
      padding: 10px 20px;
      border: 1px solid $main_blue;
      border-radius: 8px;
      @media screen and(max-width: 1720px) {
        font-size: 14px;
        padding: 7px 16px;
      }
    }
  }
  .layer {
    width: 100%;
    height: 200px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7259278711484594) 48%,
      rgba(0, 0, 0, 0.700717787114846) 51%,
      rgba(0, 212, 255, 0) 95%
    );
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
}
</style>
