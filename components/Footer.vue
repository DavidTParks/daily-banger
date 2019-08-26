<template>
  <footer class="site_footer">
    <div class="now-playing">
      <img v-if="isSongLoaded && songMetadata" :src="songMetadata.artwork_url">
      <p v-if="isSongLoaded && songMetadata">
        Now Playing
        <span>{{artist}} - {{songMetadata.title}}</span>
      </p>
    </div>
    <div class="play-bar">
      <div class="duration-controls">
        <span v-if="isSongLoaded && songMetadata">{{millisToMinutesAndSeconds(currentSongProgress)}}</span>
        <svg @click="seekSong($event)" class="progress-bar" width="200" height="10" data-value="40">
          <style>
  .bg,
  .meter {
    fill: none;
    stroke-width: 20px;
    stroke-miterlimit: round;
  }
  .meter {
    transition: stroke-dashoffset;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
  }
          </style>
          <path class="bg" stroke="#ccc" d="M0 10, 200 10"></path>
          <path
            :style="{'stroke-dashoffset' : 200 -(relativeSongProgress * 200)}"
            class="meter"
            stroke="#CBA406"
            d="M0 10, 200 10"
          ></path>
        </svg>
        <span
          v-if="isSongLoaded && songMetadata"
        >{{millisToMinutesAndSeconds(songMetadata.duration)}}</span>
        <!-- <span v-if="isSongLoaded && songMetadata">{{relativeSongProgress}}</span> -->
      </div>
      <div class="play-controls">
        <div class="actions">
          <FastRewind class="fast-rewind"/>
          <IconPlay v-if="!songStatus" @click="playSong"/>
          <IconPause v-else @click="pauseSong"/>
          <FastForward class="fast-forward"/>
        </div>
      </div>
    </div>
    <div class="item">
      <a href="https://www.instagram.com/thedailybanger_/" target="_blank">
        <ion-icon class="instagram-logo" size="large" name="logo-instagram"></ion-icon>
      </a>
    <a href="https://twitter.com/thedailybanger2" target="_blank">
        <ion-icon class="instagram-logo" size="large" name="logo-twitter"></ion-icon>
      </a>     
    </div>

    <!-- <p class="site-footer">© The Daily Banger</p> -->
  </footer>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg";
import IconPause from "~/assets/svg/icon-pause.svg";
import FastForward from "~/assets/svg/icon-fast-forward.svg";
import FastRewind from "~/assets/svg/icon-fast-rewind.svg";
export default {
  name: "footer",
  components: {
    IconPlay,
    IconPause,
    FastForward,
    FastRewind
  },
  created() {},
  methods: {
    playSong() {
      if (this.songPlaying) {
        this.$store.commit("resumePlay");
      }
    },
    pauseSong() {
      this.$store.commit("pauseSong");
    },
    playNextSong() {},
    seekSong(e) {
      if (this.songMetadata) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top; //y position within the element.
        this.$store.commit(
          "setSeekValue",
          (x / 200) * this.songMetadata.duration
        );
      }
    },
    millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
  },
  computed: {
    songPlaying() {
      return this.$store.state.songCurrentlyPlaying;
    },
    songStatus() {
      return this.$store.state.isSongPlaying;
    },
    songMetadata() {
      return this.$store.state.songObject;
    },
    currentSongProgress() {
      return this.$store.state.currentSongProgress;
    },
    relativeSongProgress() {
      return this.$store.state.relativeSongProgress;
    },
    isSongLoaded() {
      return this.$store.state.songLoaded;
    },
    songDuration() {
      return this.$store.state.songDuration;
    },
    artist() {
      return this.$store.state.artist;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.site_footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  min-height: 80px;
  background: $primary-darkest;
  // display: flex;
  // justify-content: center;
  align-items: center;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .item {
    flex: 1;
    text-align: right;
    margin-right: 24px;

    .instagram-logo {
      fill: white;
      height: 40px;
      width: 40px;
      margin-right: 15px;

      svg: {
        fill: white;
      }

      &:hover {
          fill: $secondary;
      }

      icon-icon {
        margin-right: 15px;
      }
    }

    svg {
      fill: white !important;
    }
  }

  .now-playing {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 24px;

    img {
      // margin-right: 15px;
      padding-right: 15px;
      height: 60px;
      width: 60px;
      object-fit: contain;
    }

    p {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-size: 18px;
      color: white;

      span {
        color: $secondary;
      }
    }
  }

  .play-bar {
    padding: 15px;
    flex: 1;
    height: 100%;
    background: $primary-darkest;

    .progress-bar {
    }

    .duration-controls {
      text-align: center;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      svg {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      color: $gray-700;
    }

    .play-controls {
      display: flex;
      flex-direction: row;
      // justify-content: space-between;
      align-items: center;

      .actions {
        flex: 1;
        text-align: center;
      }

      svg {
        cursor: pointer;
        height: 30px;
        width: 30px;
        .primary {
          fill: white;
        }

        .secondary {
          fill: $gray-100;
        }
        fill: white;
      }

      .fast-forward {
        .secondary {
          fill: none;
        }
      }

      .fast-rewind {
        .secondary {
          fill: none;
        }
      }
    }
  }
}

icon-icon {
  fill: white;
}

@media (max-width: 555px) {
  .site_footer {
    flex-direction: column !important;
  }

  .item {
      margin-right: 0 !important; 
  }

  .now-playing {
      margin-left: 12px !important;
  }
}
</style>