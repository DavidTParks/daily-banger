<template>
  <div class="banger-list-wrapper">
    <div class="banger-card" v-for="(banger, index) in bangers" :key="index">
      <h1>{{banger.title}}</h1>
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

  .banger-card {
    height: 400px;
    width: 400px;
    background: red;
  }
}
</style>
