<template>
  <section class="results container mb-15">
    <h3 class="results__title fw-600 fz-40 text-center mb-3">
      Industry Experience 
    </h3>
    <ul class="results__list flex justify-between flex-wrap">
      <li class="results__item p-4 bs flex justify-center align-center br-8">
        <div class="result__content">
          <div class="flex justify-center align-center pb-2">
            <span
              class="results__number block fw-600 fz-96 mr-1"
              data-target="5"
            >
              0
            </span>
            <span class="results__symbol block fw-600 fz-96"
              >+</span
            >
          </div>
          <span
            class="results__subtitle block fw-400 fz-32 text-center w-30"
            >
            Years of experience
          </span>
        </div>
        <div class="results__background">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
      <li class="results__item p-4 bs flex justify-center align-center br-8">
        <div class="result__content">
          <div class="flex justify-center align-center pb-2">
            <span
              class="results__number block fw-600 fz-96 mr-1"
              data-target="50"
            >
              0
            </span>
            <span class="results__symbol block fw-600 fz-96"
              >+</span
            >
          </div>
          <span
            class="results__subtitle block fw-400 fz-32 text-center w-30"
            >
            Projects
          </span>
        </div>
        <div class="results__background">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
      <li class="results__item p-4 bs flex justify-center align-center br-8">
        <div class="result__content">
          <div class="flex justify-center align-center pb-2">
            <span
              class="results__number block fw-600 fz-96 mr-1"
              data-target="100"
            >
              0
            </span>
            <span class="results__symbol block fw-600 fz-96"
              >%</span
            >
          </div>
          <span
            class="results__subtitle block fw-400 fz-32 text-center w-40"
            >
            Employees 
          </span>
        </div>
        <div class="results__background">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
window.addEventListener("scroll", function () {
  const couters = document.querySelectorAll(".results__number");
  const speed = 100;
  if (this.pageYOffset >= 1300) {
    couters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 100);
        } else {
          count.innerText = target;
        }
      };

      updateCount();
    });
  }
});

export default {};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/_variables.scss";
.results {
  position: relative;
  &__title {
    @media screen and(max-width: 1720px) {
      font-size: 32px;
    }
    @media screen and(max-width: 576px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  &__list {
    @media screen and(max-width: 1016px) {
      display: block;
    }
  }
  &__item {
    width: 460px;
    height: 240px;
    background-color: $main_gray;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    &:hover .results__background {
      display: block;
    }
    @media screen and(max-width: 1720px){
      width: 368px;
      height: 200px;
    }
    @media screen and(max-width: 1200px){
      width: 350px;
      height: 180px;
    }
    @media screen and(max-width: 1100px) {
      width: 328px;
    }
    @media screen and(max-width: 1016px) {
      width: 100%;
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and(max-width: 576px) {
      height: 135px;
    }
  }
  &__content {
    position: absolute;
    z-index: 10;
  }
  &__number {
    @media screen and(max-width: 1720px) {
      font-size: 72px;
    }
    @media screen and(max-width: 576px) {
      font-size: 48px;
    }
  }
  &__symbol {
    @media screen and(max-width: 1720px) {
      font-size: 72px;
    }
    @media screen and(max-width: 576px) {
      font-size: 48px;
    }
  }
  &__subtitle {
    position: absolute;
    z-index: 10;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media screen and(max-width: 1720px) {
      font-size: 24px;
    }
    @media screen and(max-width: 576px) {
      font-size: 20px;
      font-weight: 300;
    }
  }
  &__background {
    position: absolute;
    z-index: 9;
    width: 331px;
    height: 331px;
    right: -30%;
    bottom: -70%;
    display: none;
    @media screen and(max-width: 1720px) {
      width: 280px;
      height: 280px;
    }
    @media screen and(max-width: 576px) {
      width: 230px;
      height: 230px;
    }
    span:nth-child(1) {
      display: block;
      width: 300px;
      height: 300px;
      background-color: #0a4384;
      border-radius: 50%;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      animation: circleOne linear 1s;
      animation-delay: 0.24s;
      @media screen and(max-width: 1720px) {
        width: 280px;
        height: 280px;
      }
      @media screen and(max-width: 576px) {
        width: 180px;
        height: 180px;
      }
      @keyframes circleOne {
        0%{
          transform: scale(0) translateX(0) translateY(0);
        }
        25%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        50%{
          transform: scale(1.1) translateX(-40%) translateY(-40%);
        }
        75%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        100%{
          transform: scale(0) translateX(0%) translateY(0%);
        }
      }
    }
    span:nth-child(2) {
      width: 230px;
      height: 230px;
      background: #0c509d;
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      animation: circleTwo linear 1s;
      animation-delay: 0.12s;
      @media screen and(max-width: 1720px) {
        width: 190px;
        height: 190px;
      }
      @media screen and(max-width: 576px) {
        width: 100px;
        height: 100px;
      }
      @keyframes circleTwo {
        0%{
          transform: scale(0) translateX(0) translateY(0);
        }
        25%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        50%{
          transform: scale(1.1) translateX(-40%) translateY(-40%);
        }
        75%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        100%{
          transform: scale(0) translateX(0%) translateY(0%);
        }
      }
    }
    span:nth-child(3) {
      width: 160px;
      height: 160px;
      background: #1261b9;
      position: absolute;
      z-index: 3;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      animation: circleThree linear 1s;
      animation-delay: 0.06s;
      @media screen and(max-width: 1720px) {
        width: 120px;
        height: 120px;
      }
      @keyframes circleThree {
        0%{
          transform: scale(0) translateX(0) translateY(0);
        }
        25%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        50%{
          transform: scale(1.1) translateX(-40%) translateY(-40%);
        }
        75%{
          transform: scale(1) translateX(-40%) translateY(-40%);
        }
        100%{
          transform: scale(0) translateX(0%) translateY(0%);
        }
      }
    }
  }
}
</style>
