<template lang="pug">
  v-bottom-navigation.d-md-none(
    fixed
  )
    v-btn(
      v-for="(item, index) in menu"
      :key="index"
      :value="item.name"
      nuxt
      :to="'/'+item.link"
    )
      span {{item.name.split(' ')[1]}}
      v-icon mdi-{{item.icon}}
</template>
<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => ({
        menu: {
          name: '',
          link: ''
        }
      }),
      require: true
    }
  }
}
</script>
