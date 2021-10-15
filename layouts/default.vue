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
    //- Header
    Header(
      :menu="$t('menu')"
    )
    //- End Header

    //- Container
    v-main
      v-container.pa-0(
        fluid
      )

        v-slide-group(
          multiple
          show-arrows
        )
          v-btn(
            v-for="(n, i) in coins"
            :key="i"
            text
            small
          )
            v-avatar(tile size="20")
              v-img(:src="n.image")
            span &nbsp; {{ n.symbol }} - ${{ n.current_price }} -
            span(
              :class="[ n.price_change_percentage_24h > 0 ? 'red--text' : 'green--text']"
            ) &nbsp;{{n.price_change_percentage_24h}}%

        Nuxt

    //- End Container


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

    BottomNav(
      :menu="$t('menu')"
    )

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
      coins: []
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
    this.$axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((res) =>{
        this.coins = res.data;
      })
  }
}
</script>
