<i18n lang="yaml">
es:
  title: "Criptomonedas"
  search: "Buscar"
  headers:
    - text: "#"
      align: "center"
      filterable: false
      sortable: false
      value: "market_cap_rank"
    - text: "Nombre"
      value: "nameCoin"
    - text: "Precio"
      align: "center"
      value: "price"
    - text: "1h %"
      align: "center"
      value: "changePrice1h"
    - text: "24h %"
      align: "center"
      value: "changePrice24h"
    - text: "Volumen (24h)"
      align: "center"
      value: "totalVolume"
en:
  title: "Cryptocoins"
  search: "Search"
  headers:
    - text: "#"
      align: "center"
      filterable: false
      sortable: false
      value: "market_cap_rank"
    - text: "Name"
      value: "nameCoin"
    - text: "Price"
      align: "center"
      value: "price"
    - text: "1h %"
      align: "center"
      value: "changePrice1h"
    - text: "24h %"
      align: "center"
      value: "changePrice24h"
    - text: "Volumen (24h)"
      align: "center"
      value: "totalVolume"
</i18n>
<template lang="pug">
  section
    v-parallax(
      tag="header"
      src="/img/stack-money-coin-with-trading-graph.jpg"
      height="200"
    )
      div.continer-hero
      v-row(
        style="z-index: 1; align-items: end;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 {{$t('title')}}
    v-container.fluid
      v-card
        v-card-title
          v-text-field(
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('search')"
            @input="filterCoins"
          )
        v-data-table(
          :headers="Object.values($t('headers'))"
          :items="coins"
        )
          template( v-slot:item.nameCoin="{ item }")
            v-avatar(tile size="20")
              v-img(:src="item.image")
            span &nbsp; {{ item.name }}&nbsp;{{ item.symbol.toUpperCase()}}
          template( v-slot:item.price="{ item }")
            div.text-right $ {{ item.current_price.toFixed(2) }} USD
          template( v-slot:item.changePrice1h="{ item }")
            div.text-right(
              :class="[ item.price_change_percentage_1h_in_currency > 0 ? 'green--text' : 'red--text']"
            ) &nbsp;{{item.price_change_percentage_1h_in_currency.toFixed(4)}} %
          template( v-slot:item.changePrice24h="{ item }")
            div.text-right(
              :class="[ item.price_change_percentage_24h_in_currency > 0 ? 'green--text' : 'red--text']"
            ) &nbsp;{{item.price_change_percentage_24h_in_currency.toFixed(4)}} %
          template( v-slot:item.totalVolume="{ item }")
            div.text-right $ {{item.total_volume.toLocaleString()}}

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    search: ''
  }),
  computed: {
    coins() {
      return this.searchCoin(this.search)
    },
    ...mapGetters({
      searchCoin: 'crypto/search'
    })
  },
  methods: {
    filterCoins () {
      this.searchCoin(this.search)

    },
  },
}
</script>
