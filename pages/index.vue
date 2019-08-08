<template>
  <div class="container">
    <NavBar></NavBar>
    <BangerList :bangers="bangers"></BangerList>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
import BangerList from '~/components/BangerList.vue';
import Announcement from '~/assets/svg/heroicon-announcement-sm.svg'

export default {
  components: {
    Logo,
    NavBar,
    Announcement,
    BangerList
  },
  data() {
    return {
      bangers: [
        {
          title: "Get Free",
          artist: "Diplo ft. Major Lazer",
          link: "http://www.youtube.com",
          img: "https://prettymuchamazing.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTMwMTU4MTAzNzA1NDU3OTM4/major-lazer.webp"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
