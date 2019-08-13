<template>
  <div class="container">
    <NavBar></NavBar>
    <BangerList :bangers="bangers"></BangerList>
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
</style>
