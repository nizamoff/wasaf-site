<template>
  <div class="bad-gateway container pt-15">
    <div class="m-auto w-30">
      <BadGatewayIcon />
    </div>
    <h2 class="fz-40 text-center mb-05 mt-3">Bad Gateway</h2>
    <h3 class="text-center fw-500 fz-24 w-65 m-auto">
      The server, while acting as a gateway or proxy, received an invalid
      response from the upstream server it accessed in attempting to fulfill the
      request.
    </h3>
    <div class="mb-20 mt-3">
      <a href="/" class="block button w-25 text-center m-auto">Back to home</a>
    </div>
  </div>
</template>

<script>
import BadGatewayIcon from "../svgs/BadGatewayIcon.vue";
export default {
  components: {
    BadGatewayIcon,
  },
};
</script>

<style></style>
