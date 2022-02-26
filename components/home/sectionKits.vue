<i18n lang="yaml">
es:
  title: "Kit de herramientas"
  page: "Página oficial"

en:
  title: "kit of tools"
  page: "Official website"

</i18n>
<template lang="pug">
v-container.my-16
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
      class="col-12"
    )
      v-timeline(
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      )
        v-timeline-item(
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        )
          v-card(
            :color="item.color"
            dark
          )
            <v-card-title class="text-h6">
              | {{item.title}}
            </v-card-title>
            //- v-img.py-5(
            //-   width="120"
            //-   height="60"
            //-   :src="item.img"
            //- )

            v-card-text.white.text--primary
              p {{item.text}}
              v-btn(
                text target="blank"
                :href="item.link"
                color="primary"
              )
                | {{$t('page')}}
                v-icon mdi-link
    v-col.my-4(
      class="col-12"
    )
      h2(
        class="text-center text-xs-h4 text-md-h3"
      )
        | Indice Fear and Greed
    v-col.my-4.d-flex.align-self-center(
      justify="center"
      class="col-12 col-sm-6"
    )

      <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" style="max-width: 100%; max-width: 400px; margin: auto;" />

    v-col.my-4.d-flex.align-self-center(
      justify="center"
      class="col-12 col-sm-6"
    )

      v-list(
        max-width="500"
        width="100%"
      )
        v-list-item(
          v-for="(item, index) in indexBlockchain" :key="index"
        )
          v-list-item-content
            v-list-item-title {{labels[index]}}
            v-list-item-subtitle.headline(
              :class="colorChange(item.value_classification) + '--text'"
            ) {{item.value_classification}}
          v-list-item-avatar(
            width="56"
            height="56"
          )
            v-avatar(
              :color="colorChange(item.value_classification) + ' darken-1'"
              size="56"
            ) {{ item.value }}



    v-col.my-4.align-self-center(
      class="col-12"
    )
      p El índice “Fear and Greed” es una herramienta que analiza varias fuentes de información para enseñar el sentimiento hacia Bitcoin y arroja el resultado en una escala que va del 0 (rojo, miedo) al 100 (verde, codicia)
      p Cuando el mercado está generalmente en la zona de miedo puede significar que bitcoin esta subvalorado y es buen momento para comprar.
      p Cuando el mercado está en codicia, se interpreta como esta sobrevalorado y es una señal de venta
      p Este indicador se basa en varios factores como: la volatilidad del mercado, el volumen de trading, el sentimiento general en redes sociales, el dominio de Bitcoin relativo a otras criptos, etc.



</template>
<script>
import { mapState } from 'vuex'
  export default {
    data: () => ({
      labels:[
        'Now',
        'Yesterday',
        'Last week',
        'Last month'
      ],
      items: [
        {
          color: 'teal lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Glassnode',
          text: 'Uno de los sitios más prestigiosos donde brindan una cantidad de datos on-chain increíbles. Para acceder a todos los datos e indicadores, existen versiones pagas.',
          link: 'https://glassnode.com'
        },
        {
          color: 'purple lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Blockchaincenter',
          text: 'En este indicador vamos a poder ver cómo se está moviendo el mercado en general, e indicarnos si estamos ante una altseason o muy próximos.',
          link: 'https://blockchaincenter.net/altcoin-season-index/'
        },
        {
          color: 'green lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Dappradar',
          text: 'Sitio web que ofrece datos de varias #blockchains, filtrado por DEFI, NFT, etc.',
          link: 'https://dappradar.com'
        },
        {
          color: 'blue lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Calendario',
          text: 'Calendario cripto Latam, donde se detallan varios eventos, seminarios, cursos, charlas y mucho más sobre el mundo cripto.',
          link: 'https://calendar.google.com/calendar/u/0/r?cid=ODBxYWgxY2F2dnE2NWcwNXIzZGdqcWhqZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
        },
        {
          color: 'orange lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Companiesmarketcap',
          text: 'Sitio donde se muestra el ranking de activos por capitalización de mercado. En el mismo se detallan criptomonedas, acciones, ETFs, metales. Sirve para tomar dimensión en referencia al mercado bursátil tradicional.',
          link: 'https://companiesmarketcap.com/assets-by-market-cap/'
        },
        {
          color: 'teal lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Icodrops',
          text: 'En este sitio vas a poder encontrar fechas de lanzamientos de ICOs, además de una breve descripción de cada proyecto. ¡Interesante para aquellos inversores de alto riesgo!',
          link: 'https://icodrops.com/'
        },
        {
          color: 'purple lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Deepdao',
          text: 'En esta página se muestran datos sobre DAOs. En nuestra página principal está publicado un blog sobre las DAO, no te lo pierdas.',
          link: 'https://deepdao.io/#/deepdao/dashboard'
        },
        {
          color: 'green lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Lookintobitcoin',
          text: 'Este sitio ofrece indicadores muy interesantes, donde toma varias variables y trata de entender el comportamiento de patrones.',
          link: 'https://lookintobitcoin.com'
        },
        {
          color: 'blue lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Coingecko',
          text: 'Coingecko es una página donde vas a poder encontrar todos los proyectos cripto del mercado, con datos oficiales como página web, redes sociales, smart contracts, etc. También vas a tener datos de exchanges, donde se lista cada token.',
          link: 'https://coingecko.com/es'
        },
        {
          color: 'orange lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Atani',
          text: 'Atani es una herramienta que le permite operar con criptomonedas en varios exchange de manera simultánea y segura, brinda información de análisis técnico con gráficos.',
          link: 'https://atani.com/es'
        },
        {
          color: 'teal lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Invictuscapital',
          text: 'Invictus Capital es una plataforma de inversión en criptomonedas que le permite depositar criptos y elegir los diferentes fondos que tienen exposición a las principales 10 o 20 criptomonedas rankeadas por capitalización de mercado. Ofrece ingresos pasivos, es decir que no hay que gestionar nada en la plataforma, solo deposita, elige el fondo que prefiera y luego recibe la rentabilidad generada en el periodo de tiempo elegido.',
          link: 'https://invictuscapital.com/es/'
        },
        {
          color: 'purple lighten-2',
          img: 'https://glassnode.com/images/glassnode.svg',
          icon: 'mdi-star',
          title: 'Buybitcoinworldwide',
          text: 'En este sitio detallan el acumulado de Bitcoin que poseen las compañías, ETFs y gobiernos.',
          link: 'https://buybitcoinworldwide.com/treasuries/'
        },
      ],
    }),
    computed: {
    ...mapState({
    'indexBlockchain': state => state.crypto.index
    })
  },
  methods: {
    colorChange(value) {
      let colorElement = 'yellow'
      switch (value) {
        case 'neutral':
          colorElement = 'yellow'
          break
        case 'Fear':
          colorElement = 'amber'
          break
        case 'Extreme Fear':
          colorElement = 'orange'
          break
        case 'Greed':
          colorElement = 'light-green'
          break
        case 'Extreme Greed':
          colorElement = 'green'
          break
      }
      return colorElement
    }
  }
  }
</script>
