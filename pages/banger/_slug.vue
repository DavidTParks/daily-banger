<template>
  <div class="container" v-if="banger">
      <BangerPost 
      :songTitle="banger.songTitle"
      :date="banger.date"
      :genre="banger.genre"
      :artist="banger.artist"
      :article-content="banger.articleContent"
      :song-image="banger.songImage"
      />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import BangerPost from "~/components/BangerPost.vue";
export default {
  components: {
    BangerPost
  },
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
  layout: 'default',
  mounted: function() {
    
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
</style>
