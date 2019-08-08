<template>
  <div class="container">
    <NavBar></NavBar>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
import Announcement from '~/assets/svg/heroicon-announcement-sm.svg'

export default {
  components: {
    Logo,
    NavBar,
    Announcement
  }
}
</script>

<style lang="scss">
</style>
