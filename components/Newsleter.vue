<template lang="pug">
  section.py-10
    v-row(
        no-gutters
        aling="center"
      )
        v-col(
          class="col-12 d-flex justify-center"
        )
          h1.text-h3 {{title}}
        v-col(
          class="col-12 col-md-5  d-flex justify-center justify-md-end"
        )
          lottie-vue-player(
            style="max-width: 350px;"
            src="/lottie/newsletter.json"
          )
        v-col(
          class="col-12 col-md-6 d-flex justify-center align-self-center"
          aling="center"
        )
          FormMailchimp
</template>
<script>
export default {
  props:{
    title:{
      type: String,
      default: "Suscribete y mantente informado"
    }
  }
}
</script>
