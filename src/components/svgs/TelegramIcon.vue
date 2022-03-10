<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="39.5"
      width="39"
      height="39"
      rx="19.5"
      transform="rotate(-90 0.5 39.5)"
      stroke="#4D4D4D"
    />
    <path
      d="M23 18L19 22L25 28L29 12L11 19L15 21L17 27L20 23"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {};
</script>

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
    width: 35px;
    height: 35px;
  }
}
</style>
