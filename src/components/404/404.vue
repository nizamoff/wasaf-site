<template>
  <div class="error-page pt-15 container">
    <div class="m-auto w-45 ">
      <NotFoundIcon />
    </div>
    <h2 class="fz-40 text-center mb-05 mt-3">
      The page you were looking for doesn’t exist.
    </h2>
    <h3 class="text-center mb-3 fw-500 fz-24">You may have mistyped the address or the page may have moved.</h3>
    <div class="mb-20">
        <a href="/" class="block button w-25 text-center m-auto">Back to home</a>
    </div>
  </div>
</template>

<script>
import NotFoundIcon from "../svgs/NotFoundIcon.vue";
export default {
  components: {
    NotFoundIcon,
  },
};
</script>

<style></style>
