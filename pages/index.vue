<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="daily-banger-hero">
      <div class="banger-hero-card" :key="1">
        <div class="banger-card__header">
          <img :src="bangers[0].img">
          <div class="date-pill">
            <span>{{bangers[0].posted}}</span>
          </div>
        </div>
        <div class="banger-card__body">
          <h1 class="title">{{bangers[0].title}}</h1>
          <h3 class="artist">{{bangers[0].artist}}</h3>
          <!-- <div class="play-source-row"> -->

          <IconPlay class="play-icon"></IconPlay>
        </div>
      </div>
    </div>
    <BangerList :bangers="bangers.slice(1)"></BangerList>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NavBar from "~/components/NavBar.vue";
import BangerList from "~/components/BangerList.vue";
import Announcement from "~/assets/svg/heroicon-announcement-sm.svg";

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
          posted: "August 12, 2019",
          img:
            "https://prettymuchamazing.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTMwMTU4MTAzNzA1NDU3OTM4/major-lazer.webp"
        },
        {
          title: "Deadmau5",
          artist: "The Veldt",
          link: "https://www.youtube.com/watch?v=_esYONwdKuw",
          posted: "August 11, 2019",
          img:
            "https://www.billboard.com/files/styles/article_main_image/public/media/deadmau5-2016-billboard-1548.jpg"
        },
        {
          title: "Flume",
          artist: "Smoke & Retribution",
          link: "https://www.youtube.com/watch?v=4fAzM5cI5FM",
          posted: "August 10, 2019",
          img: "https://i1.sndcdn.com/artworks-000144960640-uux2wb-t500x500.jpg"
        }
      ]
    };
  }
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
</style>
