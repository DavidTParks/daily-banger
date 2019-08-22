<template>
  <div class="container" v-if="!isLoading">
      <BangerPost 
      :songTitle="currentBanger.fields.songTitle"
      :date="currentBanger.fields.date"
      :genre="currentBanger.fields.genres[0]"
      :artist="currentBanger.fields.artist"
      :article-content="currentBanger.fields.articleContent.content[0].content[0].value"
      :song-image="currentBanger.fields.image.fields.file.url"
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
  computed: {
    currentBanger() {
        return this.$store.state.banger.currentBanger
    },
    isLoading() {
        return this.$store.state.banger.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('banger/getBangerBySlug', params.slug)
  },
  // head () {
  //   return {
  //     title: `${this.banger.songTitle} by ${this.banger.artist} - The Daily Banger`,
  //     meta: [
  //       { hid: 'description', name: 'description', content: this.banger.articleContent },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         content: `${this.banger.songTitle}, ${this.banger.artist}, ${this.banger.genre}`
  //       },
  //       //Open Graph
  //       { name: 'og:title', content: `${this.banger.songTitle} by ${this.banger.artist} - The Daily Banger` },
  //       { name: 'og:description', content: this.banger.articleContent },
  //       { name: 'og:image', content: this.banger.songImage.url },
  //       { name: 'og:url', content: `https://www.thedailybanger.com/banger/${this.$route.params.slug}` },
  //       { name: 'og:type', content: 'article' },

  //       // Twitter Card
  //       { name: 'twitter:card', content: 'summary_large_image'},
  //       { name: 'twitter:site', content: '@twitter' },
  //       { name: 'twitter:title', content: `${this.banger.songTitle} by ${this.banger.artist} - The Daily Banger` },
  //       { name: 'twitter:description', content: this.banger.articleContent },
  //       { name: 'twitter:image', content: this.banger.songImage.url },
  //       { name: 'twitter:image:alt', content: `Song cover for ${this.banger.songTitle} by ${this.banger.artist}` }
  //     ]
  //   }
  // },
  // apollo: {
  //   banger: {
  //     query: gql`query banger($slug: String!) {
  //       banger(filter: {urlSlug: {
  //         eq: $slug
  //       } }) {
  //         artist
  //         date
  //         id
  //         songTitle
  //         songImage {
  //           url
  //         }
  //         soundcloudLink
  //         articleContent
  //         urlSlug
  //         genre
  //       }
  //     }`,
  //     preFetch({ route }) {
  //       return {
  //         slug: route.params.slug
  //       }
  //     },
  //     variables() {
  //       return {
  //         slug: this.slug
  //       }
  //     },
  //     result({data}) {
  //       console.log(data);
  //     }
  //   }
  // },
  layout: 'default',
  mounted: function() {
    console.log(this.$route.params.slug);
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
