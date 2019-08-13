<template>
  <div class="banger-list-wrapper">
    <div class="banger-card" v-for="(banger, index) in bangers" :key="index">
      <div class="banger-card__header">
        <img :src="banger.img">
        <div class="date-pill">
          <span>{{banger.posted}}</span>
        </div>
      </div>
      <div class="banger-card__body">
        <h1 class="title">{{banger.title}}</h1>
        <h3 class="artist">{{banger.artist}}</h3>
        <!-- <div class="play-source-row"> -->

        <IconPlay class="play-icon"></IconPlay>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg";
export default {
  name: "banger-list",
  components: {
    IconPlay
  },
  props: ["bangers"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
@import "~/assets/sass/bangerlist.scss";
</style>
