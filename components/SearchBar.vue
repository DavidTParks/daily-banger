<template>
  <div class="search-bar-wrapper">
    <div class="input-wrapper">
      <input placeholder="Search" class="search-input" v-model="searchTerm"/>
      <i class="fas fa-search"></i>
    </div>

  </div>
</template>

<script>
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
        text-indent: 35px;
        box-shadow: none;
        width: auto;
        border: none !important;
        outline: none;
        font-size: 16px;
        border-radius: 25px;
        height: 40px;
        width: 200px;
        background: #e4e4e4;
        display: flex;
        align-items: center;
      }

      i {
        color: $gray-700;
        position: absolute;
        top: 14px;
        left: 10px;
        bottom: 0;
        z-index: 2;
      }
    }
  }
</style>