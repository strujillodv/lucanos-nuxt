<i18n lang="yaml">
es:
  msj-hero: "Lleva tu empresa al siguiente nivel y forma parte del futuro digital"
  title-1: "LLeve su empresa al siguiente nivel con nuestros servicios:"
  services:
    tokenization:
      title:
      lottie-url:
      text:
    ntf:
      title:
      lottie-url:
      text:
    suministro:
      title:
      lottie-url:
      text:
    defi:
      title:
      lottie-url:
      text:
en:
  msj-hero: "Read More"
</i18n>
<template lang="pug">
  section
    v-parallax(
      tag="header"
      src="/img/network.webp"
    )
      div.continer-hero
      v-row(
        style="z-index: 1;"
        no-gutters
        aling="center"
      )
        v-col(
          class="col-10 ml-auto mr-auto col-sm-4 order-sm-2 d-flex justify-center"
        )
          lottie-vue-player(
            style="max-width: 280px;"
            src="/lottie/blockchain.json"
          )
        v-col(
          class="col-12 col-sm-6 offset-sm-1 order-sm-1 d-flex justify-center align-self-center"
          aling="center"
        )
          h2(
            class="text-center text-sm-left text-xs-h5 text-sm-h3 text-md-h2"
          )
            | {{$t('msj-hero')}}
    v-container
      v-row(
        no-gutters
        aling="center"
      )
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | {{$t('title-1')}}
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-3"
        )
          v-card.mx-auto.text-center(
            elevation="2"
            max-width="280"
          )
            lottie-vue-player.mx-auto(
              style="max-width: 200px; height: 157px"
              src="/lottie/tokenización.json"
            )
            v-card-title.justify-center
              | Tokenización de Activos
            v-card-subtitle
              | Para inmuebles, vehículos, maquinaría, derechos de autor
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-3"
        )
          v-card.mx-auto.text-center(
            elevation="2"
            max-width="280"
          )
            lottie-vue-player.mx-auto(
              style="max-width: 200px; height: 157px"
              src="/lottie/nft.json"
            )
            v-card-title.justify-center
              | NFT Token no fungible
            v-card-subtitle
              | Cree coleccionables únicos o asegure sus ventas en tickets de eventos
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-3"
        )
          v-card.mx-auto.text-center(
            elevation="2"
            max-width="280"
          )
            lottie-vue-player.mx-auto(
              style="max-width: 200px; height: 157px"
              src="/lottie/cadena-suministro.json"
            )
            v-card-title.justify-center
              | Cadena de Suministro
            v-card-subtitle
              | Maneje un control preciso sobre los productos de su empresa
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-3"
        )
          v-card.mx-auto.text-center(
            elevation="2"
            max-width="280"
          )
            lottie-vue-player.mx-auto(
              style="max-width: 200px; height: 157px"
              src="/lottie/defi.json"
            )
            v-card-title.justify-center
              | DeFi
            v-card-subtitle
              | Finanzas desentralizadas, Soluciones para Fintech, financiación P2P
      v-row(
        no-gutters
        aling="center"
      )
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | Últimas entradas:
        v-col.my-4(
          class="col-12"
        )
          carousel(
            :responsive="{0:{items:1},600:{items:3}}"
            :nav="false"
            :margin="10"
          )
            CardPost(
              v-for="(post, index) in posts"
              :key="index"
              :post="post"
            )
    v-container(
      class="grey darken-4"
      fluid
    )
      v-container
        v-row(
          no-gutters
          aling="center"
        )
          v-col.my-4.align-self-center(
            class="col-12 col-sm-4 white--text"
          )
            h3(
              class="text-h4 text-md-h3"
            )
              | ¿Cómo te podemos ayudar?
            v-card-subtitle
              | Te brindamos la asesoría y las herramientas para que tu empresa antes que nada, pueda emplear de forma correcta la tecnología blockchain
          v-col.my-4.mx-auto(
            class="col-11 col-sm-7"
          )
            <iframe style="width: 100%;" height="400" src="https://www.youtube.com/embed/JMf083F53sU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    v-container
      v-row(
        no-gutters
        aling="center"
      )
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | Formate con un experto
        v-col.my-4.align-self-center(
          class="col-12 col-sm-6"
        )
          img.img-edwin.mx-auto(
            style="width: 100%; max-width: 408px;"
            src="/img/edwin-cano.png"
          )
        v-col.my-4.align-self-center(
          class="col-12 col-sm-6"
        )
          v-card(flat)
            v-card-title(
              class="text-h4 text-md-h3"
            )
              | Edwin Cano
            v-card-subtitle(
              class="text-h5"
            )
              | Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi.
            v-card-actions
              v-btn(
                target="_blank"
                href="https://twitter.com/Canocripto"
                icon
              )
                v-icon mdi-twitter
              v-btn(
                target="_blank"
                href="https://www.facebook.com/profile.php?id=518322728"
                icon
              )
                v-icon  mdi-facebook
              v-btn(
                target="_blank"
                href="https://www.linkedin.com/in/edwin-cano-cofinancer/"
                icon
              )
                v-icon mdi-linkedin
    v-container(
      class="grey darken-4"
      fluid
    )
      v-container
        v-row(
          no-gutters
          aling="center"
        )
          v-col.my-4.mx-auto(
            class="col-11 col-sm-7"
          )
            <iframe style="width: 100%;" height="400" src="https://www.youtube.com/embed/3Zt2zB4QzeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          v-col.my-4.align-self-center(
            class="col-12 col-sm-4 white--text"
          )
            h3(
              class="text-h4 text-md-h3"
            )
              | Aprende aquí el Abecedario Cripto

</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  components: {
    carousel
  },
  async asyncData({ app, error, commit }) {
    const posts = await app.$content(app.i18n.locale + '/blog')
      .where({
        published: true
      })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Página no encontrada' })
      })

    return {
      posts: posts.map((post) => ({
      ...post,
      path: post.path.replace('/es', ''),
    }))
    }
  }
}
</script>
<style>
.continer-hero {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 255, 0.5);
}
</style>
