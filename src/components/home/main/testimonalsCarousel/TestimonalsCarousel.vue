<template>
  <section class="testimonals-carousel mb-15">
    <h4 class="testimonals-carousel__title fz-40 fw-600 text-center mb-1">
      Testimonals
    </h4>
    <p
      class="testimonals-carousel__subtitle fz-16 fw-300 text-center w-30 m-auto"
    >
      Curious what the Wasaf experience is like? Hear it directly from our
      clients.
    </p>
    <!-- <div class="layer"></div>
    <div class="layer2"></div> -->
    <carousel :items-to-show="6">
      <slide v-for="item in testimonals" :key="item">
        <div
          class="testimonals-carousel__card p-3 br-8 bs w-35 text-start mr-1 ml-1 mt-3"
        >
          <div class="mb-3">
            <img :src="item.star1" :alt="item.alt" />
            <img :src="item.star1" :alt="item.alt" />
            <img :src="item.star1" :alt="item.alt" />
            <img :src="item.star1" :alt="item.alt" />
            <img :src="item.star1" :alt="item.alt" />
          </div>
          <p class="fz-16 fw-300 lh-24 mb-3">{{ item.comment }}</p>
          <hr class="testimonals-carousel__line bn mb-3" />
          <div class="flex align-center">
            <img
              :src="item.avatar"
              alt="person"
              class="testimonals-carousel__avatar obj-cover mr-1 mt-1"
              width="68"
              height="68"
            />
            <div>
              <span class="block tu fz-16 fw-600 mb-05">{{
                item.fullName
              }}</span>
              <span class="block fz-16 fw-300">{{ item.job }}</span>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
  <img class="none" src="../../../../assets/images/icons/person.png" alt="">
  <img class="none" src="../../../../assets/images/icons/Star.svg" alt="">
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
      testimonals: [
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
        {
          star1: "/img/Star.69cd27af.svg",
          star2: "star",
          star3: "star",
          star4: "star",
          star5: "star",
          alt: "star icon",
          comment:
            "“Wasaf has one of the best interface design teams in the world. Their work has the power to change your business.” At first, I was skeptical. Could this development agency actually develop on its reputation? The answer is yes. 100 times yes. We ❤️ Wasaf",
          avatar: "/img/person.ee2f5b33.png",
          fullName: "Odil Nizomov",
          job: "Frontend developer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";

.testimonals-carousel {
  position: relative;
  @media screen and(max-width: 1020px){
    display: none;
  }
  &__title {
    @media screen and(max-width: 1720px){
      font-size: 32px;
    }
  }
  &__card {
    background-color: $main_gray;
    transition: 0.3s;
    @media screen and(max-width: 1720px){
      padding: 20px;
    }
    &:hover {
      background-color: $main_white;
      color: $main_black;
    }
  }
  &__line {
    height: 1px;
    width: 100%;
    background: #414141;
  }
  &__avatar {
    @media screen and(max-width: 1720px){
      width: 50px;
      height: 50px;
    }
  }
  .layer {
    top: 0;
    left: 0;
    background: linear-gradient(270deg, #0d0c0e 0%, rgba(0, 0, 0, 0) 100%);
    transform: rotate(180deg);
    width: 583px;
    height: 100%;
    position: absolute;
    z-index: 999;
    @media screen and(max-width: 1720px){
      left: -10%;
    }
  }
  .layer2 {
    top: 0;
    right: 0;
    background: linear-gradient(270deg, #0d0c0e 0%, rgba(0, 0, 0, 0) 100%);
    transform: rotate(0);
    width: 583px;
    height: 100%;
    position: absolute;
    z-index: 999;
    @media screen and(max-width: 1720px){
      right: -10%;
    }
  }
}
</style>
