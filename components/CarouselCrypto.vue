<template lang="pug">
  div.slider
    div.slide-track
      div.slide(
        v-for="(item, i) in coins"
        :key="i"
      )
        v-btn(
          text
          small
          to="/monedas"
        )
          v-avatar(tile size="20")
            v-img(:src="item.image")
          span &nbsp; {{ item.symbol }} - ${{ (item.current_price * 1).toFixed(4) }} USD
          span(
            :class="[ (item.price_change_percentage_1h_in_currency * 1) > 0 ? 'green--text' : 'red--text']"
          ) &nbsp;{{(item.price_change_percentage_1h_in_currency * 1).toFixed(4)}}%
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    'coins': state => state.crypto.coins
  }),
}
</script>
<style>

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 45));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 45));
  }
}
.slider {
  background: transparent;
  height: 30px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 30px;
  position: absolute;
  width: 5%;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 160s linear infinite;
          animation: scroll 160s linear infinite;
  display: flex;
  width: calc(250px * 50);
}
.slider .slide {
  height: 30px;
  width: 250px;
  display: flex;
  justify-content: center;
}
</style>
