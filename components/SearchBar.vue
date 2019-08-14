<template>
  <div class="search-bar-wrapper">
    <div class="input-wrapper">
      <input placeholder="Search" class="search-input" v-model="searchTerm" @input="searchUpdated($event)"/>
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
  },
  methods: {
    searchUpdated: function(e) {
      this.$emit('searchUpdated', e.target.value);
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
  .search-bar-wrapper {
    display: flex;
    flex-dirction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: $gray-light;
    border-bottom: 1px solid $gray-900;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);

    .input-wrapper {
      position: relative;
      
      .search-input {
        text-indent: 40px;
        box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
        width: auto;
        border: none !important;
        outline: none;
        font-size: 20px;
        border-radius: 25px;
        height: 40px;
        width: 250px;
        background: #e4e4e4;
        display: flex;
        align-items: center;
      }

      i {
        color: $gray-700;
        position: absolute;
        top: 14px;
        left: 15px;
        bottom: 0;
        z-index: 2;
      }
    }
  }
</style>