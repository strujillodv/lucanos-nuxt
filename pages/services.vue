<template lang="pug">
  section
    v-parallax(
      tag="header"
      src="/img/services.jpg"
      height="400"
    )
      div.continer-hero
      v-row.mx-auto(
        style="z-index: 1; align-items: end; max-width: 900px;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 Educación y asesoría en Blockchain
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
              | Que es el Blockchain
        v-col.my-4.align-self-center(
          class="col-12 col-md-6"
        )
          p Esta tecnología tiene un sin fin de aplicaciones como puede ser cadenas de suministro, Cuidado de la salud, Sector público, Comercio minorista, Medios de comunicación – publicidad, Petróleo – gas, Telecomunicaciones, Seguros, Servicios financieros, entre otros, los cuales ya están siendo implementados en varias empresas al rededor del mundo.
          p La mayoría de blockchains están diseñadas como bases de datos descentralizadas que funcionan como libros contables (ledgers) distribuidos. Estos libros contables blockchain registran y almacenan datos en bloques, que se organizan en una secuencia cronológica y se vinculan mediante pruebas criptográficas.

        v-col.my-4.align-self-center(
          class="col-12 col-md-6"
        )
          lottie-vue-player.mx-auto(
            style="max-width: 450px;"
            src="/lottie/services.json"
          )
        v-col.my-4.align-self-center(
          class="col-12"
        )
          p Blockchain es un libro mayor compartido e inalterable que facilita el proceso de registrar transacciones y rastrear activos dentro de una red empresarial. Un activo puede ser tangible (una casa, un coche, dinero en efectivo, terrenos) o intangible (propiedad intelectual, patentes, derechos de autor, marcas). Prácticamente cualquier cosa de valor puede ser rastreada y comercializada en una red blockchain, reduciendo el riesgo y los costos para todos los involucrados.
</template>
<script>
export default {
  name: "Services"
}
</script>
