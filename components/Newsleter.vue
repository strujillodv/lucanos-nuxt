<template lang="pug">
  section
    v-row(
        style="z-index: 1;"
        no-gutters
        aling="center"
      )
        v-col(
          class="col-10 col-sm-4  d-flex justify-center"
        )
          lottie-vue-player(
            style="max-width: 290px;"
            src="/lottie/newsletter.json"
          )
        v-col(
          class="col-12 col-sm-6 offset-sm-1 d-flex justify-center align-self-center"
          aling="center"
        )
</template>
