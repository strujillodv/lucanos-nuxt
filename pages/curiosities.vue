<i18n lang="yaml">
es:
  title: "Curiosidades"
en:
  title: "Curiosities"
</i18n>
<template lang="pug">
  section
    v-parallax(
      alt="Servicios LuCanos"
      tag="header"
      loading="lazy"
      src="/img/services.webp"
      height="300"
    )
      div.continer-hero
      v-row.mx-auto(
        style="z-index: 1; align-items: end; max-width: 900px;"
        class="col-12 "
        justify="center"
        aling="end"
      )
        h1.text-h2.text-md-h1 {{$t('title')}}

    <v-container>
      <v-row dense>
        v-col(
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="6"
          lg="4"
        )
          <v-card>
            v-img(
              :src="card.src"
              :alt="card.title"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            )
            </v-img>

            //- <v-card-actions>
            //-   <v-spacer></v-spacer>

            //-   <v-btn icon>
            //-     <v-icon>mdi-heart</v-icon>
            //-   </v-btn>

            //-   <v-btn icon>
            //-     <v-icon>mdi-bookmark</v-icon>
            //-   </v-btn>

            //-   <v-btn icon>
            //-     <v-icon>mdi-share-variant</v-icon>
            //-   </v-btn>
            //- </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>




    //- v-container
    //-   v-row(
    //-     no-gutters
    //-     aling="center"
    //-   )
    //-     v-image(
    //-       height="200"
    //-       src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    //-     )
        //- v-col(
        //-   class="col-12 col-md-5  d-flex justify-center justify-md-end"
        //- )
        //-   lottie-vue-player(
        //-     style="max-width: 450px;"
        //-     src="https://assets8.lottiefiles.com/packages/lf20_ocib98vu.json"
        //-   )
        //- v-col(
        //-   class="col-12 col-md-6 d-flex justify-center align-self-center"
        //-   aling="center"
        //- )
        //-   v-card(
        //-     elevation="0"
        //-   )
        //-     v-card-text
        //-       h2.mb-6 Aprende sobre Blockchain transformando el sistema financiero.
        //-       p El encuentro se llevó a cabo el 11 de Noviembre de 2021, en conjunto con la UNAD Universidad Nacional Abierta y a Distancia.
        //-       youtube(
        //-         height="250"
        //-         width="100%"
        //-         video-id="DhOHPc4MrGo"
        //-       )


</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: '/img/curiosities/curiositi01.webp'},
        { title: 'Cuales fueron las tecnologias que se conbinaron para el surgimiento de bitcoin', src: '/img/curiosities/curiositi02.webp'},
        { title: 'Companias que exploran el metaverso', src: '/img/curiosities/Companias-que-exploran-el-metaverso.gif'}
      ],
    }),
  }
</script>
