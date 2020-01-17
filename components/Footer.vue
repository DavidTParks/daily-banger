<template>
  <footer class="fixed bottom-0 flex min-w-screen w-screen z-30 bg-gray-900 py-4 px-4 justify-between flex-col sm:flex-row h-48 sm:h-auto">
    <div class="flex h-full flex-1">
      <img class="shadow-lg h-12 w-12 mr-2" v-if="isSongLoaded && songMetadata" :src="songMetadata.artwork_url">
      <p class="text-white flex flex-col" v-if="isSongLoaded && songMetadata">
        Now Playing
        <span class="text-yellow-400">{{artist}} - {{songMetadata.title}}</span>
      </p>
    </div>
    <div class="play-bar flex flex-col justify-center items-center flex-1">
      <div class="duration-controls flex items-center">
        <span class="mr-2 text-white" v-if="isSongLoaded && songMetadata">{{millisToMinutesAndSeconds(currentSongProgress)}}</span>
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
        <span class="ml-2 text-white"
          v-if="isSongLoaded && songMetadata"
        >{{millisToMinutesAndSeconds(songMetadata.duration)}}</span>
        <!-- <span v-if="isSongLoaded && songMetadata">{{relativeSongProgress}}</span> -->
      </div>
      <div class="play-controls flex hidden">
        <div class="actions flex">
          <FastRewind class="fast-rewind w-8 h-8"/>
          <IconPlay class="w-8 h-8" v-if="!songStatus" @click="playSong"/>
          <IconPause class="w-8 h-8" v-else @click="pauseSong"/>
          <FastForward class="fast-forward w-8 h-8"/>
        </div>
      </div>
    </div>
    <div class="item flex-1 ml-auto flex justify-end items-center px-4">
      <a class="mr-2" href="https://www.instagram.com/thedailybanger_/" target="_blank">
        <i class="fab fa-instagram instagram-logo fa-2x text-white fill-current"></i>
      </a>
      <a class="ml-2" href="https://twitter.com/thedailybanger2" target="_blank">
        <i class="fab fa-twitter instagram-logo fa-2x text-white fill-current"></i>
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

<style>
@import "~/assets/sass/variables.scss";


</style>