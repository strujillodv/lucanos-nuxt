<template lang="pug">
  v-container
    section.videos-container
      v-card(
        v-for="(item, index) in videos"
        :key="index"
        :loading="skeleton"
        style="overflow: hidden;"
        flat
      )
        <template slot="progress">
          v-progress-linear(
            color="deep-purple"
            height="10"
            indeterminate
          )
        </template>

        videoDialog(
          :img="item.snippet.thumbnails.medium.url"
          :alt="item.snippet.title"
          :videoId="item.id.videoId"
        )

        v-card-text(
          class="mx-0 my-0 px-0 pt-0"
        ) {{item.snippet.title}}

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
