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
  section
    //- Section Hero
    homeSectionHero
    //- End Hero

    //- Section Services
    homeSectionServices
    //- End Section Services

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
      class="grey darken-4 text-center"
      fluid
    )
      v-container

        v-col.my-4.align-self-center(
          class="col-12  white--text"
        )
          h3(
            class="text-h4 text-md-h3"
          )
            | {{$t('title-video-1')}}
          v-card-subtitle
            | {{$t('text-video-1')}}


          videoDialog(
            img="/img/video1.png"
            :alt="$t('title-video-1')"
            videoId="JMf083F53sU"
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

    Allies

    //- Video 2
    v-container(
      class="grey darken-4 text-center"
      fluid
    )
      v-container

        v-col.my-4.align-self-center(
          class="col-12 white--text"
        )
          h3(
            class="text-h4 text-md-h3"
          )
            | {{$t('title-4')}}

          videoDialog(
            img="/img/video2.png"
            :alt="$t('title-4')"
            videoId="3Zt2zB4QzeM"
          )
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
</style>
