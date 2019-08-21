<template>
  <div class="container" v-if="banger">
    <h1>{{banger.songTitle}}</h1>
    <h2>{{banger.artist}}</h2>
    <h3>{{banger.genre}}</h3>
    <p>{{banger.articleContent}}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  apollo: {
    banger: {
      query: gql`query banger($slug: String!) {
        banger(filter: {urlSlug: {
          eq: $slug
        } }) {
          artist
          date
          id
          songTitle
          songImage {
            url
          }
          soundcloudLink
          articleContent
          urlSlug
          genre
        }
      }`,
      preFetch({ route }) {
        return {
          slug: route.params.slug
        }
      },
      variables() {
        return {
          slug: this.slug
        }
      },
      result({data}) {
        console.log(data);
      }
    }
  },
  mounted: function() {
    
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
</style>
