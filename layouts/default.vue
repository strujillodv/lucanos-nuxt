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
      v-container
        Nuxt
    BottomNav(
      :menu="$t('menu')"
    )
</template>
<script>
export default {
  scrollToTop: true
}
</script>
