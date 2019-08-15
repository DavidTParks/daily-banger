export const state = () => ({
    songCurrentlyPlaying: '',
    isSongPlaying: false,
    songLoaded: false,
    artist: '',
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
    },
    setSongLoaded(state, isLoaded)  {
        state.songLoaded = isLoaded;
    },
    setArtist(state, artist) {
        state.artist = artist;
    }
}