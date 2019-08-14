<template>
    <div class="footer">
        <div class="play-bar">
            <div class="play-controls">
                <FastRewind class="fast-rewind"/>
                <IconPlay/>
                <IconPause/>
                <FastForward class="fast-forward"/>
            </div>
        </div>
        <p class="site-footer">© The Daily Banger</p>
    </div>
</template>

<script>
import IconPlay from "~/assets/svg/icon-play.svg"; 
import IconPause from "~/assets/svg/icon-pause.svg"; 
import FastForward from "~/assets/svg/icon-fast-forward.svg"; 
import FastRewind from "~/assets/svg/icon-fast-rewind.svg"; 
export default {
  name: 'footer',
  components: {
      IconPlay,
      IconPause,
      FastForward,
      FastRewind
  }
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.footer {
    margin-top: 50px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    min-height: 70px;
    background: $gray-100;
    // display: flex;
    // justify-content: center;
    align-items: center;

    .play-bar {
        padding: 15px;
        height: 100%;
        background: $gray-300;
        p {
            margin-top: 0;
            margin-bottom: 0;
            text-align: center;
            color: white;
        }

        .play-controls {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            svg {
                cursor: pointer;
                height: 30px;
                width: 30px;
                .primary {
                    fill: white;
                }

                .secondary {
                    fill: $gray-100;
                }
                fill: white;
            }

            .fast-forward {
                .secondary {
                    fill: none;
                }
            }

            .fast-rewind {
                .secondary {
                    fill: none;
                }
            }
        }
    }

    .site-footer {
        text-align: center;
        color: white;
    }
}
</style>