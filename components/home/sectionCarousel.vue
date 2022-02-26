<template lang="pug">
  v-carousel(
      continuous
      cycle
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    )
      v-carousel-item(
        v-for="(slide, i) in slides"
        :key="i"
      )
        v-sheet(
          height="100%"
          tile
        )
          v-row(
            class="fill-height"
            align="center"
            justify="center"
          )

              v-img(
                contain
                height="100%"
                :src="slide"
              )
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4'
        ],
        slides: [
          'img/carousel/slide-1.png',
          'img/carousel/slide-2.png',
          'img/carousel/slide-3.png'
        ],
      }
    },
  }
</script>
