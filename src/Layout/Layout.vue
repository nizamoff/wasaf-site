<script>
import Header from "../components/home/header/Header.vue"
import Footer from "../components/home/footer/Footer.vue"
import Socials from "../components/home/main/socials/Socials.vue"

export default {
    components: {
        Header,
        Footer,
        Socials
    }
}
</script>

<template>
  <Header />

  <router-view></router-view>
  <Socials/>
  <Footer />
</template>
