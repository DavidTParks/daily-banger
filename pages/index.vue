<template>
    <div class="container">
    <BangerList 
    class="animated fadeIn faster main-content" 
    :bangers="bangers"
    ></BangerList>
    </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NavBar from "~/components/NavBar.vue";
import BangerList from "~/components/BangerList.vue";
import SearchBar from "~/components/SearchBar.vue";
import Footer from "~/components/Footer.vue";
import Announcement from "~/assets/svg/heroicon-announcement-sm.svg";
export default {
  components: {
    Logo,
    NavBar,
    Announcement,
    SearchBar,
    BangerList,
    Footer
  },
  async fetch({ store, params }) {
    await store.dispatch('bangers/getBangers', params.slug)
  },
  data() {
    return {

    }
  },
  methods: {
    updateSearch (val) {
      this.searchTerm = val;
    },
    openNavDrawer () {
      this.openNav = !this.openNav;
    },
  },
  computed: {
    bangers() {
      return this.$store.state.bangers.bangers;
    }
  },
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.main-content-wrapper {
  display: flex;
}
.side-nav {
  width: 150px;
  min-width: 200px;
  height: 100vh;
  background: $side-nav-outer;
;
}
</style>
