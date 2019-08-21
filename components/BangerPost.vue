<template>
    <div class="article_wrapper">
        
    </div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg"; 
import IconPause from "~/assets/svg/icon-pause.svg"; 
import FastForward from "~/assets/svg/icon-fast-forward.svg"; 
import FastRewind from "~/assets/svg/icon-fast-rewind.svg"; 
export default {
  name: 'footer',
  components: {
      IconPlay,
      IconPause,
      FastForward,
      FastRewind
  },
  methods : {
    playSong () {
        if(this.songPlaying) {
            this.$store.commit('resumePlay');
        }
    },
    pauseSong() {
      this.$store.commit('pauseSong');
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
    isSongLoaded() {
        return this.$store.state.songLoaded;
    },
    artist() {
        return this.$store.state.artist;
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";

</style>