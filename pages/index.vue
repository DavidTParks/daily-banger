<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        SVG
      </h1>
      <Announcement class="announcement"/>
      <h2 class="subtitle">
        My impeccable Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
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
