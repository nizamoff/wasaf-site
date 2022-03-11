<template>
  <section class="who-we-are container mb-15">
      <h3 class="who-we-are__title mb-3 fz-40">Who we are</h3>
      <iframe src="https://www.youtube.com/embed/nAIf1BSqYbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 720px;
  border-radius: 8px;
  @media screen and(max-width: 1720px){
    height: 480px;
  }
  @media screen and(max-width: 1080px){
    height: 340px;
  }
  @media screen and(max-width: 576px){
    height: 240px;
  }
}
</style>