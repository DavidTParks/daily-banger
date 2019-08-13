<template>
  <div class="search-bar-wrapper">
    <div class="input-wrapper">
      <input placeholder="Search" class="search-input" v-model="searchTerm"/>
      <i class="fas fa-search"></i>
    </div>
    <select v-model="selectedGenre">
      <option disabled value="">Genre</option>
      <option v-for="genre in genres" :key="genre" :value="genre">
        {{genre}}
      </option>
    </select>
  </div>
</template>

<<script>
export default {
  name: 'search-bar',
  data() {
    return {
      searchTerm: '',
      selectedGenre: '',
      genres: [
        'Electronic',
        'Trance',
        'Hip-Hop',
        'EDM',
        'R&B',
        'Dubstep',
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
  .search-bar-wrapper {
    width: 100vw;
    display: flex;
    flex-dirction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: $gray-light;

    .input-wrapper {
      position: relative;
      
      .search-input {
        box-shadow: none;
        border: none !important;
        outline: none;
        height: 40px;
        width: 200px;
        background: #e4e4e4;
        display: flex;
        align-items: center;
      }

      i {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
      }
    }
  }
</style>