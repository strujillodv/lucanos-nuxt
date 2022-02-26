import axios from 'axios'

export const state = () => ({
  coins: [],
  index: []
})

export const mutations = {
  addData(state, dataCoins) {
    state.coins = dataCoins
  },
  addIndex(state, dataIndex) {

    dataIndex.splice(2, 5);
    dataIndex.splice(3, 22);

    state.index = dataIndex
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
  },
  getIndex ({ commit }) {
    const url = 'https://api.alternative.me/fng/?limit=31'
    axios
      .get(url)
      .then(response => {
        commit('addIndex', response.data.data)
    })
  }
}
