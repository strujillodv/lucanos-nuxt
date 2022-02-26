<i18n lang="yaml">
es:
  menu:
    1:
      name: "Servicios"
      icon: "img/menu/services.webp"
      link: "servicios"
    2:
      name: "Acerca"
      icon: "img/menu/about.webp"
      link: "acerca"
    3:
      name: "Blog"
      icon: "img/menu/blog.webp"
      link: "blog"
    4:
      name: "Videos"
      icon: "img/menu/videos.webp"
      link: "videos"
    5:
      name: "Monedas"
      icon: "img/menu/coins.webp"
      link: "monedas"
    6:
      name: "Cursos"
      icon: "img/menu/learning.webp"
      link: "cursos"
    7:
      name: "Conferencias"
      icon: "img/menu/conferences.webp"
      link: "conferencias"
    8:
      name: "Curiosides"
      icon: "img/menu/curiosities.webp"
      link: "curiosidades"
    9:
      name: "Podcast"
      icon: "img/menu/podcast.webp"
      link: "podcast"
en:
  menu:
    1:
      name: "Services"
      icon: "img/menu/services.webp"
      link: "en/services"
    2:
      name: "About"
      icon: "img/menu/about.webp"
      link: "en/about"
    3:
      name: "Blog"
      icon: "img/menu/blog.webp"
      link: "en/blog"
    4:
      name: "Videos"
      icon: "img/menu/videos.webp"
      link: "en/videos"
    5:
      name: "Coins"
      icon: "img/menu/coins.webp"
      link: "en/coins"
    6:
      name: "Courses"
      icon: "img/menu/learning.webp"
      link: "en/courses"
    7:
      name: "Conferences"
      icon: "img/menu/conferences.webp"
      link: "conferences"
    8:
      name: "Curiosities"
      icon: "img/menu/curiosities.webp"
      link: "curiosities"
    9:
      name: "Podcast"
      icon: "img/menu/podcast.webp"
      link: "podcast"
</i18n>
<template lang="pug">
  v-app

    v-navigation-drawer(
      fixed
      app
      v-model="drawer"
      temporary
      width="100%"
      right
      style="z-index:1000;"
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

      v-item-group( active-class="primary" )
        v-container
          v-col.offset-md-3(
            cols="12"
            md="6"
          )
            v-row
              v-col(
                cols="6"
                md="4"
                v-for="(item, index) in $t('menu')"
                :key="index"
              )
                v-item
                  v-card(
                    flat
                    nuxt
                    :to="'/'+  item.link"
                  )
                    v-img(
                      :src="item.icon"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                      height="100px"
                    )
                      <v-card-title v-text="item.name"></v-card-title>
              v-col(cols="12")
                SocialButtons.mx-auto


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
    this.$store.dispatch('crypto/getIndex')
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
