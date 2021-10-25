<i18n lang="yaml">
es:
  msj-hero: "Lleva tu empresa al siguiente nivel y forma parte del futuro digital"
  title-1: "LLeve su empresa al siguiente nivel con nuestros servicios:"
  title-2: "Últimas entradas:"
  title-3: "Formate con un experto"
  title-4: "Aprende aquí el Abecedario Cripto"
  subtitle-3: "Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi."
  services:
    tokenization:
      title: "Tokenización de Activos"
      lottieUrl: "/lottie/tokenización.json"
      text: "Para inmuebles, vehículos, maquinaría, derechos de autor"
    ntf:
      title: "NFT Token no fungible"
      lottieUrl: "/lottie/nft.json"
      text: "Cree coleccionables únicos o asegure sus ventas en tickets de eventos"
    suministro:
      title: "Cadena de Suministro"
      lottieUrl: "/lottie/cadena-suministro.json"
      text: "Maneje un control preciso sobre los productos de su empresa"
    defi:
      title: "DeFi"
      lottieUrl: "/lottie/defi.json"
      text: "Finanzas desentralizadas, Soluciones para Fintech, financiación P2P"
  title-video-1: "¿Cómo te podemos ayudar?"
  text-video-1: "Te brindamos la asesoría y las herramientas para que tu empresa antes que nada, pueda emplear de forma correcta la tecnología blockchain."
  title: "Inicio"
  description: "Empresa dedicada a enseñar sobre las diferentes aplicaciones de la tecnología blockchain y como su impacto esta haciendo historia"
  image: "https://lucanos.co/img/network.webp"
en:
  msj-hero: "Take your business to the next level and be part of the digital future"
  title-1: "Take your business to the next level with our services:"
  title-2: "Last entries:"
  title-3: "Train with an expert"
  title-4: "Learn the Crypto Alphabet here"
  subtitle-3: "Investment Coach in Crypto Assets Instructor in Blockchain and DeFi."
  services:
    tokenization:
      title: "Asset Tokenization"
      lottieUrl: "/lottie/tokenización.json"
      text: "For real estate, vehicles, machinery, copyright"
    ntf:
      title: "Non-fungible NFT Token"
      lottieUrl: "/lottie/nft.json"
      text: "Create unique collectibles or secure your sales on event tickets"
    suministro:
      title: "Supply chain"
      lottieUrl: "/lottie/cadena-suministro.json"
      text: "Manage precise control over your company's products"
    defi:
      title: "DeFi"
      lottieUrl: "/lottie/defi.json"
      text: "Decentralized finance, Fintech solutions, P2P financing"
  title-video-1: "How can we help?"
  text-video-1: "We provide you with the advice and tools so that your company, first of all, can correctly use blockchain technology."
  title: "Home"
  description: "Company dedicated to teaching about the different applications of blockchain technology and how its impact is making history"
  image: "https://lucanos.co/img/network.webp"
</i18n>
<template lang="pug">
  section
    //- Hero
    v-parallax(
      alt="Aprendizaje de Blockchain"
      tag="header"
      loading="lazy"
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
            aria-label="Lottie blockchain"
          )
        v-col(
          class="col-12 col-sm-6 offset-sm-1 order-sm-1 d-flex justify-center align-self-center"
          aling="center"
        )
          h2(
            class="text-center text-sm-left text-xs-h5 text-sm-h3 text-md-h2"
          )
            | {{$t('msj-hero')}}
    //- End Hero

    //- Section Services
    v-container
      v-row(
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
          v-for="(item, index) in $t('services')"
          :key="index"
          class="col-12 col-sm-6 col-md-3"
        )
          v-card.mx-auto.text-center(
            elevation="2"
            min-height="290"
          )
            lottie-vue-player.mx-auto(
              style="max-width: 200px; height: 157px"
              :src="item.lottieUrl"
              aria-disabled="true"
              aria-selected="false"
            )
            v-card-title.justify-center(
              style="word-break: normal;"
            )
              | {{item.title}}
            v-card-subtitle(
              style="word-break: normal;"
            )
              | {{item.text}}

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
            | {{$t('title-2')}}
        v-col.my-4(
          class="col-12"
        )
          v-slide-group(
            multiple
            show-arrows
          )
            CardPost(
              v-for="(post, index) in posts"
              :key="index"
              :post="post"
            )
    //- Section Services

    //- Video 1
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
              | {{$t('title-video-1')}}
            v-card-subtitle
              | {{$t('text-video-1')}}
          v-col.my-4.mx-auto(
            class="col-11 col-sm-7"
          )
            youtube(
              width="100%"
              video-id="JMf083F53sU"
            )
    //- End Video 1

    //- Coachin
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
            | {{$t('title-3')}}
        v-col.my-4.align-self-center(
          class="col-12 col-sm-6"
        )
          img.img-edwin.mx-auto.d-flex(
            src="/img/edwin-cano.webp"
            width="280"
            height="280"
            loading="lazy"
            alt="Edwin Cano"
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
              | {{$t('subtitle-3')}}
            v-card-actions
              v-btn(
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/Canocripto"
                icon
                value="twitter"
              )
                v-icon mdi-twitter
              v-btn(
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=518322728"
                icon
                value="facebook"
              )
                v-icon  mdi-facebook
              v-btn(
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/edwin-cano-cofinancer/"
                icon
                value="linkedin"
              )
                v-icon mdi-linkedin
    //- End Coachin

    //- Video 2
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
            youtube(
              width="100%"
              video-id="3Zt2zB4QzeM"
            )
          v-col.my-4.align-self-center(
            class="col-12 col-sm-4 white--text"
          )
            h3(
              class="text-h4 text-md-h3"
            )
              | {{$t('title-4')}}
    //- End Video 2

</template>
<script>
export default {
  async asyncData({ app, error, commit }) {
    const posts = await app.$content(app.i18n.locale + '/blog')
      .where({
        published: true
      })
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Página no encontrada' })
      })

    return {
      posts: posts.map((post) => ({
      ...post,
      path: post.path.replace('/es', '')
    }))
    }
  },
  head() {
    return {
      title: this.$t('title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('description'),
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "page",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://lucanos.co`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://lucanos.co`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t('title'),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t('description'),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$t('image'),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$t('image'),
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://lucanos.co`,
        },
      ],
    };
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
