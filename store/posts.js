export const state = () => ({
  posts: []
})

export const mutations = {
  addPosts(state, posts) {
    state.post = posts
  }
}

export const actions = {
  async fetchPost ({ app, error, commit }) {

    let posts = await app.$content(app.i18n.locale + '/blog')
    .where({
      published: true
    })
    .fetch()
    .catch(() => {
      error({ statusCode: 404, message: 'Página no encontrada' })
    })

    posts = posts.map((post) => ({
      ...post,
      path: post.path.replace('/es', ''),
    }))

    commit('addPosts', posts)
  },
}
