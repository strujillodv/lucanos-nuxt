<template lang="pug">
  v-container
    section.post-container
      CardPost(
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      )
</template>
<script>
export default {
  name: 'Posts',
  async asyncData({ app, error, commit }) {
    const posts = await app.$content(app.i18n.locale + '/blog')
      .where({
        published: true
      })
      .sortBy('date', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Página no encontrada' })
      })

    return {
      posts: posts.map((post) => ({
      ...post,
      path: post.path.replace('/es', ''),
    }))
    }
  }
}
</script>
<style>
  .post-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 290px);
    justify-content: center;
  }
</style>
