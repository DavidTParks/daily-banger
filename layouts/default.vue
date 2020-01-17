<template>
  <div class="min-h-screen relative pb-48">
    <SideNav/>
    <NavBar/>
    <nuxt />
    <SoundCloudPlayer/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import SideNav from '~/components/SideNav.vue';
import Footer from '~/components/Footer.vue';
import SoundCloudPlayer from '~/components/SoundcloudPlayer.vue';
export default {
  components: {
    NavBar,
    SideNav,
    Footer,
    SoundCloudPlayer
  },
}
</script>

<style>
.navDrawer {
  transition: all 0.3s;
}
/* .main {
  position: relative;
  min-height: 100vh;
  
} */
</style>
