<template>
  <div class="container">
    <h1>Test</h1>
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

.announcement {
.heroicon-outline {
  fill: #626262; 
}

.heroicon-component-fill {
  fill: white; 
}

.heroicon-component-accent {
  fill: #7ACFC0; 
}

.heroicon-shadows {
  fill: #626262;
  opacity: .4; 
}
}
</style>
