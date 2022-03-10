<template>
  <section id="footer" class="footer pt-7">
    <div class="container">
      <div class="footer__top flex justify-between">
        <div class="footer__left">
          <a class="footer__logo color-blue fz-32 fw-600 mb-2 block" href="#"
            >Wasaf</a
          >
          <p class="footer__slogan w-20">
            We create powerful and usable digital products
          </p>
        </div>
        <div class="footer__right flex justify-between w-75 mb-10">
          <nav>
            <h4 class="fz-32 fw-600 mb-2">Navigate</h4>
            <ul class="footer__menu">
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Home</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Services</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Portfolio</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Blog</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Career</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 class="fz-32 fw-600 mb-2">Social</h4>
            <ul class="footer__socials">
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Instagram</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Facebook</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Telegram</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Linkedin</a>
              </li>
              <li>
                <a class="fz-16 mb-1 block color-white" href="">Twitter</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 class="fz-32 fw-600 mb-2">Need help?</h4>
            <ul class="footer__contact">
              <li>
                <a class="fz-16 mb-1 flex align-center color-white" href=""
                  ><LocationIcon />Tashkent, Uzbekistan</a
                >
              </li>
              <li>
                <a class="fz-16 mb-1 flex align-center color-white" href=""
                  ><AtIcon />wasaf@gmail.com</a
                >
              </li>
              <li>
                <a class="fz-16 mb-1 flex align-center color-white" href=""
                  ><PhoneIcon />+998979725756</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr class="hr" />
      <div class="pt-2 pb-2 flex justify-between color-6060">
        <span class="block fz-18">All rights reserved - 2022 Wasaf</span>
        <span class="block fz-18">Terms and Conditions</span>
        <span class="block fz-18">Website by Wasaf team</span>
      </div>
    </div>
  </section>
</template>

<script>
import LocationIcon from "../../svgs/LocationIcon.vue";
import AtIcon from "../../svgs/AtIcon.vue";
import PhoneIcon from "../../svgs/PhoneIcon.vue";
export default {
  components: {
    LocationIcon,
    AtIcon,
    PhoneIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_customization.scss";
.footer {
  background-color: $main_gray;
  @media screen and(max-width: 700px) {
    padding-top: 20px;
  }
  &__top {
    @media screen and(max-width: 700px) {
      display: block;
    }
  }
  &__logo {
    @media screen and(max-width: 700px) {
      text-align: center;
      font-size: 24px;
    }
  }
  &__slogan {
    @media screen and(max-width: 700px) {
      display: none;
    }
  }
  &__right {
    @media screen and(max-width: 700px) {
      width: 100%;
    }
    @media screen and(max-width: 576px) {
      display: block;
      text-align: center;
      margin-bottom: 10px;
      h4 {
        display: none;
      }
    }
  }
  &__menu {
    a {
      transition: 0.3s;
      &:hover {
        transform: translateX(3px);
      }
    }
    @media screen and(max-width: 576px) {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 20px;
      li {
        a {
          font-size: 16px;
          padding: 4px;
        }
      }
    }
  }
  &__socials {
    a {
      transition: 0.3s;
      &:hover {
        transform: translateX(3px);
      }
    }
    @media screen and(max-width: 576px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 20px;
      li {
        a {
          font-size: 12px;
          padding: 4px;
        }
      }
    }
  }
  &__contact {
    a {
      transition: 0.3s;
      &:hover {
        transform: translateX(3px);
      }
    }
    @media screen and(max-width: 576px) {
      display: flex;
      justify-content: space-between;
    }
    @media screen and(max-width: 300px) {
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
}
</style>
