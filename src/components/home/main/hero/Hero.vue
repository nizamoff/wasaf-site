<template>
  <section class="hero container mb-10 pt-35 pb-30">
    <h1 class="hero__title m-auto fw-500 text-center">
      We create <span>ethical products</span> and <span>services</span> for humans.
    </h1>
    <div class="circle flex justify-center align-center">
      <div class="circle__icon">
        <a href="#services">
          <img
            src="../../../../assets/images/icons/down-arrow.svg"
            alt="down arrow"
          />
        </a>
      </div>
      <div class="circle__text">
        <img src="../../../../assets/images/icons/circle-text.svg" alt="text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";

.hero {
  position: relative;
  @media screen and(max-width: 1720px) {
    padding-top: 280px;
    padding-bottom: 230px;
  }
  &__title {
    font-size: 96px;
    line-height: 116px;
    color: $main_white;
    width: 1087px;
    @media screen and(max-width: 1720px) {
      width: 887px;
      font-size: 76px;
      line-height: 96px;
    }
    @media screen and(max-width: 1020px) {
      width: 687px;
      font-size: 56px;
      line-height: 66px;
    }
    @media screen and(max-width: 768px) {
      width: 487px;
      font-size: 36px;
      line-height: 46px;
    }
    @media screen and(max-width: 576px) {
      width: 100%;
      font-size: 26px;
      line-height: 36px;
    }
    span {
      color: $main_blue;
      font-weight: 600;
    }
  }
  .circle {
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 110px;
    height: 110px;
    @media screen and (max-width: 576px) {
      top: 100%;
    }
    &__icon {
      position: absolute;
      z-index: 2;
    }
    &__text {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      animation: circle linear infinite 5s;
      @keyframes circle {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @media screen and (max-width: 1720px) {
        width: 90px;
        height: 90px;
        img {
          width: 90px;
          height: 90px;
        }
      }
    }
  }
}
</style>
