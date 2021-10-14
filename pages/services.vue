<i18n lang="yaml">
es:
  title: "Educación y asesoría en Blockchain"
  title-2: "Que es el Blockchain"
  p-1: "Esta tecnología tiene un sin fin de aplicaciones como puede ser cadenas de suministro, Cuidado de la salud, Sector público, Comercio minorista, Medios de comunicación – publicidad, Petróleo – gas, Telecomunicaciones, Seguros, Servicios financieros, entre otros, los cuales ya están siendo implementados en varias empresas al rededor del mundo."
  p-2: "La mayoría de blockchains están diseñadas como bases de datos descentralizadas que funcionan como libros contables (ledgers) distribuidos. Estos libros contables blockchain registran y almacenan datos en bloques, que se organizan en una secuencia cronológica y se vinculan mediante pruebas criptográficas."
  p-3: "Blockchain es un libro mayor compartido e inalterable que facilita el proceso de registrar transacciones y rastrear activos dentro de una red empresarial. Un activo puede ser tangible (una casa, un coche, dinero en efectivo, terrenos) o intangible (propiedad intelectual, patentes, derechos de autor, marcas). Prácticamente cualquier cosa de valor puede ser rastreada y comercializada en una red blockchain, reduciendo el riesgo y los costos para todos los involucrados."
  description: "Empresa dedicada a enseñar sobre las diferentes aplicaciones de la tecnología blockchain y como su impacto esta haciendo historia"
  image: "https://lucanos.co/img/services.webp"
en:
  title: "Blockchain education and consulting"
  title-2: "What is the Blockchain"
  p-1: "This technology has an endless number of applications such as supply chains, Healthcare, Public sector, Retail trade, Media - advertising, Oil - gas, Telecommunications, Insurance, Financial services, among others, which are already being implemented in several companies around the world."
  p-2: "Most blockchains are designed as decentralized databases that function as distributed ledgers. These blockchain ledgers record and store data in blocks, which are organized in a chronological sequence and linked by cryptographic evidence."
  p-3: "Blockchain is a shared and unalterable ledger that facilitates the process of recording transactions and tracking assets within a business network. An asset can be tangible (a house, a car, cash, land) or intangible (intellectual property, patents, copyrights, trademarks). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and costs for everyone involved."
  description: "Company dedicated to teaching about the different applications of blockchain technology and how its impact is making history"
  image: "https://lucanos.co/img/services.webp"
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
        v-col.my-4(
            class="col-12"
          )
            h2(
              class="text-center text-xs-h4 text-md-h3"
            )
              | {{$t('title-2')}}
        v-col.my-4.align-self-center(
          class="col-12 col-md-6"
        )
          p {{$t('p-1')}}
          p {{$t('p-2')}}

        v-col.my-4.align-self-center(
          class="col-12 col-md-6"
        )
          lottie-vue-player.mx-auto(
            style="max-width: 450px;"
            src="/lottie/services.json"
            aria-label="Lottie services"
          )
        v-col.my-4.align-self-center(
          class="col-12"
        )
          p
</template>
<script>
export default {
  name: "Services",
  head() {
    return {
      title: this.$t('title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('description'),
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "page",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://lucanos.co/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://lucanos.co/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t('title'),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t('description'),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$t('image'),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$t('image'),
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://lucanos.co/${this.$route.params.slug}`,
        },
      ],
    };
  }
}
</script>
