<template lang="pug">
  v-container
    section.videos-container
      v-skeleton-loader(
        v-for="(item, index) in videos"
        :key="index"
        type="image"
        :loading="skeleton"
      )
        youtube(
          height="150"
          width="100%"
          :video-id="item.id.videoId"
        )
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    skeleton: true
  }),
  computed: {
    ...mapState({
    'videos': state => state.youtube.videos
    })
  },
  created () {
    this.changeData()
  },
  methods: {
    changeData () {
      setInterval(() => {
        this.skeleton = false
      }, 2000)
    }
  },
}
</script>
<style>
  .videos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 290px);
    gap: 16px;
    justify-content: center;
  }
  .video-youtube{
    position: relative;
  }
</style>
