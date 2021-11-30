<i18n lang="yaml">
es:
  title-1: "Nuestros Aliados"
en:
  title-1: "Allies"
</i18n>
<template lang="pug">
  v-container.my-6
    v-row(
      aling="center"
    )
      v-col.my-4(
        class="col-12"
      )
        h2(
          class="text-center text-xs-h4 text-md-h3"
        )
          | {{$t('title-1')}}

      v-row.my-2.justify-center.align-center(
        class="col-12"
      )
        v-card.mx-auto.text-center.my-6(
          elevation="0"
          max-width="350"
        )
          a(
            href="https://es.eoscostarica.io/"
            target="_blank"
          )
            v-img(
              max-width="350"
              src="https://es.eoscostarica.io/img/logos/eoscr-logo.png"
              alt="EOS Costa Rica"
            )
        v-card.mx-auto.text-center(
          elevation="0"
          max-width="350"
        )
          a(
            href="https://eosio.lacchain.net/"
            target="_blank"
          )
            v-img(
              max-width="350"
              src="https://eosio.lacchain.net/img/logos/lacchain-eosio-logo.png"
              alt="EOS Costa Rica"
            )

</template>
