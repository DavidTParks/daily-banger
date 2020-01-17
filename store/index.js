export const state = () => ({
    songCurrentlyPlaying: '',
    isSongPlaying: false,
    songLoaded: false,
    loading: false,
    artist: '',
    songObject: {

    },
    currentSongProgress: 0,
    relativeSongProgress: 0,
    seekValue: 0,
    player: '',

    navDrawerOpened: false
})

export const mutations = {
    setSong (state, song) {
        state.songCurrentlyPlaying = song;
        state.loading = true;
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
    },
    setCurrentProgress(state, progress) {
        state.currentSongProgress = progress;
    },
    setRelativePosition(state, relativePosition) {
        state.relativeSongProgress = relativePosition;
    },
    setSeekValue(state, seekVal) {
        state.seekValue = seekVal;
    },
    setPlayer(state, player) {
        state.player = player;
    },
    toggleNavDrawer(state) {
        state.navDrawerOpened = !state.navDrawerOpened;
    }
}