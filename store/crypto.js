import axios from 'axios'

export const state = () => ({
  coins: []
})

export const mutations = {
  addData(state, dataCoins) {
    state.coins = dataCoins
  }
}
export const getters = {

  search: (state) => (search) => {
    if (search !== null || search !== undefined || search !== ""){
      return state.coins.filter(coins =>
        coins.name.toLowerCase().includes(search.toLowerCase()) ||
        coins.symbol.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      return state.coins
    }

  }
}

export const actions = {
  getCoins ({ commit }) {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,24h&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    axios
      .get(url)
      .then(response => {
        commit('addData', response.data)
    })
  }
}
