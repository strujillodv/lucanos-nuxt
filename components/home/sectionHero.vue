<template lang="pug">
   section.snew
      v-responsive(:aspect-ratio="16/6")
        v-row.pt-6.align-center.justify-center
          v-col.my-2(
            class="col-12 col-md-5 px-8"
            color="white"
          )
            h1.text-h2.font-weight-bold.white--text Forma parte del futuro digital con LuCanos
          v-col.my-6(
            class="col-12 col-md-6"
          )
            v-img.mx-auto(
              max-width="600"
              src="img/crypto.svg"
              alt="crypyo crurrenci"
            )
</template>
<style>
.snew {
  position: relative;
}
.snew::before {
  content: "";
  width: 150vw;
  height: 135vh;
  transform: rotate(-4deg);

  /* background-color: rgb(11, 58, 145); */

  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgb(11, 58, 145) 35%, rgba(0,121,255,1) 100%);
  position: absolute;
  top: -35vh;
  left: -25vw;
  right: -25vw;
}
</style>
