<i18n lang="yaml">
es:
  msj-hero: "Lleva tu empresa al siguiente nivel y forma parte del futuro digital"
  title-1: "LLeve su empresa al siguiente nivel con nuestros servicios:"
  title-2: "Últimas entradas:"
  title-3: "Formate con un experto"
  title-4: "Aprende aquí el Abecedario Cripto"
  subtitle-3: "Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi."
  title-video-1: "¿Cómo te podemos ayudar?"
  text-video-1: "Te brindamos la asesoría y las herramientas para que tu empresa, pueda emplear de forma correcta la tecnología blockchain."
  title: "Inicio"
  description: "Empresa dedicada a enseñar sobre las diferentes aplicaciones de la tecnología blockchain y como su impacto esta haciendo historia"
en:
  msj-hero: "Take your business to the next level and be part of the digital future"
  title-1: "Take your business to the next level with our services:"
  title-2: "Last entries:"
  title-3: "Train with an expert"
  title-4: "Learn the Crypto Alphabet here"
  subtitle-3: "Investment Coach in Crypto Assets Instructor in Blockchain and DeFi."
  title-video-1: "How can we help?"
  text-video-1: "We provide you with the advice and tools so that your company, first of all, can correctly use blockchain technology."
  title: "Home"
  description: "Company dedicated to teaching about the different applications of blockchain technology and how its impact is making history"
</i18n>
<template lang="pug">
  v-container.px-0(
    fluid
    style="overflow-x: hidden;"
  )
    //- Section Hero
    homeSectionHero
    //- End Hero

    //- Section Services
    homeSectionServices
    //- End Section Services

    v-row.mb-10(
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
      v-col.my-10.pb-10(
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
    v-container.my-10(
      class="grey darken-4 text-center skewx"
      fluid
    )
      v-container

        v-col.my-4.align-self-center(
          class="col-12  white--text"
        )
          h3.py-6(
            class="text-h4 text-md-h3"
          )
            | {{$t('title-video-1')}}
          p
            | {{$t('text-video-1')}}

          v-card(
            flat
            color="transparent"
          )
            v-responsive(:aspect-ratio="16/6")
              videoDialog(
                img="/img/video1.png"
                :alt="$t('title-video-1')"
                videoId="JMf083F53sU"
              )

    //- End Video 1


    homeSectionMetagame.py-16

    homeSectionWallets

    Allies

    //- Video 2
    v-container(
      class="grey darken-4 text-center skewx skewx "
      fluid
    )
      v-container

        v-col.my-4.align-self-center(
          class="col-12 white--text"
        )
          h3.py-6(
            class="text-h4 text-md-h3"
          )
            | {{$t('title-4')}}

          v-card(
            flat
            color="transparent"
          )
            v-responsive(:aspect-ratio="16/6")

              videoDialog(
                img="/img/video2.png"
                :alt="$t('title-4')"
                videoId="3Zt2zB4QzeM"
              )
    //- End Video 2

    homeSectionKits.py-16
    homeSectionCarousel

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
          hid: "og:locale",
          property: "og:locale",
          content: "es"
        },
        {
          hid: "og:locale:alternate",
          property: "og:locale:alternate",
          content:"en",
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
          content: "https://siasky.net/GACfDhcIek1vU0kOuICD7ic_qFQKxdb_pB6IWLqWmU-pmQ",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://siasky.net/GACfDhcIek1vU0kOuICD7ic_qFQKxdb_pB6IWLqWmU-pmQ",
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
.skewx {
  position: relative;
  z-index: 10;
}
.skewx::before {
  content: "";
  display: block;
  width: 150%;
  height: 150px;
  transform: skewY(-3deg);
  position: absolute;
  top: -20px;
  left: -50%;
  z-index: -1;
  background-color: #212121;
}
.skewx::after {
  content: "";
  display: block;
  width: 150%;
  height: 150px;
  transform: skewY(-3deg);
  position: absolute;
  bottom: -80px;
  left: -50%;
  z-index: -1;
  background-color: #212121;
}
</style>
