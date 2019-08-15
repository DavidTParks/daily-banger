<template>
    <div class="player-wrapper">
        <iframe id="so" width="100%" height="160" scrolling="no" frameborder="0"
        allow="autoplay"
        :src="computedUrl"
        @load="iFramePreload"
        ></iframe>
    </div>
</template>

<script>
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
            console.log("Playing song");
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
        }
    }
}
</script>
