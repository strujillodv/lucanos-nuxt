<template lang="pug">
  section
    carousel(
      :responsive="{0:{items:1},600:{items:3}}"
      :nav="false"
      :margin="10"
    )
      <img src="https://placeimg.com/200/200/any?1">
      <img src="https://placeimg.com/200/200/any?2">
      <img src="https://placeimg.com/200/200/any?3">
      <img src="https://placeimg.com/200/200/any?4">
      <img src="https://placeimg.com/200/200/any?1">
      <img src="https://placeimg.com/200/200/any?2">
      <img src="https://placeimg.com/200/200/any?3">
      <img src="https://placeimg.com/200/200/any?4">
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "About",
  components: {
    carousel
  }
}
</script>
