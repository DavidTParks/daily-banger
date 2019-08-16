<template>
    <div class="player-wrapper" v-show="songPlaying">
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
        songPlaying: function(oldVal, newVal) {
                        console.log(oldVal,newVal);
            this.player.load(this.songPlaying);
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
        iFramePreload() {
            setTimeout(this.iFrameLoaded, 1000);
        },
        checkUrl(url) {
            const pattern = /^https:\/\/soundcloud\.com\/[a-z1-9-]*\/[a-z1-9-]*\/?$/;
            if (url === undefined) {
                return null
            } else {
                return url.match(pattern)
            }
        },
        iFrameLoaded () {
            this.player.getCurrentSound((song) => {
                this.song = song;
                this.$store.commit('setSongLoaded', true);
                this.$store.commit('setSongMetadata', song);
            })
            this.player.play();
        },
        loadSong () {
            this.player.load(this.soundcloudUrl);
        },
        playNewSong(url) {
            this.soundcloudUrl = url;
            this.loadSong();
        } 
    },
    computed: {
        computedUrl () {
            const base = "https://w.soundcloud.com/player/?url=";
            return base + this.songUrl;
        },
        songPlaying() {
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