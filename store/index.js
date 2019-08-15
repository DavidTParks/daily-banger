export const state = () => ({
    songCurrentlyPlaying: '',
    isSongPlaying: false,
})

export const mutations = {
    setSong (state, song) {
        state.songCurrentlyPlaying = song;
    }
}