export const state = () => ({
    songCurrentlyPlaying: '',
    isSongPlaying: false,
    songObject: {

    }
})

export const mutations = {
    setSong (state, song) {
        state.songCurrentlyPlaying = song;
        state.isSongPlaying = true;
    },
    pauseSong (state) {
        state.isSongPlaying = false;
    },
    resumePlay(state) {
        state.isSongPlaying = true;
    },
    setSongMetadata(state, metadata) {
        state.songObject = metadata;
    }
}