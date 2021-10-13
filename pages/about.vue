<template lang="pug">
  section
    v-parallax(
      tag="header"
      src="https://lucanos.co/wp-content/uploads/2021/08/workspace.jpg"
      height="400"
    )
      div.continer-hero
      v-row(
        style="z-index: 1; align-items: end;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 Quienes somos
    v-container
      v-row(
        no-gutters
        aling="center"
      )
        v-col.my-4(
          class="col-12"
        )
          h3 Lucanos es una compañía tecnológica dedicada a la educación e implementación de la tecnología blockchain en diferentes industrias de la economía.
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | A quién va dirigido
        v-col.my-4.align-self-center(
          class="col-12 col-sm-4"
        )
          p 🙋 Personas – que estén interesadas en aprender sobre nuevas tecnologías y las aplicaciones del blockchain.
          p 🏫 Universidades – Ofreciendo seminarios de formación enfocados a los estudiantes para que aprendan sobre Blockchain.
          p 🏭 Empresas – que deseen iniciar la implementación de la tecnología blockchain para mejorar sus procesos internos.
        v-col.my-4.align-self-center(
          class="col-12 col-sm-8"
        )
          lottie-vue-player.mx-auto(
            style="max-width: 450px;"
            src="/lottie/about.json"
          )
        v-col.my-4(
          class="col-12"
        )
          h2(
            class="text-center text-xs-h4 text-md-h3"
          )
            | Conoce nuestro equipo de trabajo

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
                src="/img/edwin-cano2.png"
              )
            v-card-title.justify-center
              | Edwin Cano
            v-card-subtitle
              | Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi.
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
                src="/img/olgalu.jpeg"
              )
            v-card-title.justify-center
              | Lucia Hernández
            v-card-subtitle
              | Director comercial Artista NFTs
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
                src="/img/Sergio-trujillo.jpg"
              )
            v-card-title.justify-center
              | Sergio Trujillo
            v-card-subtitle
              | Diseño gráfico y Desarrollo de software
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
  }
}
</script>
