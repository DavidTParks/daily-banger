<template>
<div class="grid-item" @click="togglePlay(banger)">
  <div class="banger-card">
    <div class="banger-card__header">
      <img :src="banger.songImage.url">
      <div class="date-pill">
        <span>{{ 
          `${new Date(banger.date).toLocaleString('default', {month: 'long'})} ${new Date(banger.date).getDate() + 1}, ${new Date(banger.date).getFullYear()}` 
          }}</span>
      </div>
      <div class="genre-pill">
        <span>{{banger.genre}}</span>
      </div>
      <div class="play-wrapper">
        <a v-if="banger.soundcloudLink === songUrl && songStatus === true && songLoaded"  @click="pauseSong()"><IconPause class="play-icon"></IconPause></a>
        <a v-else @click="playClicked(banger)"><IconPlay class="play-icon"></IconPlay></a>
      </div>
    </div>
    <div class="banger-card__body">
      <div class="title-row">
          <h1 class="title">{{banger.songTitle}}</h1>
      </div>
      <h3 class="artist">{{banger.artist}}</h3>
      <!-- <img src="https://developers.soundcloud.com/assets/logo_big_black-4fbe88aa0bf28767bbfc65a08c828c76.png"/> -->
    </div>
  </div>
</div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg";
import IconPause from "~/assets/svg/icon-pause.svg";
export default {
  name: 'banger-card',
  components: {
    IconPlay,
    IconPause
  },
  props: [
    'banger'
  ],
  data () {
    return {

    }
  },
  methods : {
    playClicked (banger) {
      if(this.songUrl === banger.soundcloudLink) {
        this.$store.commit('resumePlay');
      } else {
        this.$store.commit('setSongLoaded', false);
        this.$store.commit('setSong', banger.soundcloudLink);
        this.$store.commit('setArtist', banger.artist);
      }
    },
    pauseSong() {
      this.$store.commit('pauseSong');
    },
    togglePlay(banger) {
      if(this.songStatus === true) {
        this.playClicked(banger)
      } else {
        this.pauseSong();
      }
    }
  },
  computed: {
    songUrl() {
      return this.$store.state.songCurrentlyPlaying;
    },
    songStatus() {
      return this.$store.state.isSongPlaying;
    },
    songLoaded() {
      return this.$store.state.songLoaded;
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.banger-card {
  background: white;
  height: 100%;
  cursor: pointer;
  border-radius: $border-radius;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 50px -1px;


  &__header {
    position: relative;
    margin-bottom: 10px;

    .date-pill {
      position: absolute;
      top: 0;
      left: 0;
      margin: 15px;
      padding: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
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


    .genre-pill {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      padding: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      background: black;
      font-weight: bold;
      border-radius: 25px;
      box-shadow: 0 1px 3px hsla(0, 0%, 0, 0.2);
      font-size: 12px;
      color: white;

      span {
        ont-size: 12px;
      }
    }
    img {
      filter: brightness(0.7);
      max-height: 200px;
      object-fit: cover;
      width: 100%;
      height: 200px;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    .play-wrapper {
      height: 80px;
      width: 80px;
      margin: auto;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
      .play-icon {
        height: 80px;
        cursor: pointer;
        opacity: 0.8;

        .primary {
          fill: $primary;
        }

        .secondary {
          fill: white;
        }

        &:hover {
          .primary {
            fill: $primary-dark;
          }
        }
      }
    }
  }

  &__body {
    padding: 0 20px 20px 20px;

    .title-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .title {
        margin-top: 0px;
        color: $primary;
        font-weight: 700;
        font-size: 24px;
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
      font-size: 18px;
      margin-bottom: 15px;
      margin-top: 0 !important;
      color: $gray-400;
    }
  }
}
</style>