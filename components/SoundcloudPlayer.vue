<template>
    <div class="player-wrapper" v-show="songCurrentlyPlaying">
        <iframe id="so" scrolling="no" frameborder="0"
        allow="autoplay"
        :src="computedUrl"
        @load="iFrameLoaded"
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
        const IFrame = document.getElementById('so');
        this.player = SC.Widget(IFrame);
        this.$on('newValueSet', (newValue) => {
            this.player.seekTo(newValue[0]);
        });

        this.player.bind(SC.Widget.Events.PLAY_PROGRESS, (progress) => {
            this.$store.commit('setCurrentProgress', progress.currentPosition);
            this.$store.commit('setRelativePosition', progress.relativePosition);
        });

        this.player.bind(SC.Widget.Events.FINISH, () => {
            console.log("Song finished");
        });
        
        this.player.bind(SC.Widget.Events.PLAY, () => {
            console.log("Song played");
        });
        this.player.bind(SC.Widget.Events.PAUSE, () => {
            console.log("Song paused");
        });
        this.player.bind(SC.Widget.Events.READY, () => {
            console.log("Iframe ready");
        });
    },
    watch : {
        songCurrentlyPlaying: function(newVal) {
            this.player.load(this.songCurrentlyPlaying);
        },
        seekValue: function(newVal) {
            this.player.seekTo(newVal);
        },
        songStatus: function(newVal) {
            if(!newVal) {
                this.player.pause();
            } else {
                this.player.play();
            }
        }
    },
    methods: {
        iFrameLoaded () {
            console.log("Iframe loaded firing");
            this.player.bind(SC.Widget.Events.READY, () => {
                console.log("Reading inside loaded firing");
                this.player.getCurrentSound((song) => {
                    this.song = song;
                    this.$store.commit('setSongLoaded', true);
                    this.$store.commit('setSongMetadata', song);
                    this.player.play();
                });
            });
        },
    },
    computed: {
        computedUrl () {
            const base = "https://w.soundcloud.com/player/?url=";
            return base;
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
        currentSongProgress() {
            return this.$store.state.currentSongProgress;
        },
        seekValue() {
            return this.$store.state.seekValue; 
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