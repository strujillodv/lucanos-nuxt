<i18n lang="yaml">
es:
  menu:
    1:
      name: "💁 Servicios"
      emoji: "💁"
      icon: "briefcase"
      link: "servicios"
    2:
      name: "✨ Acerca"
      emoji: "✨"
      icon: "creation"
      link: "acerca"
    3:
      name: "💡 Blog"
      emoji: "💡"
      icon: "application-edit"
      link: "blog"
en:
  menu:
    1:
      name: "💁 Services"
      emoji: "💁"
      icon: "briefcase"
      link: "en/services"
    2:
      name: "✨ About"
      emoji: "✨"
      icon: "creation"
      link: "en/about"
    3:
      name: "💡 Blog"
      emoji: "💡"
      icon: "application-edit"
      link: "en/blog"
</i18n>
<template lang="pug">
  v-app
    Header(
      :menu="$t('menu')"
    )
    v-main
      v-container.pa-0(
        fluid
      )
        Nuxt
    v-footer.mb-14.mb-md-0(
      class="grey darken-4 white--text"
    )
      v-card(
        flat
        tile
        width="100%"
        class="grey darken-4 text-center"
      )
        v-card-text
          v-btn(
            class="mx-4"
            icon
          )
            v-icon

        v-divider

        v-card-text( class="white--text")
          | {{ new Date().getFullYear() }} — <strong>LuCanos</strong>

    BottomNav(
      :menu="$t('menu')"
    )

</template>
<script>
export default {
  scrollToTop: true,
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      }
    }
  }
}
</script>
