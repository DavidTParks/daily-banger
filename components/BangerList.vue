<template>
  <div class="banger-list-wrapper">
    <div class="banger-card" v-for="(banger, index) in bangers" :key="index">
      <div class="banger-card__header">
        <img :src="banger.img"/>
      </div>
      <div class="banger-card__body">
        <h1 class="title">{{banger.title}}</h1>
        <h3 class="artist">{{banger.artist}}</h3>
        <IconPlay class="play-icon"></IconPlay>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlay from '~/assets/svg/icon-play.svg';
export default {
  name: 'banger-list',
  components: {
    IconPlay
  },
  props: ['bangers'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.banger-list-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .banger-card {
    height: 400px;
    width: 400px;
    background: white;
    border-radius: $border-radius;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .15), 0 3px 6px rgba(0, 0, 0, .1);

    &__header {
      img {
        filter: brightness(.7);
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
        margin-top: 10px;
        color: $gray-500;
        margin-bottom: 0 !important;
      }

      .artist {
        margin-top: 0 !important;
        color: $gray-100;
      }

      .play-icon {
        height: 70px;

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
