
<template lang="pug">
  v-app-bar(
    class="pl-md-10 pr-md-10"
    app
    hide-on-scroll
    fixed
    height="80"
    color="white"

  )
    <template v-slot:extension>
      CarouselCrypto
    </template>

    nuxt-link( :to="(this.$i18n.locale === 'es') ? '/' : '/' + this.$i18n.locale")
      v-img(
        contain
        position="left center"
        max-width="180"
        alt="Lucanos el mundo que esperas"
        :src="require('@/assets/img/logo.svg')"
      )
    v-spacer

    SocialButtons.d-none.d-md-block

    v-spacer
    v-btn(
      text
      v-for="locale in availableLocales"
      :key="locale.code"
      nuxt
      :to="switchLocalePath(locale.code)"
    ) {{ locale.name }}
    v-btn(
        icon
        @click="$emit('click', drawer)"
      )
        v-icon mdi-menu

</template>
<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
<style>
.v-toolbar__extension {
  padding: 0 !important;
  margin: 0 !important;
  position: absolute;
  left: 0;
  right: 0;
}
</style>
