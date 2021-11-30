<i18n lang="yaml">
es:
  title:
en:
  title:
</i18n>
<template lang="pug">
  v-container.my-8
    v-row
      v-row(
        class="col-12 d-flex justify-center text-center"
      )
        v-img(
          contain
          position="left center"
          max-height="48"
          max-width="200"
          alt="Lucanos el mundo que esperas"
          :src="require('@/assets/img/logo.svg')"
        )
        h1.text-h3 te invita a conectarte
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
            p El encuentro se llevara a cabo por ZOOM el proximó 11 de Noviembre de 2021 a las 06:00 p.m. colombia, no te lo pierdas.
            p No te olvides de seguirnos en nuestras redes para estar enterado de proximos eventos
            SocialButtons
          v-card-actions
            //<a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=Mmx2MmMyaGZlNmFpcm9zMnI0azRldjN2NGYgbHVjYW5vc29maWNpYWxAbQ&amp;tmsrc=lucanosoficial%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es-419.gif"></a>

    Newsleter(
      title="Suscribete para recibir el link del evento"
    )
    v-row(
      class="col-12  d-flex justify-center"
    )
      h1.text-h3 Evento organizado en conjunto con la
      img(
        style="width: 100%; max-width: 450px; margin: 0 16px;"
        alt="universidad Nacional Abierta y a Distancia"
        src="/img/landing/unad-logo.jpg"
      )
</template>
<script>
export default {
  layout: "landing"
}
</script>
