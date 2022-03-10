<template>
  <div class="all pt-1">
      <WebDevelopment/>
      <MobileDevelopment/>
      <CeoServices/>
      <UxUiDesign/>
      <SoftwareDevelopment/>
      <ITConsulting/>
  </div>
</template>

<script>
import WebDevelopment from "../webDevelopment/WebDevelopment.vue"
import MobileDevelopment from "../mobileDevelopment/MobileDevelopment.vue"
import CeoServices from "../ceoServices/CeoServices.vue"
import UxUiDesign from "../uxUiDesign/UxUiDesign.vue"
import SoftwareDevelopment from "../softwareDevelopment/SoftwareDevelopment.vue"
import ITConsulting from "../itConsulting/ITConsulting.vue"
export default {
    components: {
        WebDevelopment,
        MobileDevelopment,
        CeoServices,
        UxUiDesign,
        SoftwareDevelopment,
        ITConsulting
    }
}
</script>

<style>

</style>