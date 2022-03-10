<template>
  <section class="carousel mb-15">
    <div class="container flex justify-between align-center mb-2">
      <div>
        <h4 class="carousel__title fw-600 fz-40 mb-05">Portfolio</h4>
        <p class="carousel__subtitle fz-16">
          For your very specific industry, we have highly-tailored IT solutions.
        </p>
      </div>
        <a href="/" class="carousel__link fz-20 flex align-center">Explore all <right-arrow-icon/> </a>
    </div>
    <carousel :items-to-show="5">
      <slide v-for="slide in slides" :key="slide">
        <h1 class="carousel__item__title fw-600 fz-24">{{ slide.title }}</h1>
        <p class="carousel__item__info">{{ slide.info }}</p>
        <img :src="slide.img" class="carousel__item__img" :alt="slide.alt" />
        <div class="carousel__item__link">
          <a href="">See more</a>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
  <img class="none" src="../../../../assets/images/icons/maket.jpg" alt="">
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import RightArrowIcon from '../../../svgs/RightArrowIcon.vue' 

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    RightArrowIcon
  },
  data() {
    return {
      slides: [
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "O’zbegim development",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Afsona restaurant",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Personal web page",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Oson mobile",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Salooom",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Salooom",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Salooom",
          info: "Web Site",
        },
        {
          img: "/img/maket.ff4c5927.jpg",
          alt: "Maket",
          title: "Salooom",
          info: "Web Site",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/_variables.scss';

.carousel {
  text-align: start;
  @media screen and(max-width: 576px) {
    margin-bottom: 80px;
  }
  &__title {
    @media screen and(max-width: 1720px){
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
      &:hover svg{
        transform: translateX(10px);
      }
  }
  .carousel__slide {
    position: relative;
    overflow: hidden;
    &:hover .carousel__item__link{
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
    transition: 0.3s;
    @media screen and(max-width: 1720px){
      font-size: 18px;
      left: 20px;
    }
    @media screen and(max-width: 1080px){
      font-size: 18px;
      left: 10px;
    }
  }
  &__item__info {
    position: absolute;
    left: 30px;
    bottom: 30px;
    transition: 0.3s;
    @media screen and(max-width: 1720px){
      font-size: 14px;
      left: 20px;
    }
    @media screen and(max-width: 1080px){
      
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
      @media screen and(max-width: 1720px){
        font-size: 14px;
        padding: 7px 16px;
      } 
    }
  }

}
</style>
