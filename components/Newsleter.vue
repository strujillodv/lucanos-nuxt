<i18n lang="yaml">
es:
  title-2: "Formate con un experto"
  subtitle-3: "Coach de Inversión en Criptoactivos Instructor en Blockchain y DeFi."

en:
  title-2: "Train with an expert"
  subtitle-3: "Investment Coach in Crypto Assets Instructor in Blockchain and DeFi."

</i18n>
<template lang="pug">
  section.py-16
    v-row(
        no-gutters
        aling="center"
      )

        v-col.px-6.py-6(
          justify="center"
          class="col-12 col-md-5"
        )
          h1.text-h3.text-center {{title}}
          a.text-center.d-block(href="mailto:contacto@lucanos.co" style="text-aling: center;") contacto@lucanos.co

          a.text-center.d-block(href="mailto:contacto@lucanos.co" style="text-aling: center;")
            lottie-vue-player.mx-auto(
              style="max-width: 450px;"
              src="/lottie/newsletter.json"
            )

        v-col.px-6.py-6(
          class="col-12 col-md-6"
          aling="center"
          justify="center"
        )
          h1.text-h3.text-center.mb-6 {{$t('title-2')}}
          img.img-edwin.mx-auto.d-flex(
            src="/img/edwin-cano.webp"
            width="280"
            height="280"
            loading="lazy"
            alt="Edwin Cano"
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
                v-icon mdi-facebook
              v-btn(
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/edwin-cano-cofinancer/"
                icon
                value="linkedin"
              )
                v-icon mdi-linkedin

</template>
<script>
export default {
  props:{
    title:{
      type: String,
      default: "Contactanos"
    }
  }
}
</script>
