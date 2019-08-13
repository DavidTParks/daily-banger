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
.banger-list-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;

  .banger-card {
    height: 400px;
    width: 350px;
    background: white;
    border-radius: $border-radius;
    margin: 10px 20px 0 8px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);

    &__header {
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

      .play-icon {
        height: 80px;
        cursor: pointer;

        .primary {
          fill: $primary;
        }

        .secondary {
          fill: white;
        }
      }
    }
  }
}
</style>
