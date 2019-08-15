<template>
  <div class="container" :class="{'nav-drawer-opened' : openNav}">
    <SearchBar @searchUpdated="updateSearch"/>
    <BangerList 
    class="animated fadeIn faster main-content" 
    :bangers="filterBangers"
    ></BangerList>
    <SoundcloudPlayer
    />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NavBar from "~/components/NavBar.vue";
import BangerList from "~/components/BangerList.vue";
import SearchBar from "~/components/SearchBar.vue";
import Footer from "~/components/Footer.vue";
import SoundcloudPlayer from "~/components/SoundcloudPlayer.vue";
import Announcement from "~/assets/svg/heroicon-announcement-sm.svg";
import gql from "graphql-tag";
export default {
  components: {
    Logo,
    NavBar,
    Announcement,
    SearchBar,
    BangerList,
    SoundcloudPlayer,
    Footer
  },
  apollo: {
    allBangers: gql`{
        allBangers(orderBy: date_DESC) {
          artist
          date
          id
          songTitle
          songImage {
            url
          }
          soundcloudLink
          urlSlug
          genre
        }
      }`
  },
  data() {
    return {
      searchTerm: '',
      openNav: false,
      playing: false,
      player: '',
      soundcloudUrl: '',
      song: {
        cover: '',
        title: '',
        artist: '',
        permalink_url: '',
        description: '',
        currentPosition: 0,
        duration: 0,
        created_at: '',
      },
      bangers: [
        {
          title: "Get Free",
          artist: "Diplo ft. Major Lazer",
          link: "http://www.youtube.com",
          posted: "August 12, 2019",
          genre: "Electronic",
          img:
            "https://prettymuchamazing.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTMwMTU4MTAzNzA1NDU3OTM4/major-lazer.webp"
        },
        {
          title: "Deadmau5",
          artist: "The Veldt",
          link: "https://www.youtube.com/watch?v=_esYONwdKuw",
          genre: "Trance",
          posted: "August 11, 2019",
          img:
            "https://www.billboard.com/files/styles/article_main_image/public/media/deadmau5-2016-billboard-1548.jpg"
        },
        {
          title: "Flume",
          artist: "Smoke & Retribution",
          link: "https://www.youtube.com/watch?v=4fAzM5cI5FM",
          posted: "August 10, 2019",
          genre: "Electronic",
          img: "https://i1.sndcdn.com/artworks-000144960640-uux2wb-t500x500.jpg"
        }
      ]
    };
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
    filterBangers: function() {
      return this.allBangers.filter(banger => {
        return banger.songTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) 
            || banger.genre.toLowerCase().includes(this.searchTerm.toLowerCase()) 
            || banger.artist.toLowerCase().includes(this.searchTerm.toLowerCase());
      })
    },
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
