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
      d="M26 12H14C12.8954 12 12 12.8954 12 14V26C12 27.1046 12.8954 28 14 28H26C27.1046 28 28 27.1046 28 26V14C28 12.8954 27.1046 12 26 12Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 19V24"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 16V16.01"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 24V19"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 24V21C24 20.4696 23.7893 19.9609 23.4142 19.5858C23.0391 19.2107 22.5304 19 22 19C21.4696 19 20.9609 19.2107 20.5858 19.5858C20.2107 19.9609 20 20.4696 20 21"
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
