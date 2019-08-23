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
.daily-banger-hero {
  width: 100vw;
  height: 600px;
  background: $gray-900;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .banger-hero-card {
    height: 500px;
    width: 450px;
    margin: 0px 50px 0 8px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: $border-radius;

    .banger-card__header {
      position: relative;

      .date-pill {
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px;
        padding: 10px;
        background: $primary-700;
        font-weight: bold;
        border-radius: 25px;
        box-shadow: 0 1px 3px hsla(0, 0%, 0, 0.3);

        color: $primary-darkest;
      }
      img {
        filter: brightness(0.7);
        max-height: 200px;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    // img {
    //   object-fit: cover;
    //   max-height: 200px;
    //   width: 100%;
    //   border-top-left-radius: $border-radius;
    //   border-top-right-radius: $border-radius;
    // }

    .banger-card__body {
      padding: $standard-padding;
      .title {
        margin-top: 0px;
        color: $primary;
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 5px !important;
      }

      .artist {
        font-size: 20px;
        margin-bottom: 15px;
        margin-top: 0 !important;
        color: $gray-400;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
