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
  head () {
    return {
    title: `${banger.songTitle} by ${banger.artist} - The Daily Banger`,
      meta: [
        { hid: 'description', name: 'description', content: banger.articleContent },
        {
          hid: `keywords`,
          name: 'keywords',
          content: `${banger.songTitle}, ${banger.artist}, ${banger.genre}`
        },
        //Open Graph
        { name: 'og:title', content: `${banger.songTitle} by ${banger.artist} - The Daily Banger` },
        { name: 'og:description', content: banger.articleContent },
        { name: 'og:image', content: banger.songImage },
        { name: 'og:url', content: `https://www.thedailybanger.com/${this.$route.params.slug}` },
        { name: 'og:type', content: 'website' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@twitter' },
        { name: 'twitter:title', content: `${banger.songTitle} by ${banger.artist} - The Daily Banger` },
        { name: 'twitter:description', content: banger.articleContent },
        { name: 'twitter:image', content: `${banger.songImage}` },
        { name: 'twitter:image:alt', content: `Song cover for ${banger.songTitle} by ${banger.artist}` }
      ]
    }
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
