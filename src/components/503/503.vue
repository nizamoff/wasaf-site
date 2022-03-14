<template>
  <div class="unaviable-page container pt-15">
    <div class="flex justify-center align-center">
      <UnaviableIcon />
    </div>
    <h2 class="fz-40 text-center mb-05 mt-3">Service Unavailable</h2>
    <h3 class="text-center fw-500 fz-24 w-65 m-auto">
      The server is currently unable to handle the request due to a temporary
      overloading or maintenance of the server.
    </h3>
    <div class="mb-20 mt-3">
      <a href="/" class="block button w-25 text-center m-auto">Back to home</a>
    </div>
  </div>
</template>

<script>
import UnaviableIcon from "../svgs/UnaviableIcon.vue";
export default {
  components: {
    UnaviableIcon,
  },
};
</script>

<style></style>
