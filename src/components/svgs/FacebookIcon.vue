<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M15 18V22H18V29H22V22H25L26 18H22V16C22 15.7348 22.1054 15.4804 22.2929 15.2929C22.4804 15.1054 22.7348 15 23 15H26V11H23C21.6739 11 20.4021 11.5268 19.4645 12.4645C18.5268 13.4021 18 14.6739 18 16V18H15Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="0.5"
      y="39.5"
      width="39"
      height="39"
      rx="19.5"
      transform="rotate(-90 0.5 39.5)"
      stroke="#4D4D4D"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";
svg {
  &:hover path {
    stroke: $main_blue;
  }
  &:hover rect {
    stroke: $main_blue;
  }
  path,
  rect {
    transition: 0.3s;
  }
  @media screen and(max-width:1720px){
    width: 34px;
    height: 34px;
  }
}
</style>
