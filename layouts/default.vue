<i18n lang="yaml">
es:
  menu:
    1:
      name: "Servicios"
      icon: "briefcase"
      link: "servicios"
    2:
      name: "Acerca"
      icon: "creation"
      link: "acerca"
    3:
      name: "Blog"
      icon: "application-edit"
      link: "blog"
    4:
      name: "Videos"
      icon: "youtube"
      link: "videos"
    5:
      name: "Monedas"
      icon: "currency-btc"
      link: "monedas"
    6:
      name: "Cursos"
      icon: "school"
      link: "cursos"
    7:
      name: "Conferencias"
      icon: "account-supervisor-circle"
      link: "conferencias"
en:
  menu:
    1:
      name: "Services"
      icon: "briefcase"
      link: "en/services"
    2:
      name: "About"
      icon: "creation"
      link: "en/about"
    3:
      name: "Blog"
      icon: "application-edit"
      link: "en/blog"
    4:
      name: "Videos"
      icon: "youtube"
      link: "en/videos"
    5:
      name: "Coins"
      icon: "currency-btc"
      link: "en/coins"
    6:
      name: "Courses"
      icon: "school"
      link: "en/courses"
    7:
      name: "Conferences"
      icon: "account-supervisor-circle"
      link: "conferences"
</i18n>
<template lang="pug">
  v-app

    v-navigation-drawer(
      app
      v-model="drawer"
      right
    )
      v-app-bar(
        flat
        color="transparent"
      )
        v-spacer
        v-btn(
          icon
          @click="drawer=!drawer"
        )
          v-icon mdi-close
      v-list
        v-list-item-group
          v-list-item(
            v-for="(item, index) in $t('menu')"
            :key="index"
            nuxt
            :to="'/'+  item.link"
          )
            v-list-item-icon
              v-icon mdi-{{item.icon}}
            v-list-item-content
              v-list-item-title {{item.name}}

    //- Header
    Header(
      @click="drawerToogle"
    )
    //- End Header

    //- Container
    v-main
      v-container.pa-0(
        fluid
      )
        CarouselCrypto
        Nuxt

      //- End Container

      Newsleter

      v-footer.mb-14.mb-md-0(
        class="grey darken-4 white--text"
      )
        v-card(
          outlined
          tile
          width="100%"
          class="grey darken-4 text-center white--text"
        )
          v-card-actions.justify-center
            v-btn(
              text
              class="white--text"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/_lucanos"
              color="transparent"
              elevation="0"
              value="twitter"
            )
              v-icon mdi-twitter
              | Twitter
            v-btn(
              text
              class="white--text"
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/Lucanos-107479854984571"
              color="transparent"
              elevation="0"
              value="facebook"
            )
              v-icon  mdi-facebook
              | Faceboock
            v-btn(
              text
              class="white--text"
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/lucanos_/"
              color="transparent"
              elevation="0"
              value="instagram"
            )
              v-icon mdi-instagram
              | Instagram

          v-divider

          v-card-text( class="white--text")
            | {{ new Date().getFullYear() }} — <strong>LuCanos</strong>

    //- BottomNav(
    //-   :menu="$t('menu')"
    //- )

    v-fab-transition
      v-btn(
        fab
        large
        dark
        bottom
        right
        fixed
        color="teal"
        rel="noreferrer"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=573002911600&text=Me%20interesa%20conocer%20sobre..."
      )
        v-icon mdi-whatsapp

</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      drawer: false,
    };
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      }
    }
  },
  created() {
    this.$store.dispatch('crypto/getCoins')
    this.$store.dispatch('youtube/getVideos')
  },
  methods: {
    drawerToogle(drawer) {
      if (this.drawer) {
        this.drawer = drawer
      } else {
        this.drawer = !drawer
      }
    }
  },
}
</script>
