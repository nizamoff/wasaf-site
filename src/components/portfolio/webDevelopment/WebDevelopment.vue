<template>
  <ul class="web-development pt-2 flex justify-between flex-wrap">
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>

    <li class="web-development__card mb-1 br-8 o-hidden">
      <img
        src="../../../assets/images/icons/portfolio.png"
        alt="portfolio cover"
      />
      <span class="web-development__title block fz-24"
        >O’zbegim development</span
      >
      <span class="web-development__subtitle block fz-16">Web site</span>
      <span class="layer"></span>
      <div class="web-development__link flex justify-center align-center">
        <a class="block br-8 pl-4 pr-4 pt-2 pb-2 color-white fz-16" href="#"
          >See More</a
        >
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";
.web-development {
  &__card {
    width: 345px;
    height: 345px;
    position: relative;
    @media screen and(max-width: 1720px){
      width: 275px;
      height: 275px;
    }
    @media screen and(max-width: 1160px){
      width: 220px;
      height: 220px;
    }
    @media screen and(max-width: 1130px){
      margin-bottom: 50px;
    }
    @media screen and(max-width: 1080px){
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
    }
    &:hover .web-development__link {
      top: 0;
      transform: scale(1);
    }
    &:hover img {
      transform: scale(1.2);
      filter: blur(10px);
    }
    &:hover .web-development__title {
      top: 100%;
    }
    &:hover .web-development__subtitle {
      top: 100%;
    }
  }
  img {
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.2s ease;

  }
  &__title {
    position: absolute;
    bottom: 44px;
    left: 20px;
    z-index: 2;
    transition: all 0.2s ease;
    @media screen and(max-width: 576px){
      bottom: 30px;
      left: 10px;
    }
  }
  &__subtitle {
    position: absolute;
    bottom: 15px;
    left: 20px;
    z-index: 2;
    transition: all 0.2s ease;
    @media screen and(max-width: 576px){
      bottom: 10px;
      left: 10px;
    }
  }
  .layer {
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.15));
  }
  &__link {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.671);
    transition: all 0.3s ease;
    transform: scale(0);
    z-index: 3;
    a {
      border: 1.5px solid $main_blue;
    }
  }
}
</style>
