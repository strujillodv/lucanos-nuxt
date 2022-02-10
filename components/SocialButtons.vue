<template lang="pug">
div
  v-btn(
    v-for="(item, index) in social"
    :key="index"
    :href="item.link"
    target="_blank"
    icon
    :color="item.color"
    @click="$emit('click', drawer)"
    large
    class="mx-2"
  )
    v-icon mdi-{{item.name}}

</template>
<script>
export default {
  data: () => ({
    social: [
      {
        name: "facebook",
        link: "https://www.facebook.com/Lucanos-107479854984571",
        color: "primary"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/lucanos_/",
        color: "pink"
      },
      {
        name: "twitter",
        link: "https://twitter.com/Lucanos_",
        color: "primary"
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/channel/UC0XcbFpOy_ZaYvH2ulzz78A",
        color: "red"
      }
    ]
  })
}
</script>
