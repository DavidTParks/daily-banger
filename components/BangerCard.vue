<template>
  <div class="banger-card">
    <div class="banger-card__header">
      <img :src="banger.img">
      <div class="date-pill">
        <span>{{banger.posted}}</span>
      </div>
    </div>
    <div class="banger-card__body">
      <div class="title-row">
          <h1 class="title">{{banger.title}}</h1>
          <h3 class="genre">{{banger.genre}}</h3>
      </div>
      <h3 class="artist">{{banger.artist}}</h3>
      <IconPlay class="play-icon"></IconPlay>
      <img src="https://developers.soundcloud.com/assets/logo_big_black-4fbe88aa0bf28767bbfc65a08c828c76.png"/>
    </div>
  </div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg";
export default {
  name: 'banger-card',
  components: {
    IconPlay
  },
  props: [
    'banger'
  ],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.banger-card {
  height: 300px;
  width: 300px;
  background: white;
  border-radius: $border-radius;
  margin: 10px 20px 15px 8px;
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
      box-shadow: 0 1px 3px hsla(0, 0%, 0, 0.2);
      font-size: 12px;
      color: $primary-darkest;

      span {
        font-size: 12px;
      }
    }
    img {
      filter: brightness(0.7);
      max-height: 150px;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &__body {
    padding: $standard-padding;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .title {
        margin-top: 0px;
        color: $primary;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 5px !important;
      }

      .genre {
        margin-top: 0;
        margin-bottom: 0;
        color: $secondary-darkest;
        font-size: 14px;
      }
    }

    .artist {
      font-size: 16px;
      margin-bottom: 15px;
      margin-top: 0 !important;
      color: $gray-400;
    }

    .play-icon {
      height: 50px;
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
</style>