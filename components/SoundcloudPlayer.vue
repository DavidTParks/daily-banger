<template>
    <div class="player-wrapper" v-show="songCurrentlyPlaying">
        <iframe id="so" scrolling="no" frameborder="0"
        allow="autoplay"
        :src="computedUrl"
        @load="iFramePreload"
        ></iframe>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'soundcloud-player',
    props: ['songUrl'],
    data() {
        return {
            playing: false,
            player: '',
            soundcloudUrl: '',
            song: {
                cover: '',
                title: '',
                artist: '',
                permalink_url: '',
                description: '',
                currentPosition: 0,
                duration: 0,
                created_at: '',
            },
        }
    },
    mounted () {
        console.log("Mounting again")
        const IFrame = document.getElementById('so');
        this.player = SC.Widget(IFrame);
        this.player.bind(SC.Widget.Events.PLAY_PROGRESS, (e) => {
            this.song.currentPosition = e.currentPosition;
        });
        this.$on('newValueSet', (newValue) => {
            this.player.seekTo(newValue[0]);
        })
    },
    watch : {
        songCurrentlyPlaying: function(oldVal, newVal) {
            console.log("songCurrentlyPlaying watcher firing");
            this.player.load(this.songCurrentlyPlaying);
        },
        songStatus: function(newVal) {
            console.log("Song status firing");
            if(!newVal) {
                this.player.pause();
            } else {
                this.player.play();
            }
        }
    },
    methods: {
        iFramePreload() {
            setTimeout(this.iFrameLoaded, 1000);
        },
        iFrameLoaded () {
            console.log("Iframe Loaded firing")
            this.player.getCurrentSound((song) => {
                this.song = song;
                this.$store.commit('setSongLoaded', true);
                this.$store.commit('setSongMetadata', song);
            })
            this.player.play();
        },
    },
    computed: {
        computedUrl () {
            const base = "https://w.soundcloud.com/player/?url=";
            return base + this.songUrl;
        },
        songCurrentlyPlaying() {
            return this.$store.state.songCurrentlyPlaying;
        },
        songStatus() {
            return this.$store.state.isSongPlaying;
        },
        songMetadata() {
            return this.$store.state.songObject;
        },
        percentThroughSong() {
            return this.songMetadata.currentPosition / this.songMetadata.duration;
        }
    }
}
</script>

<style lang="scss">
.player-wrapper {
    // display: none;

    iframe {
        z-index: -100;
        opacity: 0;
        position: absolute;
        left: -9999em;
        top: 0;
    }
}
</style>