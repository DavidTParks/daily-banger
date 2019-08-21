<template>
    <div class="article-wrapper">
        <div class="social-shares">

        </div>
        <div class="article">
            <h1 class="article-header">{{songTitle}}</h1>
            <h2 class="article-subtitle">{{artist}}</h2>
            <div class="pill-wrapper">
                <h5 class="article-date">{{ `${new Date(date).toLocaleString('default', {month: 'long'})} ${new Date(date).getDate() + 1}, ${new Date(date).getFullYear()}` }}</h5>
                <h5 class="article-genre-pill">{{genre}}</h5>
            </div>
            <img class="article-image" :src="`${songImage.url}?w=668&auto=format`"/>
            <p class="article-content">{{articleContent}}</p>
            <div class="play-song-row">
                <a>
                <IconPlay/>
                </a>
            </div>
        </div>
        <!-- <div class="related-content">
            <h3>Related Content</h3>
            <div class="related-song-card">
                Related Song 1
            </div>
            <div class="related-song-card">
                Related Song 2
            </div>
        </div> -->
    </div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg"; 
import IconPause from "~/assets/svg/icon-pause.svg"; 
import FastForward from "~/assets/svg/icon-fast-forward.svg"; 
import FastRewind from "~/assets/svg/icon-fast-rewind.svg"; 
export default {
  name: 'banger-post',
  head () {
    return {
    title: `${this.songTitle} by ${this.artist} - The Daily Banger`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.articleContent },
        {
          hid: `keywords`,
          name: 'keywords',
          content: `${this.songTitle}, ${this.artist}, ${this.genre}`
        }
      ]
    }
  },
  components: {
    IconPlay
  },
  props: [
      'songTitle', 
      'date',
      'genre',
      'artist',
      'articleContent',
      'songImage'
  ],
  methods : {
    playSong () {
        if(this.songPlaying) {
            this.$store.commit('resumePlay');
        }
    },
    pauseSong() {
      this.$store.commit('pauseSong');
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/variables.scss";
.article-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    flex-flow:row wrap;

    .article {
        // border-top: 8px solid $primary-600;
        padding: 24px;
        background: white;
        border-radius: $border-radius;
        flex-basis: 50%;
        margin: 15px;
        box-shadow: $content-box-shadow;

        .article-header {
            margin-top: 0 !important;
            color: $primary-darkest;
            font-size: $aticle-headline-size;
            font-family: $article-headline-font !important;
            line-height: $article-headline-line-height;
            font-weight: $article-headline-font-weight;
        }

        .article-subtitle {
            font-weight: 600;
             color: $primary-dark;
             font-size: 30px;
        }

        .article-date {
            color: $gray-500;
            font-size: 16px;
        }

        .article-image {
            height: 300px;
            width: 100%;
            object-fit: cover;
            margin-top: 10px;
        }
        

        .article-content {
            font-size: $article-content-size;
            line-height: $article-content-line-height;
            color: $article-content-font-color;
            font-weight: $article-content-font-weight;
            margin-bottom: 24px;
        }

        .play-song-row {
            height: 100px;
            width: 100px;
            display: flex;
            flex-direction: row;
            a {
                cursor: pointer;
                bottom: 1px solid black;
            }

            svg {
                height: 100px;
                width: 100px;
            }
            .primary {
                fill: $primary;
            }

            .secondary {
                fill: white;
            }
        }

        .pill-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-self: flex-end;
            align-items: baseline;

            .article-genre-pill {
                box-shadow: $button-box-shadow;
                margin-left: 15px;
                padding: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
                cursor: pointer;
                background: $gray-900;
                font-size: 14px;
                border-radius: $border-radius;

                &:hover {
                    background: $gray-800;
                }
            }
        }
    }

    .related-content {
        display: flex;
        flex-basis: 50%;
        padding: $standard-padding;
    }
}
h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}

@media(max-width: 1333px) {
  .article, .related-content {
    flex-basis: 50% !important;
  }
}
@media(max-width: 1073px) {
   .article, .related-content{
    flex-basis: 60% !important;
  }
}
@media(max-width: 815px) {
  .article, .related-content {
    flex-basis: 80% !important;
  }
}
@media(max-width: 555px) {
  .article, .related-content{
    flex-basis: 100% !important;
  }
}
</style>