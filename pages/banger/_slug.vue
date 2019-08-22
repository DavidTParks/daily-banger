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
  head () {
    return {
      title: `${this.currentBanger.fields.songTitle} by ${this.currentBanger.fields.artist} - The Daily Banger`,
      meta: [
        { hid: 'description', name: 'description', content: this.currentBanger.fields.articleContent.content[0].content[0].value },
        {
          hid: `keywords`,
          name: 'keywords',
          content: `${this.currentBanger.fields.songTitle}, ${this.currentBanger.fields.artist}, ${this.currentBanger.fields.genres[0]}`
        },
        //Open Graph
        { name: 'og:title', content: `${this.currentBanger.fields.songTitle} by ${this.currentBanger.fields.artist} - The Daily Banger` },
        { name: 'og:description', content: this.currentBanger.fields.articleContent.content[0].content[0].value },
        { name: 'og:image', content: this.currentBanger.fields.image.fields.file.url },
        { name: 'og:url', content: `https://www.thedailybanger.com/banger/${this.$route.params.slug}` },
        { name: 'og:type', content: 'article' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@TheDailyBanger2' },
        { name: 'twitter:title', content: `${this.currentBanger.fields.songTitle} by ${this.currentBanger.fields.artist} - The Daily Banger` },
        { name: 'twitter:description', content: this.currentBanger.fields.articleContent.content[0].content[0].value },
        { name: 'twitter:image', content: this.currentBanger.fields.image.fields.file.url },
        { name: 'twitter:image:alt', content: `Song cover for ${this.currentBanger.fields.songTitle} by ${this.currentBanger.fields.artist}` }
      ]
    }
  },
  layout: 'default',
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
</style>
