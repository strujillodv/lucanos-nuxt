<i18n lang="yaml">
es:
  title: "Principales Wallets de Lucanos"
  page: "Página oficial"

en:
  title: "Main Lucanos Wallets"
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
      v-for="(item, index) in wallets"
      :key="index"
      class="col-6 col-sm-4"
    )
      v-card.mx-auto(
        flat
        style="overflow: hidden;"
      )
        v-dialog(
          width="250"
        )
          template( v-slot:activator="{ on, attrs }")
            v-img(
              width="250"
              height="100%"
              :src="item.img"
              :alt="item.title"
              v-bind="attrs"
              v-on="on"
              style="margin: auto;"
            )

          v-card(
            width="250"
          )
            v-img(
              width="100%"
              height="100%"
              :src="item.qr"
              :alt="item.title"
            )
            v-card-text {{item.address}}

        v-card-actions.justify-center
          <v-btn text target="blank" :href="item.link" color="primary">
            | {{$t('page')}}
            <v-icon>mdi-link</v-icon>
          </v-btn>

</template>
<script>
export default {
  data: () => ({
    wallets: [
      {
        title: "Metamask",
        img: "img/wallets/metamask.svg",
        link: "https://metamask.io/",
        qr: "img/wallets/metamask-qr.png",
        address: "0xc21780B3Ab80a044c88CA9dCacBFF2AEbc171f2e"
      },
      {
        title: "Binance",
        img: "img/wallets/binance.svg",
        link: "https://accounts.binance.com/es/register?ref=79246618",
        qr: "img/wallets/binance-qr.png",
        address: "0xc21780B3Ab80a044c88CA9dCacBFF2AEbc171f2e"
      },
      {
        title: "Phantom",
        img: "img/wallets/phantom-logo.svg",
        link: "https://phantom.app/",
        qr: "img/wallets/phantom-qr.png",
        address: "DrdyB9inxbWCCrFMsLY1eax57xoNk159rpwsTHCeb8UN"
      },
      {
        title: "Ronnin",
        img: "img/wallets/ronin.png",
        link: "https://wallet.roninchain.com/",
        qr: "img/wallets/binance-qr.png",
        address: "ronin:771133ef5f28b29495dbb82725a487f64a8a7b5f"
      }
    ]
  })
}
</script>
