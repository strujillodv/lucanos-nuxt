<i18n lang="yaml">
es:
  services:
    tokenization:
      title: "Tokenización de Activos"
      lottieUrl: "/lottie/tokenización.json"
      text: "Para inmuebles, vehículos, maquinaría, derechos de autor"
    ntf:
      title: "NFT Token no fungible"
      lottieUrl: "/lottie/nft.json"
      text: "Cree coleccionables únicos o asegure sus ventas en tickets de eventos"
    suministro:
      title: "Cadena de Suministro"
      lottieUrl: "/lottie/cadena-suministro.json"
      text: "Maneje un control preciso sobre los productos de su empresa"
    defi:
      title: "DeFi"
      lottieUrl: "/lottie/defi.json"
      text: "Finanzas desentralizadas, Soluciones para Fintech, financiación P2P"
en:
  services:
    tokenization:
      title: "Asset Tokenization"
      lottieUrl: "/lottie/tokenización.json"
      text: "For real estate, vehicles, machinery, copyright"
    ntf:
      title: "Non-fungible NFT Token"
      lottieUrl: "/lottie/nft.json"
      text: "Create unique collectibles or secure your sales on event tickets"
    suministro:
      title: "Supply chain"
      lottieUrl: "/lottie/cadena-suministro.json"
      text: "Manage precise control over your company's products"
    defi:
      title: "DeFi"
      lottieUrl: "/lottie/defi.json"
      text: "Decentralized finance, Fintech solutions, P2P financing"
</i18n>
<template lang="pug">
v-container
  v-container
    v-row(
      aling="center"
    )
      v-col.my-2.justify-center(
        v-for="(item, index) in $t('services')"
        :key="index"
        class="col-12 col-sm-6 col-md-3"
      )
        v-card.mx-auto.text-center.animate-card(
          elevation="2"
          min-height="290"
        )
          lottie-vue-player.mx-auto(
            style="max-width: 200px; height: 157px"
            :src="item.lottieUrl"
            aria-disabled="true"
            aria-selected="false"
          )
          v-card-title.justify-center(
            style="word-break: normal;"
          )
            | {{item.title}}
          v-card-subtitle(
            style="word-break: normal;"
          )
            | {{item.text}}
</template>
<style>
.animate-card {
  transition: all .35s ease;
}
.animate-card:hover {
  transform: translateY(-25px)
}
</style>
