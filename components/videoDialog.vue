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
        v-img.my-6(
          max-width="700"
          v-bind="attrs"
          v-on="on"
          :src="img"
          :alt="alt"
        )

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
