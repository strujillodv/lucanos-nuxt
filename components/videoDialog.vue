<template lang="pug">
  v-row(justify="center")
    v-dialog(
      v-model="dialog"
      fullscreen
      persistent
    )

      template(
        v-slot:activator="{ on, attrs }"
      )
        div.videoyt-container
          v-img.py-4.videoyt-container-video(
            :src="img"
            :alt="alt"
          )
          div.videoyt-container-button
            v-btn.videoyt-container-button-active(
              v-bind="attrs"
              v-on="on"
              fab
            )
              v-icon mdi-play


      v-card(
        flat
      )
        v-btn(
          fab
          @click="close"
          style="position: absolute; right: 20px; top: 20px; z-index: 10;"
        )
          v-icon mdi-close
        youtube(
          ref="youtube"
          :video-id="videoId"
          :player-vars="playerVars"
          atoplay
          style="width: 100%; height: 100%; position: absolute"
        )

</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "/img/blog/defi-blog.webp"
    },
    alt: {
      type: String,
      default: "title"
    },
    videoId: {
      type: String,
      default: "JMf083F53sU"
    }
  },
  data () {
    return {
      dialog: false,
      playerVars: {
        autoplay: 1,
        end: 0
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    close() {
      this.dialog = false
      this.player.pauseVideo()
    }
  }
}
</script>
<style lang="scss" scoped>
.videoyt-container {
  position: relative;
  overflow: hidden;

  &-video {
    width: 100%;
    max-width: 700px;
    margin: auto;
    transition: transform .25s ease;
  }

  &-button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.57);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &-active {
      transform: scale(0);
      transition: transform .25s ease;
    }

  }
  &:hover {
    .videoyt-container-video {
      transform: scale(1.5);
    }
    .videoyt-container-button {
      opacity: 1;
    }
    .videoyt-container-button-active  {
      transform: scale(1.2);
    }

  }
}
</style>
