<template>
  <div class="banger-list-wrapper">
    <div class="banger-card" v-for="(banger, index) in bangers" :key="index">
      <div class="banger-card__header">
        <img :src="banger.img"/>
      </div>
      <div class="banger-card__body">
        <h1>{{banger.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banger-list',
  components: {

  },
  props: ['bangers'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.banger-list-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .banger-card {
    height: 400px;
    width: 400px;
    background: $gray-900;
    border-radius: $border-radius;

    &__header {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    .banger-card__body {
      padding: $standard-padding;
    }
  }
}
</style>
