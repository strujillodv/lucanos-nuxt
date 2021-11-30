<i18n lang="yaml">
es:
  title: "Conferencias"
en:
  title: "Conferences"
</i18n>
<template lang="pug">
  section
    v-parallax(
      alt="Servicios LuCanos"
      tag="header"
      loading="lazy"
      src="/img/services.webp"
      height="400"
    )
      div.continer-hero
      v-row.mx-auto(
        style="z-index: 1; align-items: end; max-width: 900px;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 {{$t('title')}}
    v-container
      v-row(
        no-gutters
        aling="center"
      )
        v-col(
          class="col-12 col-md-5  d-flex justify-center justify-md-end"
        )
          lottie-vue-player(
            style="max-width: 450px;"
            src="https://assets8.lottiefiles.com/packages/lf20_ocib98vu.json"
          )
        v-col(
          class="col-12 col-md-6 d-flex justify-center align-self-center"
          aling="center"
        )
          v-card(
            elevation="0"
          )
            v-card-text
              h2.mb-6 Aprende sobre Blockchain transformando el sistema financiero.
              p El encuentro se llevó a cabo el 11 de Noviembre de 2021, en conjunto con la UNAD Universidad Nacional Abierta y a Distancia.
              youtube(
                height="250"
                width="100%"
                video-id="DhOHPc4MrGo"
              )


</template>
