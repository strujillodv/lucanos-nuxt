<i18n lang="yaml">
es:
  title: "Metaversos y videojuegos play to earn en los que hacemos parte"
  page: "Página oficial"

en:
  title: "Metaverses and play to earn videogames in which we are part"
  page: "Official website"
</i18n>
<template lang="pug">
v-container.my10
  v-row(
    aling="center"
    justify="center"
  )
    v-col.my-4.align-self-center.py10(
        class="col-12 "
      )
        h3.py-6(
          class="text-h4 text-md-h3 text-center"
        )
          | {{$t('title')}}

    v-col.my-2.justify-center(
      v-for="(item, index) in services"
      :key="index"
      class="col-12 col-sm-6 col-md-6 col-lg-3"
    )
      v-card.mx-auto.text-center(
        elevation="2"
        style="overflow: hidden;"
      )
        videoDialog(
          :img="item.img"
          :alt="item.title"
          :videoId="item.videoId"
        )

        v-card-title.justify-center(
          style="word-break: normal;"
        )
          | {{item.title}}
        v-card-actions.justify-center
          <v-btn text target="blank" :href="item.link" color="primary">
            | {{$t('page')}}
            <v-icon>mdi-link</v-icon>
          </v-btn>

</template>
<script>
export default {
  data: () => ({
    services: [
      {
        title: "Star Atlas",
        img: "img/games/Staratlas.webp",
        videoId: "ciFSSd39pAY",
        link: "https://staratlas.com/",
      },
      {
        title: "Axie Infinity",
        img: "img/games/Axie-Infinity.webp",
        videoId: "oMa8cc6YxSI",
        link: "https://axieinfinity.com/"
      },
      {
        title: "Sandbox",
        img: "img/games/sandbox.webp",
        videoId: "CB_0OzZicQM",
        link: "https://www.sandbox.game/"
      },
      {
        title: "Decentraland",
        img: "img/games/decentralang.webp",
        videoId: "b2w89mxzmWg",
        link: "https://decentraland.org/"
      }
    ]
  })
}
</script>
