export const state = () => ({
    songCurrentlyPlaying: '',
    isSongPlaying: false,
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
    }
}