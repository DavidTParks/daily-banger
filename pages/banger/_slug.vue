<template>
  <div class="container">
      <h1>{{banger.songTitle}}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    banger: {
      query: gql`query Banger($slug: String!) {
        banger(filter: {urlSlug: {
          eq: $slug
        } }) {
          songTitle
        }
      }`,
      preFetch({ route }) {
        return {
          slug: route.params.slug
        }
      },
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  data() {
    return {
    }
  },
  mounted: function() {
    
  },
  methods: {

  },
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
</style>
