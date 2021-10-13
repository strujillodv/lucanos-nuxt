
<template lang="pug">
  v-app-bar(
      class="pl-md-10 pr-md-10"
      app
      hide-on-scroll
      flat
      fixed
      )
      nuxt-link( :to="(this.$i18n.locale === 'es') ? '/' : '/' + this.$i18n.locale")
        v-img(
          contain
          position="left center"
          max-height="48"
          max-width="200"
          alt="Lucanos el mundo que esperas"
          :src="require('@/assets/img/logo.svg')"
        )
      v-spacer
      nav(class="d-none d-md-flex")
        v-btn.ml-1.mr-1(
          large
          text
          v-for="(item, index) in menu"
          :key="index"
          nuxt
          :to="'/'+ item.link"
          ) {{ item.name }}

      //- v-btn(
      //-   text
      //-   v-for="locale in availableLocales"
      //-   :key="locale.code"
      //-   nuxt
      //-   :to="switchLocalePath(locale.code)"
      //- ) {{ locale.name }}

      //- v-btn(icon)
      //-   v-icon mdi-magnify
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
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
