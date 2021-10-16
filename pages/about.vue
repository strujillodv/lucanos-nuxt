<i18n lang="yaml">
es:
  title: "Quienes somos"
  title-2: "A quién va dirigido"
  title-3: "Conoce nuestro equipo de trabajo"
  p-1: "Personas – que estén interesadas en aprender sobre nuevas tecnologías y las aplicaciones del blockchain."
  p-2: "Universidades – Ofreciendo seminarios de formación enfocados a los estudiantes para que aprendan sobre Blockchain."
  p-3: "Empresas – que deseen iniciar la implementación de la tecnología blockchain para mejorar sus procesos internos."
  p-4: "Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi."
  p-5: "Director comercial Artista NFTs"
  p-6: "Diseño gráfico y Desarrollo de software"
  description: "Lucanos es una compañía tecnológica dedicada a la educación e implementación de la tecnología blockchain en diferentes industrias de la economía."
  image: "https://lucanos.co/img/about.webp"
en:
  title: "About Us"
  title-2: "Who is it for"
  title-3: "Meet our work team"
  p-1: "People - who are interested in learning about new technologies and blockchain applications."
  p-2: "Universities - Offering training seminars focused on students to learn about Blockchain."
  p-3: "Companies - who wish to start the implementation of blockchain technology to improve their internal processes."
  p-4: "Investment Coach in Crypto Assets Instructor in Blockchain and DeFi."
  p-5: "Commercial Director Artist NFTs"
  p-6: "Graphic Design and Software Development"
  description: "Lucanos is a technology company dedicated to the education and implementation of blockchain technology in different industries of the economy."
  image: "https://lucanos.co/img/about.webp"
</i18n>
<template lang="pug">
  section
    v-parallax(
      tag="header"
      src="/img/about.webp"
      height="400"
    )
      div.continer-hero
      v-row(
        style="z-index: 1; align-items: end;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 {{$t('title')}}
    v-container
      v-row.justify-center(
        no-gutters
        aling="center"
      )
        v-col.my-4(
          class="col-12"
        )
          p.body-1 {{$t('description')}}
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | {{$t('title-2')}}
        v-col.my-4.align-self-center.body-1(
          class="col-12 col-sm-4"
        )
          p 🙋 {{$t('p-1')}}
          p 🏫 {{$t('p-2')}}
          p 🏭 {{$t('p-3')}}
        v-col.my-4.align-self-center(
          class="col-12 col-sm-8"
        )
          lottie-vue-player.mx-auto(
            style="max-width: 450px;"
            src="/lottie/about.json"
            aria-label="Lottie About"
          )
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | {{$t('title-3')}}

        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-4"
        )
          v-card.mx-auto.text-center(
            flat
            max-width="280"
          )
            v-avatar(
              color="indigo"
              size="200"
            )
              img.img-edwin.mx-auto(
                src="/img/edwin-cano2.webp"
              )
            v-card-title.justify-center
              | Edwin Cano
            v-card-subtitle
              | {{$t('p-4')}}
            v-card-actions.justify-center
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
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-4"
        )
          v-card.mx-auto.text-center(
            flat
            max-width="280"
          )
            v-avatar(
              color="indigo"
              size="200"
            )
              img.img-edwin.mx-auto(
                style="object-fit: cover;"
                src="/img/olgalu.webp"
              )
            v-card-title.justify-center
              | Lucia Hernández
            v-card-subtitle
              | {{$t('p-5')}}
            v-card-actions.justify-center
              v-btn(
                target="_blank"
                href="https://twitter.com/olgalu_nfts"
                icon
              )
                v-icon mdi-twitter
              v-btn(
                target="_blank"
                href="https://www.instagram.com/olgalu_nfts"
                icon
              )
                v-icon  mdi-instagram
        v-col.my-2.justify-center(
          class="col-12 col-sm-6 col-md-4"
        )
          v-card.mx-auto.text-center(
            flat
            max-width="280"
          )
            v-avatar(
              color="indigo"
              size="200"
            )
              img.img-edwin.mx-auto(
                style="object-fit: cover;"
                src="/img/Sergio-trujillo.webp"
              )
            v-card-title.justify-center
              | Sergio Trujillo
            v-card-subtitle
              | {{$t('p-6')}}
            //- v-card-actions.justify-center
            //-   v-btn(
            //-     target="_blank"
            //-     href="#"
            //-     icon
            //-   )
            //-     v-icon mdi-twitter
            //-   v-btn(
            //-     target="_blank"
            //-     href="#"
            //-     icon
            //-   )
            //-     v-icon  mdi-instagram

</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "About",
  components: {
    carousel
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
          content: `https://lucanos.co${this.$route.fullPath}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://lucanos.co${this.$route.fullPath}`,
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
          href: `https://lucanos.co${this.$route.fullPath}`,
        },
      ],
    };
  }
}
</script>
