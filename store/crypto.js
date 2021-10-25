import axios from 'axios'

export const state = () => ({
  coins: []
})

export const mutations = {
  addData(state, dataCoins) {
    state.coins = dataCoins
  }
}

export const actions = {
  getCoins ({ commit }) {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
      .then(response => {
        commit('addData', response.data)
    })
  }
}
