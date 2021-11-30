<i18n lang="yaml">
es:
  msj: "Sitio en construcción, estamos trabajando para mejorar, por favor vuelve en otra ocación."
en:
  msj: "Site under construction, we are working to improve, please come back another time"
</i18n>
<template lang="pug">
  v-row.justify-center
      v-col.my-2.justify-center(
        class="col-12 col-sm-6 col-md-4"
      )
        lottie-vue-player(
          style="max-width: 5000px;"
          src="https://assets6.lottiefiles.com/packages/lf20_byuzwmds.json"
          aria-label="Lottie blockchain"
        )
      v-col.my-2.justify-center.align-self-start.align-self-md-center(
        class="col-12 col-sm-6 col-md-4"
      )
        h2 {{$t('msj')}}
</template>
