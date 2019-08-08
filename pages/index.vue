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
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCYSMpnlhbewtGZ-57lnnh0oKyz4m0COmW1eI_HVgyKd36KctxA"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
