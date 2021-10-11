<template lang="pug">
  section.post-container
    CardPost(
      :posts="posts"
    )
</template>
<script>
export default {
  name: 'Posts',
  async asyncData({ app, error }) {
    const posts = await app.$content(app.i18n.locale + '/blog')
      .where({
        published: true
      })
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
  },
  data: () => ({
    post: {}
  }),

}
</script>
<style>
  .post-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 290px);
    justify-content: center;
  }
</style>
