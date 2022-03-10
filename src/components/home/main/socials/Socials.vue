<template>
  <div class="socials flex flex-column align-center">
    <span class="socials__title fz-18 mb-3 block">Follow us</span>
    <a href="#footer">
      <img
      class="socials__arrow block mb-2"
      src="../../../../assets/images/icons/down-arrow.svg"
      alt="icon"
      width="24"
      height="24"
    />
    </a>
    <div class="socials__wrapper flex flex-column">
      <a href="/" class="mb-1 block">
        <facebook-icon />
      </a>
      <a href="/" class="mb-1 block">
        <intagram-icon />
      </a>
      <a href="/" class="mb-1 block">
        <telegram-icon />
      </a>
      <a href="/" class="mb-1 block">
        <linkedin-icon />
      </a>
      <a href="/" class="mb-1 block">
        <twitter-icon/>
      </a>
    </div>
  </div>
</template>

<script>
import FacebookIcon from "../../../svgs/FacebookIcon.vue";
import IntagramIcon from "../../../svgs/IntagramIcon.vue";
import LinkedinIcon from "../../../svgs/LinkedinIcon.vue";
import TelegramIcon from "../../../svgs/TelegramIcon.vue";
import TwitterIcon from '../../../svgs/TwitterIcon.vue';
export default {
  name: "Socials",
  components: {
    FacebookIcon,
    IntagramIcon,
    TelegramIcon,
    LinkedinIcon,
    TwitterIcon,
  },
};
</script>

<style lang="scss" scoped>
.socials {
  position: fixed;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  @media screen and (max-width: 1280px){
    display: none;
  }
  @media screen and (max-width: 1720px){
    right: 0.8%;
  }
  &__title {
    transform: rotate(-90deg);
    color: #565656;
    user-select: none;
  }
  &__arrow {
    animation: arrow linear 0.8s infinite;
    cursor: pointer;
    @keyframes arrow {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
