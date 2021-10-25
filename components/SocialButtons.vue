<template lang="pug">
div
  v-btn(
    v-for="(item, index) in social"
    :key="index"
    :href="item.link"
    target="_blank"
    icon
    @click="$emit('click', drawer)"
  )
    v-icon mdi-{{item.name}}

</template>
<script>
export default {
  data: () => ({
    social: [
      {
        name: "facebook",
        link: "https://www.facebook.com/Lucanos-107479854984571"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/lucanos_/"
      },
      {
        name: "twitter",
        link: "https://twitter.com/Lucanos_"
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/channel/UC0XcbFpOy_ZaYvH2ulzz78A"
      }
    ]
  })
}
</script>
