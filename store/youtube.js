import axios from 'axios'

export const state = () => ({
  videos: []
})

export const mutations = {
  addData(state, dataVideos) {
    state.videos = dataVideos
  }
}

export const actions = {
  getVideos ({ commit }) {
    axios
      .get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&channelId=UC0XcbFpOy_ZaYvH2ulzz78A&maxResults=10&key=AIzaSyCTNxi5AyNJVvshp818PZhZAtJNZjs6NqE')
      .then(response => {
        commit('addData', response.data.items)
    })
  }
}
